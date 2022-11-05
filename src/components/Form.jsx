import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./someR.css";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="theForm gap-5 grid grid-rows-3 grid-cols-2 w-full"
    >
      <input
        type="text"
        name="firstname"
        className="border text-black px-4 outline-none"
        style={{ height: "40px" }}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastname"
        className="border text-black px-4 outline-none"
        placeholder="Last Name"
        style={{ height: "40px" }}
      />
      <input
        type="email"
        name="email"
        className="border text-black px-4 outline-none"
        placeholder="Email"
        style={{ height: "40px" }}
      />
      <input
        type="text"
        name="phone"
        className="border text-black px-4 outline-none"
        placeholder="Phone Number"
        style={{ height: "40px" }}
      />
      <textarea
        name="message"
        className="border px-4 pt-2 text-black outline-none"
        placeholder="Please enter your message ..."
        style={{ gridArea: "textArea", height: "200px" }}
      />
      <input
        type="submit"
        value="Send"
        className="my-4 py-2 px-8 relative sm:left-full sm:-translate-x-[50%] bg-gradient-to-r from-[#FD4B0A] to-[#FE9F0D] w-full md:w-1/3 rounded-md cursor-pointer"
      />
    </form>
  );
}
