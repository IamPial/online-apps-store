import React from "react";
import { FaGithub } from "react-icons/fa";
import logoImg from "../../assets/images/logo.png";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/install",
      text: "Installation",
    },
  ];

  return (
    <div className="bg-base-100/50 shadow-sm sticky top-0 backdrop-blur-md z-10 ">
      <nav className="navbar container mx-auto py-5 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden mr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52  shadow"
            >
              {navItems.map((item, index) => (
                <MyNavLink key={index} to={item.path} className={"border-none"}>
                  {item.text}
                </MyNavLink>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Hero" className="w-10" />
            <h2 className="font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-xl text-transparent uppercase">
              Hero.io
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8">
            {navItems.map((item, index) => (
              <MyNavLink key={index} to={item.path}>
                {item.text}
              </MyNavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn text-white shadow-none border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
            <FaGithub className="text-white" /> Contribute
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
