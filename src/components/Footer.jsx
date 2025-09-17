import React from "react";
const Footer = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col-reverse sm:flex-row gap-8 justify-center bg-gray-100 p-5 sm:p-15 pb-12 mt-40 relative"
    >
      <p className="text-xs text-center text-slate-400 absolute bottom-1 m-auto left-0 right-0">
        Come for the Vpn, stay for the Community❣️
      </p>
      {/* lasles vpn */}
      <div className="flex flex-col items-center gap-4 w-full sm:w-[40%] text-sm m-auto">
        {/* logo + title */}
        <div className="flex flex-row items-center">
          <svg className="size-6">
            <use href="/sprite.svg#logo_icon" />
          </svg>
          <p>
            Lasles <span className="font-bold">VPN</span>
          </p>
        </div>
        <p className="text-stone-500 text-xs">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
        {/* icons */}
        <div className="flex flex-row gap-2.5">
          <svg className="size-8 p-1.5 bg-red-200/50 rounded-full cursor-pointer hover:-translate-y-1.5 transition-all duration-100">
            <use href="/sprite.svg#facebook_icon" />
          </svg>
          <svg className="size-8 p-1.5 bg-red-200/50 rounded-full cursor-pointer hover:-translate-y-1.5 transition-all duration-100">
            <use href="/sprite.svg#whatsapp_icon" />
          </svg>
          <svg className="size-8 p-1.5 bg-red-200/50 rounded-full cursor-pointer hover:-translate-y-1.5 transition-all duration-100">
            <use href="/sprite.svg#youtube_icon" />
          </svg>
        </div>
      </div>

      {/* links */}
      <div className="flex flex-row justify-between sm:justify-around w-full sm:w-[70%] text-sm">
        <div className="flex flex-col gap-2.5">
          <h5 className="font-bold">Product</h5>
          <p className="text-stone-500 p-0.5 rounded-md hover:bg-gray-200 cursor-pointer">
            Download
          </p>
          <p className="text-stone-500 p-0.5 rounded-md hover:bg-gray-200 cursor-pointer">
            Pricing
          </p>
          <p className="text-stone-500 p-0.5 rounded-md hover:bg-gray-200 cursor-pointer">
            Locations
          </p>
          <p className="text-stone-500 p-0.5 rounded-md hover:bg-gray-200 cursor-pointer">
            Server
          </p>
          <p className="text-stone-500 p-0.5 rounded-md hover:bg-gray-200 cursor-pointer">
            Countries
          </p>
          <p className="text-stone-500 p-0.5 rounded-md hover:bg-gray-200 cursor-pointer">
            Blog
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h5 className="font-bold">Engage</h5>
          <p className="text-stone-500 p-0.5 rounded-md hover:bg-gray-200 cursor-pointer">
            LaslesVPN
          </p>
          <p className="text-stone-500 p-0.5 rounded-md hover:bg-gray-200 cursor-pointer">
            FAQ
          </p>
          <p className="text-stone-500 p-0.5 rounded-md hover:bg-gray-200 cursor-pointer">
            Tutorials
          </p>
          <p className="text-stone-500 p-0.5 rounded-md hover:bg-gray-200 cursor-pointer">
            About us
          </p>
          <p className="text-stone-500 p-0.5 rounded-md hover:bg-gray-200 cursor-pointer">
            Privacy policy
          </p>
          <p className="text-stone-500 p-0.5 rounded-md hover:bg-gray-200 cursor-pointer">
            Terms of service
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h5 className="font-bold">Earn money</h5>
          <p className="text-stone-500 p-0.5 rounded-md hover:bg-gray-200 cursor-pointer">
            Become partner
          </p>
          <p className="text-stone-500 p-0.5 rounded-md hover:bg-gray-200 cursor-pointer">
            Affilite
          </p>
        </div>
      </div>
      {/* subscription */}
      <div className="bg-slate-50 flex flex-col sm:flex-row sm:justify-between gap-3.5 items-center w-fit sm:w-[70%] shadow-md rounded-md p-3 sm:p-6 absolute -top-40 sm:-top-26 m-auto left-0 right-0 ">
        <div className="flex flex-col gap-3.5 items-center sm:items-start sm:w-[200px]">
          <h3 className="font-bold">Subscribe now for get special features!</h3>
          <p className="text-stone-400 text-xs">Lorem ipsum dolor sit amet </p>
        </div>
        <p className="bg-red-500 text-white hover:text-red-500 hover:bg-white border-1 border-red-500 pt-2 pb-2 pl-5 pr-5 rounded-md w-fit cursor-pointer transition-all duration-100 text-sm sm:text-xl">
          Subscribe now
        </p>
      </div>
    </div>
  );
});

export default Footer;
