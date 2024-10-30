import React from "react";
import racker from "../../../../public/assets/racker.png";
import car from "../../../../public/assets/yellowCar.png";
const CarImage = () => {
  return (
    <div>
      <div className="flex items-end justify-between">
        <img src={car} alt="yellow car" className="w-[606px] h-[269px]" />
        <img src={racker} alt="racker" className="w-[363px] h-[487px]" />
      </div>
      <p
        className="text-[#53575A] text-center font-inter font-semibold
                 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] pt-[120px]"
      >
        Since our esablishment in 1998, our core offering has always been <br />
        Automatic parking systems. Click to see our projects...
      </p>
    </div>
  );
};

export default CarImage;
