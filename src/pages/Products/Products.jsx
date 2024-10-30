import bannerImage1 from "../../../public/assets/products/bannerImage1.png";
const Products = () => {
  return (
    <div className="bg-[#E0F2F3] md:h-[660px] flex items-center">
      <div className="mx-auto container flex md:flex-row flex-col md:items-center justify-between">
        <div>
          <h2 className="uppercase text-secondaryColor font-semibold ">
            car lifts
          </h2>
          <p>
            The easiest way to access to the garage floors. Car lifts are space
            savers while compared to the conventional elevator’s wide and deep
            pit dimensions.
          </p>
        </div>
        <div>
          <img
            src={bannerImage1}
            alt="bannerImage"
            className="w-full h-full rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
