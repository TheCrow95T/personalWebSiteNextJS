import { NextResponse } from "next/server";
import { headers } from "next/headers";

const nodemailer = require("nodemailer");

export async function POST(request) {
  const apiKey = headers().get("api-key");
  if (apiKey != "2e932fsubvfvsfe9f3fywscnvisunfuefw8fvsjlv") {
    console.log("invalid api key");
    return NextResponse.status(404);
  }
  const body = await request.formData();
  console.log(body);

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.APPLICATION_KEY,
      },
    });

    let mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "Contact from " + body.get("name"),
      text:
        "email address:\r\n" +
        body.get("email") +
        "\r\n\r\nContent:\r\n" +
        body.get("message"),
    };

    const info = await transporter.sendMail(mailOptions);

    if (info) {
      console.log("Email sent: " + info.response);
      return NextResponse.json({ message: "Success, email was sent" });
    } else {
      return NextResponse.json({ message: "Failed, server error" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Failed, server error" });
  }
}
