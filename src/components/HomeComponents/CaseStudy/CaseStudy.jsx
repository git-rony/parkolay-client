import caseStudy from "../../../../public/assets/caseStudy.png";
const CaseStudy = () => {
  return (
    <div className="container mx-auto pb-[70px]">
      <div className="flex justify-between items-center md:gap-12  ">
        <div>
          <h2 className="uppercase text-secondaryColor font-inter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-normal">
            CASE STUDY
          </h2>
          <p className="font-inter text-[24px] max-w-[862px] font-semibold pt-5 text-justify">
            We consider each project as a pertnership and we act as expert
            advisers to produce customized parking sollutions in challenging
            areas of our customers.We consider each project as a pertnership and
            we act as expert advisers to produce customized parking sollutions
            in challenging areas of our customers.We consider each project as a
            pertnership and we act as expert advisers to produce customized
            parking sollutions in challenging areas of our customers.We consider
            each project as a pertnership and we act as expert advisers to
            produce customized parking sollutions in challenging areas of our
            customers.
          </p>
        </div>

        <div>
          <img
            src={caseStudy}
            alt="case-study-pic"
            className="object-cover border-[1px] border-solid border-black rounded-[77.3%]"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
