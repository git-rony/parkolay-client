import React from "react";
import comfort from "../../../../public/assets/logo/comfort.svg";
import design from "../../../../public/assets/logo/design.svg";
import performance from "../../../../public/assets/logo/performance.svg";
import safety from "../../../../public/assets/logo/saftey.svg";
import ApproachCard from "./ApproachCard/ApproachCard";
const Approach = () => {
  const approaches = [
    {
      image: safety,
      title: "Safety",
      description: "The safety measures beyond the standards",
    },
    {
      image: comfort,
      title: "Comfort",
      description:
        "Designed not for economic productivity, but also for the best user experience,",
    },
    {
      image: performance,
      title: "Performance",
      description:
        "Standard systems with increased power for reasonable operating times",
    },
    {
      image: design,
      title: "Design Flexibility",
      description: "Very modular components",
    },
  ];
  return (
    <div className="container mx-auto ">
      <h2 className="uppercase text-secondaryColor font-inter lg:text-[48px] md:text-[35px] text-[24px] font-semibold text-center">
        Our Approach
      </h2>
      <p className="text-center font-inter text-2xl font-semibold text-gray-700 pt-5">
        We consider each project as a pertnership and we act as expert advisers
        to produce <br /> customized parking sollutions in challenging areas of
        our customers.
      </p>

      {/* Approach Cards */}

      <div className="grid xxl:grid-cols-4 grid-cols-3 xxl:gap-[32px] gap-5 mt-[30px] ">
        {approaches.map((approach, index) => (
          <ApproachCard approach={approach} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Approach;
