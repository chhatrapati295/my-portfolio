import { Icon } from "@iconify/react/dist/iconify.js";
import { lazy, Suspense, memo } from "react";

const SendEmail = lazy(() => import("./SendEmail"));

const Contact = memo(() => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:chhatrapati1511@gmail.com?body=Hii%20Chhatrapati";
  };

  const handleWhatsAppClick = () => {
    window.location.href =
      "https://api.whatsapp.com/send/?phone=8279239833&text=Hey%21+I+want+to+discuss+a+project+with+you&type=phone_number&app_absent=0";
  };

  return (
    <section
      className="py-10 md:w-11/12 w-10/12 m-auto flex gap-10 justify-between xl:flex-row md:flex-col flex-col z-30"
      id="contact"
    >
      <div className="flex flex-col md:h-60">
        <h2 className="font-bold text-sm text-blue-600">CONTACT</h2>
        <h3 className="font-bold text-2xl">
          Don&apos;t be shy, Send me Hi{" "}
          <span className="hidden md:inline-block">🚀</span>
        </h3>
        <div className="flex md:gap-12 gap-2 md:justify-between font-medium md:flex-row xl:flex flex-col md:m-0 mt-8">
          <div className="flex md:flex-col xl:flex-row gap-6 items-center md:my-10 xl:my-10">
            <div
              className="w-14 h-14 rounded-full border border-gray-300 hover:shadow-md cursor-pointer flex justify-center items-center text-2xl text-blue-600"
              aria-label="Location"
            >
              <i
                className="fa-solid fa-map-location-dot"
                aria-hidden="true"
              ></i>
            </div>
            <div className="flex flex-col gap-[2px] md:items-center xl:items-start">
              <span className="text-sm text-gray-500">Location</span>
              <span className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                Gurugram, India
              </span>
            </div>
          </div>

          <div className="flex md:flex-col xl:flex-row gap-6 items-center md:my-10">
            <button
              onClick={handleEmailClick}
              className="w-14 h-14 rounded-full border border-gray-300 hover:shadow-md cursor-pointer flex justify-center items-center text-2xl text-blue-600"
              aria-label="Send email"
            >
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            </button>
            <div className="flex flex-col gap-[2px] md:items-center xl:items-start">
              <span className="text-sm text-gray-500">Mail</span>
              <button
                onClick={handleEmailClick}
                className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
              >
                chhatrapati1511@gmail.com
              </button>
            </div>
          </div>

          <div className="flex md:flex-col xl:flex-row gap-6 items-center md:my-10">
            <button
              className="w-14 h-14 rounded-full border border-gray-300 hover:shadow-md cursor-pointer flex justify-center items-center text-2xl text-blue-600"
              onClick={handleWhatsAppClick}
              aria-label="Chat on WhatsApp"
            >
              <Icon
                icon="ri:whatsapp-fill"
                style={{ color: "#2463eb", height: "32px", width: "32px" }}
                aria-hidden="true"
              />
            </button>
            <div className="flex flex-col gap-[2px] md:items-center xl:items-start">
              <span className="text-sm text-gray-500">Message</span>
              <button
                onClick={handleWhatsAppClick}
                className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
              >
                Chat on whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-full">
        <Suspense
          fallback={<div className="h-40">Loading contact form...</div>}
        >
          <SendEmail />
        </Suspense>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
