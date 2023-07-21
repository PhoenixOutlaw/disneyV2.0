import React from "react";
import NAVLINKS from "../utility/navlink";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between text-2xl font-medium px-12 py-3 h-24">
      <img className="" src={logo} alt="" />
      <div className="flex items-center space-x-6 capitalize">
        {NAVLINKS.map((link, i) => (
          <div key={i}>{link.title}</div>
        ))}
        <div className="cursor-pointer rounded-3xl border border-gray-200 px-8 py-2">log in</div>
      </div>
    </div>
  );
}
