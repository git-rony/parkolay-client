import bannerImage1 from "../../../public/assets/products/bannerImage1.png";
const Products = () => {
  return (
    <div className="bg-[#E0F2F3] h-[660px]">
      <div className="mx-auto container">
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
