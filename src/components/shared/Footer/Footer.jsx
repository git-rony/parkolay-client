import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import logo from "../../../../public/assets/parkOlay.svg";
import recaptcha from "../../../../public/assets/recaptcha.png";
const Footer = () => {
  return (
    <div className="bg-[#383E42] xxl:h-[469px] pt-[101px]">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col  md:justify-between justify-center">
          <div className="text-[#FFF]">
            <h3 className="text-white font-inter text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
              Office Address
            </h3>
            <p className="text-white font-inter text-lg font-semibold leading-normal sm:text-xl md:text-2xl lg:text-3xl pt-[20px] pb-[10px]">
              Headquarter & Factory
            </p>
            <p className="text-white font-inter text-base font-normal sm:text-lg md:text-xl lg:text-2xl">
              Merkez Mah. Sardunya Cad. <br /> No:8, 77600 Taşköprü, Yalova
            </p>
          </div>
          <div className="text-white">
            <div>
              <img
                src={logo}
                alt="parkOlay-Logo"
                className="cursor-pointer text-center object-center mx-auto"
              />
            </div>
            <p className="text-white font-inter text-[24px] font-semibold  pt-[30px] pb-[40px]">
              Get started to up your business
            </p>
            <div className="flex items-center gap-5 justify-center">
              <div>
                <img
                  src={recaptcha}
                  alt="recaptchaImage"
                  className="w-[72px] h-[72px]"
                />
              </div>
              <div className="max-w-[316px]">
                <div className="join">
                  <input
                    className="input border-[1px] border-solid focus:border-[#fff] border-[#fff] join-item focus:outline-none bg-[#383E42]"
                    placeholder="Email"
                  />
                  <button className="btn join-item border-none rounded-r-lg bg-secondaryColor hover:bg-secondaryColor text-white">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-white font-inter text-xl font-semibold">
              Contact Information
            </h3>
            <div className="space-y-[10px] pt-[20px] text-white font-inter text-base font-normal leading-normal">
              <p>Email: info@otomatik.com.tr</p>
              <p>Phone: +90 (850) 333 36 67</p>
              <p>Fact: +90 (226) 353 27 74</p>
            </div>
            <div className="flex gap-3 items-center mt-10">
              <BsFacebook size={32} color="#05B6C7" />
              <FaYoutube
                size={32}
                color="#383E42"
                className="bg-[#05B6C7] rounded-full p-1"
              />
              <FaInstagram
                size={32}
                color="#383E42"
                className="bg-[#05B6C7] rounded-full p-1"
              />
              <RiTwitterXFill
                size={32}
                color="#383E42"
                className="bg-[#05B6C7] rounded-full p-1"
              />
              <FaLinkedinIn
                size={35}
                color="#383E42"
                className="bg-[#05B6C7] rounded-full p-[2px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[90px] h-[1px] max-w-[1920px] bg-[#FFF]"></div>

      <div className="flex justify-between items-center md:text-lg text-sm pt-[20px] pb-[18px] container mx-auto">
        <p className="text-white font-inter text-lg font-normal">
          © 2024. <span className="text-[#05B6C7]">Parkolay Company Inc.</span>{" "}
          All Rights Reserved.
        </p>
        <p className="text-[#05B6C7] font-inter md:text-lg text-sm font-normal">
          Privacy & Policy <span className="text-[#FFFFFF]">|</span> Terms of
          Use
        </p>
      </div>
    </div>
  );
};

export default Footer;
