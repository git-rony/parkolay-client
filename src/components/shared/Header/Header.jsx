import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/assets/parkolayLogo.png";
import "./Header.css";
const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/ourApproch">Our Approch</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/corporate">Corporate</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
    </>
  );
  return (
    <nav className="mx-auto container">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[24px] font-inter text-[#53575A] "
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              className="xl:w-[132px] xl:md:h-[48px]"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[24px] font-semibold font-inter text-[#53575A] ">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={"/"}
            className="flex items-center gap-1 rounded-full bg-[#05B6C7] xl:px-[24px] lg:px-[22px] lg:py-[18px]  text-[#FFFFFF] lg:text-[18px] font-semibold text-sm"
          >
            Direct Contact
            <RiArrowRightSLine size={25} color="#FFFFFF" className="inline" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
