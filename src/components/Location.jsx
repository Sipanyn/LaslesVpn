import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
function Location() {
  return (
    <div className="flex flex-col pl-2.5 pr-2.5 sm:pl-8 sm:pr-8 mb-5 w-full">
      <div className="flex flex-col gap-2.5 mb-6">
        <h4 className="text-2xl md:text-4xl font-bold text-center">
          Huge global network of fast VPN
        </h4>
        <p className="text-stone-400 text-center m-auto max-w-[420px]">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
      </div>
      <div className="w-full sm:h-[300px] flex justify-center">
        <img className="h-full object-cover" src="/images/map.png" alt="" />
      </div>
      <div className="relative w-full overflow-x-hidden ">
        <Swiper
          slidesPerView={3}
          spaceBetween={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            500: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <svg className="size-15 sm:size-30 text-gray-300 m-auto">
              <use href="/sprite.svg#amazon_icon" />
            </svg>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <svg className="size-15 sm:size-30 text-gray-300  m-auto">
              <use href="/sprite.svg#spotify_icon" />
            </svg>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <svg className="size-15 sm:size-30 text-gray-300  m-auto">
              <use href="/sprite.svg#google_icon" />
            </svg>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <svg className="size-15 sm:size-30 text-gray-300  m-auto">
              <use href="/sprite.svg#uber_icon" />
            </svg>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Location;
