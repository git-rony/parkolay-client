import React from "react";
const BusinessClient = () => {
  return (
    <div className="relative ">
      <div className="bg-[url(../../../../../../public/assets/businessman.jpeg)] w-full h-[700px] bg-cover bg-no-repeat bg-center object-cover mb-[70px]">
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="flex items-center mx-auto container h-full relative inset-0 z-10">
          {/* Text Content div */}

          <div className="mx-auto container text-[#FFFFFF] ">
            <div className="flex items-center gap-[10px]">
              <p
                className="text-white font-inter font-semibold leading-none 
            text-lg sm:text-xl md:text-2xl lg:text-3xl"
              >
                What
              </p>
              <div className="h-[1px] w-[50px] bg-[#FFF]"></div>
            </div>
            <h2
              className="uppercase text-white font-inter font-semibold leading-none 
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-[10px] pb-[20px]"
            >
              OUR CLIENT SAYS...
            </h2>
            <p
              className="text-white font-inter font-semibold leading-normal 
            text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            >
              Parkolay
            </p>
            <button className="bg-secondaryColor py-[19px] px-[20px] text-white font-inter font-semibold text-base rounded-md mt-[98px]">
              View full Testimonial {" > "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessClient;
