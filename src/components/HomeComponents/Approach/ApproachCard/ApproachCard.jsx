import React from "react";

const ApproachCard = ({ approach }) => {
  return (
    <div className="xl:w-[386px] xl:h-[286px] lg:w-[300px] lg:h-[286px]  rounded-[10px] bg-[#FFF] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.45)] pl-[32px] pt-[32px] pr-[34px]">
      <div>
        <img src={approach?.image} alt="logo" className="w-[60px] h-[60px]" />
        <h3
          className="pb-3 pt-[35px] text-[#53575A] font-inter font-semibold leading-normal 
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
        >
          {approach?.title}
        </h3>
        <p
          className="min-w-[320px] text-[#53575A] font-inter font-normal 
            text-sm sm:text-base md:text-lg lg:text-xl 
            leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px]"
        >
          {approach?.description}
        </p>
      </div>
    </div>
  );
};

export default ApproachCard;
