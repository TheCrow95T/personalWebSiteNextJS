import { NextResponse } from "next/server";
import { headers } from "next/headers";

const nodemailer = require("nodemailer");

export async function POST(request) {
  const apiKey = headers.get("api-key");
  if (apiKeys != "2e932fsubvfvsfe9f3fywscnvisunfuefw8fvsjlv") {
    return NextResponse.status(404);
  }

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "youremail@gmail.com",
      pass: "yourpassword",
    },
  });

  let mailOptions = {
    from: "youremail@gmail.com",
    to: "myfriend@yahoo.com",
    subject: "Contact from ",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  return new NextResponse({ message: "Success: email was sent" });
}
