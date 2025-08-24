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
      className="z-30 flex flex-col justify-between w-10/12 gap-10 py-10 m-auto md:w-11/12 xl:flex-row md:flex-col"
      id="contact"
    >
      <div className="flex flex-col md:h-60">
        <h2 className="text-sm font-bold text-blue-600">CONTACT</h2>
        <h3 className="text-2xl font-bold">
          Don&apos;t be shy, Send me Hi{" "}
          <span className="hidden md:inline-block">🚀</span>
        </h3>
        <div className="flex flex-col gap-2 mt-8 font-medium md:gap-12 md:justify-between md:flex-row xl:flex md:m-0">
          <div className="flex items-center gap-6 md:flex-col xl:flex-row md:my-10 xl:my-10">
            <div
              className="flex items-center justify-center text-2xl text-blue-600 border border-gray-300 rounded-full cursor-pointer w-14 h-14 hover:shadow-md"
            >
              <i
                className="fa-solid fa-map-location-dot"
                aria-hidden="true"
              ></i>
            </div>
            <div className="flex flex-col gap-[2px] md:items-center xl:items-start">
              <span className="text-sm text-gray-500">Location</span>
              <span className="text-sm text-gray-700 cursor-pointer hover:text-blue-600">
                Gurugram, India
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 md:flex-col xl:flex-row md:my-10">
            <button
              onClick={handleEmailClick}
              className="flex items-center justify-center text-2xl text-blue-600 border border-gray-300 rounded-full cursor-pointer w-14 h-14 hover:shadow-md"
              aria-label="Send email"
            >
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            </button>
            <div className="flex flex-col gap-[2px] md:items-center xl:items-start">
              <span className="text-sm text-gray-500">Mail</span>
              <button
                onClick={handleEmailClick}
                className="text-sm text-gray-700 cursor-pointer hover:text-blue-600"
              >
                chhatrapati1511@gmail.com
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 md:flex-col xl:flex-row md:my-10">
            <button
              className="flex items-center justify-center text-2xl text-blue-600 border border-gray-300 rounded-full cursor-pointer w-14 h-14 hover:shadow-md"
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
                className="text-sm text-gray-700 cursor-pointer hover:text-blue-600"
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
