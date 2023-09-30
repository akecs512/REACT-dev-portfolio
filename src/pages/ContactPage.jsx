import { useState } from "react";
export default function ContactForm() {
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(e.target.email.value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
      if (e.target.message.value.length === 0) {
        setMessageError("Message required");
      } else {
        setMessageError("");
      }
      if (emailRegex.test(e.target.email.value) && e.target.message.value.length > 0) {
        alert("Message sent!");
      }
      e.target.reset();
  };
  return (
    <div className="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />
        <span>{emailError}</span>
        <textarea
          className="textarea textarea-bordered" 
          placeholder="Message"
          name="message"
        ></textarea>
        <div>
          <span>{messageError}</span>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
