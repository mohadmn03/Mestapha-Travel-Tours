import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr",
        gridTemplateAreas: '". ." ". ." "textArea textArea"',
      }}
      className=" gap-5 grid grid-rows-3 grid-cols-2 w-full"
    >
      <input
        type="text"
        name="firstname"
        className="border text-black px-4 outline-none"
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastname"
        className="border text-black px-4 outline-none"
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        className="border text-black px-4 outline-none"
        placeholder="Email"
      />
      <input
        type="text"
        name="phone"
        className="border text-black px-4 outline-none"
        placeholder="Phone Number"
      />
      <textarea
        name="message"
        className="border px-4 pt-2 text-black outline-none"
        placeholder="Please enter your message ..."
        style={{ gridArea: "textArea" }}
      />
      <input
        type="submit"
        value="Send"
        className="my-4 py-2 px-8 relative left-full -translate-x-[50%] bg-gradient-to-r from-[#FD4B0A] to-[#FE9F0D] w-1/3 rounded-md cursor-pointer"
      />
    </form>
  );
}
