import { useRef, useState, memo, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendEmail = memo(() => {
  const form = useRef();
  const [btnDisable, setBtnDisable] = useState(false);

  const sendEmail = useCallback((e) => {
    e.preventDefault();
    if (
      form.current.user_name.value === "" ||
      form.current.user_email.value === "" ||
      form.current.message.value === ""
    ) {
      toast.warning("Please input fields first!");
      return;
    }
    setBtnDisable(true);
    emailjs
      .sendForm("service_x2ukgvy", "template_1ll9pcm", form.current, {
        publicKey: "_NWatL1_M0amDUyPb",
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
          form.current.reset();
          setTimeout(() => {
            setBtnDisable(false);
          }, 1000);
        },
        (error) => {
          toast.error("Failed to send email.");
          console.log("FAILED...", error.text);
          setBtnDisable(false);
        }
      );
  }, []);

  return (
    <div>
      <ToastContainer
        theme="dark"
        position="bottom-left"
        className="z-50"
        autoClose={3000}
        style={{ fontSize: "0.8rem" }}
        hideProgressBar
      />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col md:w-full gap-1 text-[0.8rem] rounded-md"
      >
        <label
          htmlFor="user_name"
          className="font-medium text-[0.7rem] text-gray-600"
        >
          Your name
        </label>
        <input
          id="user_name"
          className="border p-2 bg-transparent border-gray-400 placeholder-gray-600 rounded-md focus:border-blue-300 cursor-pointer outline-none mb-2"
          type="text"
          name="user_name"
          placeholder="Ex. Sagar Arya"
          required
          aria-required="true"
        />
        <label
          htmlFor="user_email"
          className="font-medium text-[0.7rem] text-gray-600"
        >
          Email
        </label>
        <input
          id="user_email"
          className="border p-2 bg-transparent border-gray-400 rounded-md placeholder-gray-600 focus:border-blue-300 cursor-pointer outline-none mb-2"
          type="email"
          name="user_email"
          placeholder="Ex. sagararya@gmail.com"
          required
          aria-required="true"
        />
        <label
          htmlFor="message"
          className="font-medium text-[0.7rem] text-gray-600"
        >
          Message
        </label>
        <textarea
          id="message"
          className="border p-2 bg-transparent border-gray-400 rounded-md placeholder-gray-600 focus:border-blue-300 cursor-pointer outline-none mb-2 min-h-[80px] resize-vertical"
          name="message"
          placeholder="Enter message here"
          required
          aria-required="true"
        />
        <button
          className={`border rounded-md p-2 bg-blue-600 text-white transition-colors duration-200 hover:bg-blue-700 ${
            btnDisable ? "cursor-not-allowed opacity-50" : ""
          }`}
          type="submit"
          disabled={btnDisable}
          aria-label={btnDisable ? "Sending message..." : "Send message"}
        >
          {btnDisable ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
});

SendEmail.displayName = "SendEmail";

export default SendEmail;
