import React from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./Templates/TopNav";
import Dropdown from "./Templates/Dropdown";

function Trending() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen p-[2%] ">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-semibold text-2xl text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-long-line mr-2 text-zinc-500  hover:text-[#6556CD]"
          ></i>
          Trending
        </h1>

        <div className="flex items-center w-[80%]">
          <TopNav />

          <Dropdown title="category" options={["tv", "movie", "all"]} />
          <div className="w-[2%]"></div>

          <Dropdown title="category" options={["tv", "movie", "all"]} />
        </div>
      </div>
    </div>
  );
}

export default Trending;
