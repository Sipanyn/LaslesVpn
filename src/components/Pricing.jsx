import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";

const Pricing = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center pl-2.5 pr-2.5 sm:pl-8 sm:pr-8 mb-15 w-full"
    >
      {/* title + content */}
      <div className="flex flex-col gap-2.5 mb-6">
        <h4 className="text-2xl md:text-4xl font-bold text-center">
          Choose your plan
        </h4>
        <p className="text-stone-400 text-center m-auto w-[400px]">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
      </div>
      {/* boxes */}
      <div className="relative w-full overflow-x-hidden">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="pricingSwiper"
        >
          <SwiperSlide>
            {" "}
            <div className="flex flex-col border-1 rounded-md border-slate-300 pt-3 pb-3 pl-8 pr-8 w-[90%] sm:w-fit h-[650px] justify-between flex-nowrap m-auto transition-all duration-200 hover:shadow-xs shadow-stone-500  hover:scale-[1.02] hover:border-stone-500 bg-stone-100 scale-[0.5] xs:scale-100">
              <div className="flex flex-col items-center gap-4">
                <img
                  className="size-[110px] mb-3"
                  src="./images/Premium 1.png"
                  alt=""
                />
                <h3 className="text-center font-bold">Free</h3>
                <ul className="flex flex-col gap-7">
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Unlimited bandwitch</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Encrypted connection</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Yes trafic logs</p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-center ">
                  <span className="font-bold">Free</span>
                </p>
                <p className="bg-red-500 border-1 border-red-500 hover:text-red-500 rounded-full text-white hover:bg-white pt-1.5 pb-1.5 pl-2.5 pr-2.5 text-center cursor-pointer transition-all duration-100">
                  Select
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col border-1 rounded-md border-slate-300 pt-3 pb-3 pl-8 pr-8 w-[90%] sm:w-fit h-[650px] justify-between flex-nowrap m-auto  transition-all duration-200 hover:shadow-md shadow-stone-500  hover:scale-[1.02] hover:border-stone-500 bg-stone-100 scale-[0.5] xs:scale-100">
              <div className="flex flex-col items-center gap-4">
                <img
                  className="size-[110px] mb-3"
                  src="./images/Premium 1.png"
                  alt=""
                />
                <h3 className="text-center font-bold">Standard plan</h3>
                <ul className="flex flex-col gap-7">
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Unlimited bandwitch</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Encrypted connection</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Yes trafic logs</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Works on all devices</p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-center ">
                  <span className="font-bold">$9/</span>
                  <span className="text-xs text-slate-300"> month</span>
                </p>
                <p className="bg-red-500 border-1 border-red-500 hover:text-red-500 rounded-full text-white hover:bg-white pt-1.5 pb-1.5 pl-2.5 pr-2.5 text-center cursor-pointer transition-all duration-100">
                  Select
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col border-1 rounded-md border-slate-300 pt-3 pb-3 pl-8 pr-8 w-[90%] sm:w-fit h-[650px] justify-between flex-nowrap m-auto  transition-all duration-200 hover:shadow-md shadow-stone-500  hover:scale-[1.02] hover:border-stone-500 bg-stone-100 scale-[0.5] xs:scale-100">
              <div className="flex flex-col items-center gap-4">
                <img
                  className="size-[110px] mb-3"
                  src="./images/Premium 1.png"
                  alt=""
                />
                <h3 className="text-center font-bold">Premium plan</h3>
                <ul className="flex flex-col gap-7">
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Unlimited bandwitch</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Encrypted connection</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Yes trafic logs</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Works on all devices</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Connect anyware</p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-center ">
                  <span className="font-bold">$12/</span>
                  <span className="text-xs text-slate-300"> month</span>
                </p>
                <p className="bg-red-500 border-1 border-red-500 hover:text-red-500 rounded-full text-white hover:bg-white pt-1.5 pb-1.5 pl-2.5 pr-2.5 text-center cursor-pointer transition-all duration-100">
                  Select
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col border-1 rounded-md border-slate-300 pt-3 pb-3 pl-8 pr-8 w-[90%] sm:w-fit h-[650px] justify-between flex-nowrap m-auto  transition-all duration-200 hover:shadow-md shadow-stone-500  hover:scale-[1.02] hover:border-stone-500  bg-stone-100 scale-[0.5] xs:scale-100">
              <div className="flex flex-col items-center gap-4">
                <img
                  className="size-[110px] mb-3"
                  src="./images/Premium 1.png"
                  alt=""
                />
                <h3 className="text-center font-bold">Golden plan</h3>
                <ul className="flex flex-col gap-7">
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Unlimited bandwitch</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Encrypted connection</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Yes trafic logs</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Works on all devices</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Connect anyware</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Get new features</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <svg className="size-4  rounded-full  text-white bg-green-400">
                      <use href="/sprite.svg#tick_icon" />
                    </svg>
                    <p>Ai support</p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-center ">
                  <span className="font-bold">$15/</span>
                  <span className="text-xs text-slate-300"> month</span>
                </p>
                <p className="bg-red-500 border-1 border-red-500 hover:text-red-500 rounded-full text-white hover:bg-white pt-1.5 pb-1.5 pl-2.5 pr-2.5 text-center cursor-pointer transition-all duration-100">
                  Select
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
});

export default Pricing;
