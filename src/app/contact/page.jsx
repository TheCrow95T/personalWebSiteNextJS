"use client";

let contact = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/email", {
        method: "post",
        headers: {
          "api-key": "2e932fsubvfvsfe9f3fywscnvisunfuefw8fvsjlv",
        },
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert(responseData["message"]);
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="">
        <div className="">
          <label htmlFor="form-name">Name </label>
          <input
            id="form-name"
            maxLength={50}
            size="lg"
            name="name"
            className=""
          />

          <label htmlFor="form-email"> Email:</label>
          <input
            id="form-email"
            required
            maxLength={80}
            name="email"
            type="email"
            className=""
          />

          <label htmlFor="form-message"> Message: </label>
          <textarea
            id="form-message"
            required
            name="message"
            rows={5}
            className=""
          />
        </div>
        <button className="" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default contact;
