import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-medium text-[16px] p-0 ${
          isActive
            ? `bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  border-b-2  border-b-purple-500 rounded-none ${className}`
            : "text-slate-950"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
