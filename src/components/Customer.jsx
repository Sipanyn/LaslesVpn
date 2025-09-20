import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import user from "/images/user1.png";
import user2 from "/images/user2.png";
import user3 from "/images/user3.png";
import user4 from "/images/user4.jpg";
import user5 from "/images/user5.jpg";
import user6 from "/images/user6.jpg";
const Customer = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col mb-10">
      <div className="flex flex-col gap-2.5 mb-6">
        <h4 className="text-2xl md:text-4xl font-bold text-center">
          Trusted by thousands of happy customer
        </h4>
        <p className="text-stone-400 text-center m-auto max-w-[420px]">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
      </div>
      {/* comments */}
      <div className="flex justify-center w-full">
        <Swiper
          slidesPerView={1}
          // spaceBetween={1}
          centeredSlides={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            930: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          className="customerSwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col gap-3 border border-slate-200 rounded-md p-2 w-[90%] sm:w-[310px] bg-slate-50">
              {/* info */}
              <div className="flex flex-row justify-between items-center h-fit w-full">
                <img className="size-16" src={user} alt="" />
                {/* name */}
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Brooklyn Simmons</p>
                  <p className="text-xs text-gray-300">Warsaw,poland</p>
                </div>
                {/* rate */}
                <div className="flex flex-row items-center h-full gap-1 mt-6">
                  <p className="text-gray-200 text-xs font-bold">4.5</p>
                  <svg className="size-6">
                    <use href="/sprite.svg#star_icon" />
                  </svg>
                </div>
              </div>
              {/* comment */}
              <p className="text-stone-400 text-xs">
                “wow...iam very happy to use this vpn,it turned out to be more
                than my expectations and so far there have been no problems.
                laslesvpn always the best”.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 border border-slate-200 rounded-md p-2 w-[90%] sm:w-[310px] bg-slate-50">
              {/* info */}
              <div className="flex flex-row justify-between items-center h-fit w-full">
                <img className="size-16" src={user2} alt="" />
                {/* name */}
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Darlene Robertson</p>
                  <p className="text-xs text-gray-300">Warsaw,poland</p>
                </div>
                {/* rate */}
                <div className="flex flex-row items-center h-full gap-1 mt-6">
                  <p className="text-gray-200 text-xs font-bold">4.5</p>
                  <svg className="size-6">
                    <use href="/sprite.svg#star_icon" />
                  </svg>
                </div>
              </div>
              {/* comment */}
              <p className="text-stone-400 text-xs">
                “wow...iam very happy to use this vpn,it turned out to be more
                than my expectations and so far there have been no problems.
                laslesvpn always the best”.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 border border-slate-200 rounded-md p-2 w-[90%] sm:w-[310px] bg-slate-50">
              {/* info */}
              <div className="flex flex-row justify-between items-center h-fit w-full">
                <img className="size-16" src={user3} alt="" />
                {/* name */}
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Darrell Steward</p>
                  <p className="text-xs text-gray-300">Warsaw,poland</p>
                </div>
                {/* rate */}
                <div className="flex flex-row items-center h-full gap-1 mt-6">
                  <p className="text-gray-200 text-xs font-bold">4.5</p>
                  <svg className="size-6">
                    <use href="/sprite.svg#star_icon" />
                  </svg>
                </div>
              </div>
              {/* comment */}
              <p className="text-stone-400 text-xs">
                “wow...iam very happy to use this vpn,it turned out to be more
                than my expectations and so far there have been no problems.
                laslesvpn always the best”.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 border border-slate-200 rounded-md p-2 w-[90%] sm:w-[310px] bg-slate-50">
              {/* info */}
              <div className="flex flex-row justify-between items-center h-fit w-full">
                <img className="size-16 rounded-full" src={user4} alt="" />
                {/* name */}
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Tom Green Road</p>
                  <p className="text-xs text-gray-300">Warsaw,poland</p>
                </div>
                {/* rate */}
                <div className="flex flex-row items-center h-full gap-1 mt-6">
                  <p className="text-gray-200 text-xs font-bold">4.1</p>
                  <svg className="size-6">
                    <use href="/sprite.svg#star_icon" />
                  </svg>
                </div>
              </div>
              {/* comment */}
              <p className="text-stone-400 text-xs">
                “wow...iam very happy to use this vpn,it turned out to be more
                than my expectations and so far there have been no problems.
                laslesvpn always the best”.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 border border-slate-200 rounded-md p-2 w-[90%] sm:w-[310px] bg-slate-50">
              {/* info */}
              <div className="flex flex-row justify-between items-center h-fit w-full">
                <img className="size-16 rounded-full" src={user5} alt="" />
                {/* name */}
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Brinee Green Wood</p>
                  <p className="text-xs text-gray-300">Warsaw,poland</p>
                </div>
                {/* rate */}
                <div className="flex flex-row items-center h-full gap-1 mt-6">
                  <p className="text-gray-200 text-xs font-bold">4.1</p>
                  <svg className="size-6">
                    <use href="/sprite.svg#star_icon" />
                  </svg>
                </div>
              </div>
              {/* comment */}
              <p className="text-stone-400 text-xs">
                “wow...iam very happy to use this vpn,it turned out to be more
                than my expectations and so far there have been no problems.
                laslesvpn always the best”.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-3 border border-slate-200 rounded-md p-2 w-[90%] sm:w-[310px] bg-slate-50">
              {/* info */}
              <div className="flex flex-row justify-between items-center h-fit w-full">
                <img className="size-16 rounded-full" src={user6} alt="" />
                {/* name */}
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold">Bernadete lee Donjee</p>
                  <p className="text-xs text-gray-300">Warsaw,poland</p>
                </div>
                {/* rate */}
                <div className="flex flex-row items-center h-full gap-1 mt-6">
                  <p className="text-gray-200 text-xs font-bold">4.0</p>
                  <svg className="size-6">
                    <use href="/sprite.svg#star_icon" />
                  </svg>
                </div>
              </div>
              {/* comment */}
              <p className="text-stone-400 text-xs">
                “wow...iam very happy to use this vpn,it turned out to be more
                than my expectations and so far there have been no problems.
                laslesvpn always the best”.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
});

export default Customer;
