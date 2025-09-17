import React from "react";
import featuers from "/images/Illustration 2 1.png";
import Typewriter from "typewriter-effect";
const Features = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row pl-10 md:pl-30 pr-10 w-full min-h-80 gap-2 md:gap-10 mt-10 sm:mt-20 mb-10 sm:mb-30"
    >
      {/* img */}
      <div className="w-full md:w-1/2 h-50 md:h-80 overflow-hidden">
        <img
          className="w-full h-full object-fill"
          src={featuers}
          alt="introduction"
        />
      </div>
      {/* content */}
      <div className="flex flex-col items-start w-full md:w-1/2 gap-4 justify-around pb-5 pt-5">
        <h4 className="text-2xl md:text-4xl font-bold">
          We provide many features you can use
        </h4>
        <p className="text-stone-400">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
        <ul>
          <li className="flex flex-row items-center gap-3">
            <svg className="size-4  rounded-full  text-white bg-green-400">
              <use href="/sprite.svg#tick_icon" />
            </svg>

            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Powerfull online protection.").start(); // No delete, no loop
              }}
              options={{
                autoStart: false, // disable autoStart since we're using onInit
                loop: true,
                wrapperClassName: "font-medium",
              }}
            />
          </li>
          <li className="flex flex-row items-center gap-3">
            <svg className="size-4  rounded-full  text-white bg-green-400">
              <use href="/sprite.svg#tick_icon" />
            </svg>

            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Internet with borders").start(); // No delete, no loop
              }}
              options={{
                autoStart: false, // disable autoStart since we're using onInit
                loop: true,
                wrapperClassName: "font-medium",
              }}
            />
          </li>
          <li className="flex flex-row items-center gap-3">
            <svg className="size-4  rounded-full  text-white bg-green-400">
              <use href="/sprite.svg#tick_icon" />
            </svg>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Supercharged VPN").start(); // No delete, no loop
              }}
              options={{
                autoStart: false, // disable autoStart since we're using onInit
                loop: true,
                wrapperClassName: "font-medium",
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Features;
