import React from "react";
import bg from "../assets/bg.jpg";
import MOVIE_DETAILS from "../utility/constants";

export default function Showpage() {
  return (
    <div
      className="relative px-14 py-8 h-screen "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="overlay blur"></div>
      <div
        className="relative z-30 h-full rounded-3xl overflow-hidden border-4 border-white"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="px-8 py-5 text-white">
          <div>
            <h2 className="text-6xl font-bold">{MOVIE_DETAILS.title.toUpperCase()}</h2>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
