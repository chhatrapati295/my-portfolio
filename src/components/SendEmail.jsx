import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendEmail = () => {
  const form = useRef();
  const [btnDisable, setBtnDisable] = useState(false);

  const sendEmail = (e) => {
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
        }
      );
  };

  return (
    <div>
      <ToastContainer
        theme="dark"
        position="top-center"
        autoClose={3000}
        style={{ fontSize: "0.8rem" }}
        // transition="slide"
        hideProgressBar
      />
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" flex flex-col gap-1 text-[0.8rem]  rounded-md"
      >
        <label className="font-medium text-[0.7rem] text-gray-600">
          Your name
        </label>
        <input
          className="border p-2 bg-transparent border-gray-400 placeholder-gray-600 rounded-md focus:border-blue-300 cursor-pointer outline-none mb-2"
          type="text"
          name="user_name"
          placeholder="Ex. Sagar Arya"
          required
        />
        <label className="font-medium text-[0.7rem] text-gray-600">Email</label>
        <input
          className="border p-2 bg-transparent border-gray-400 rounded-md placeholder-gray-600 focus:border-blue-300 cursor-pointer outline-none mb-2"
          type="email"
          name="user_email"
          placeholder="Ex. sagararya@gmail.com"
          required
        />
        <label className="font-medium text-[0.7rem] text-gray-600">
          Message
        </label>
        <input
          className="border p-2 bg-transparent border-gray-400 rounded-md placeholder-gray-600 focus:border-blue-300 cursor-pointer outline-none mb-2"
          name="message"
          placeholder="Enter message here"
          type="text"
          required
        />
        <button
          className={
            `border rounded-md p-2 bg-blue-600 text-white ` +
            `${btnDisable && "cursor-not-allowed"}`
          }
          type="submit"
          disabled={btnDisable}
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default SendEmail;
