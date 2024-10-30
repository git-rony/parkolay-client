import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./css/banner.css";
const Banner = () => {
  return (
    <div className="relative">
      <div
        className="absolute z-10 w-full  h-[93%]
       bg-[#0004]"
      >
        <div className="flex items-center justify-center h-full">
          <div>
            {/* buttons */}
            <div className="flex justify-center space-x-4 p-4">
              <button className="btn btn-outline hover:bg-opacity-5 hover:border-[1px] border-white hover:border-solid bg-transparent text-white rounded-full duration-300 px-[24px] py-[13px]">
                Adaptive
              </button>
              <button className="btn btn-outline hover:bg-opacity-5 hover:border-[1px] border-white hover:border-solid bg-transparent text-white rounded-full duration-300 px-[24px] py-[13px]">
                Creative
              </button>
              <button className="btn btn-outline hover:bg-opacity-5 hover:border-[1px] border-white hover:border-solid bg-transparent text-white rounded-full duration-300 px-[24px] py-[13px]">
                Reliable
              </button>
            </div>
            {/* texts */}
            <div>
              <h1
                className="text-white text-center font-inter text-[72px] font-semibold leading-normal 
                md:text-[64px] lg:text-[56px] xl:text-[48px]"
              >
                BETTER PARKING EXPERIENCE
              </h1>
              <p
                className="text-white text-center font-inter text-[32px] font-normal leading-normal 
                      md:text-[28px] lg:text-[24px] xl:text-[20px]"
              >
                Peak your park comfort with user-friendly design and <br />{" "}
                sofware...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sliders */}
      <div>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              className="w-full max-h-[780px] pb-14"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              className="w-full max-h-[780px] pb-14"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              className="w-full max-h-[780px] pb-14"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
