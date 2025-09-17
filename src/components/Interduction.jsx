import introduction from "/images/banner.png";

function Interduction() {
  return (
    <div className="flex flex-col-reverse md:flex-row pl-10 md:pl-30 pr-10 w-full min-h-80 gap-2 md:gap-10 ">
      {/* content */}
      <div className="flex flex-col items-center md:items-start w-full md:w-1/2 gap-4 justify-around pb-5 pt-5">
        <h4 className="text-2xl md:text-4xl text-center">
          Want anything to be easy with{" "}
          <span className="font-bold text-red-500">LaslesVPN</span>
        </h4>
        <p className="text-stone-400">
          Provide a network for all your needs with ease and fun using{" "}
          <span className="font-bold ">LaslesVPN </span>
          discover interesting features from us.
        </p>
        <p className="bg-red-500 text-white hover:text-red-500 hover:bg-white border-1 border-red-500 pt-2 pb-2 pl-5 pr-5 rounded-md w-fit cursor-pointer transition-all duration-100 text-xl sm:text-base">
          Get started
        </p>
      </div>
      {/* img */}
      <div className="w-full md:w-1/2 h-50 md:h-80 overflow-hidden">
        <img
          className="w-full h-full object-fill"
          src={introduction}
          alt="introduction"
        />
      </div>
      <p></p>
    </div>
  );
}

export default Interduction;
