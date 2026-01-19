import React from "react";
import { Link } from "react-router-dom";

const Headers = ({ data }) => {
  // console.log(data)

  return (
    <div
      className=" w-full h-[50vh] flex flex-col justify-end items-start p-[4%]"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top 30%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="w-[70%] text-4xl font-black text-zinc-100">
        {data.original_title || data.title || data.original_name || data.name}
      </h1>

      <p className="w-[75%] text-white font-semibold mt-2">
        {data.overview.slice(0, 200)}...{" "}
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
      </p>

      <p className="text-zinc-100 mt-2">
        <i className="ri-calendar-schedule-fill text-yellow-500 "></i>
        {data.release_date || "comming soon..."}
        <i className="ml-4 ri-album-fill text-yellow-500 mr-1"></i>
        {data.media_type.toUpperCase()}
      </p>

      <Link to={`${data.media_type}/details/${data.id}/trailer`} className="bg-[#6556CD] text-white p-3 rounded-md mt-3 ">
        
        Watch Trailer
      </Link>
    </div>
  );
};

export default Headers;
