import SendEmail from "./SendEmail";
const Contact = () => {
  return (
    <div className=" py-10 flex gap-6 justify-around md:flex-wrap flex-col px-8 ">
      <div className=" flex flex-col  md:h-60 ">
        <h2 className="font-bold text-sm text-blue-600">CONTACT</h2>
        <h2 className="font-bold text-2xl ">
          Don&apos;t be shy! Hit me up 👉
        </h2>
        <div className="flex md:gap-16 gap-2 font-medium md:flex-wrap flex-col my-4">
          <div className="flex gap-6 items-center md:my-16">
            <i className="fa-solid fa-map-location-dot w-14 h-14 rounded-full border border-gray-300  hover:shadow-md cursor-pointer flex justify-center items-center text-2xl text-blue-600"></i>
            <div className="flex flex-col gap-[2px]">
              <span className="text-sm text-gray-500">Location</span>
              <span className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                Gurugram, India
              </span>
            </div>
          </div>
          <div className="flex gap-6 items-center md:my-10">
            <i className="fa-solid fa-envelope w-14 h-14 rounded-full border border-gray-300  hover:shadow-md cursor-pointer flex justify-center items-center text-2xl text-blue-600"></i>
            <div className="flex flex-col gap-[2px]">
              <span className="text-sm text-gray-500">Mail</span>
              <span
                onClick={() => {
                  window.location.href =
                    "mailto:chhatrapati1511@gmail.com?body=Hii%20Chhatrapati";
                }}
                className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
              >
                chhatrapati1511@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/4">
        <SendEmail />
      </div>
    </div>
  );
};

export default Contact;
