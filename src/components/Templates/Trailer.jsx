import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category]?.info?.videos);
  console.log(ytvideo);

  return (
    <div className="absolute z-100 w-full h-screen  top-0 left-0  bg-[rgba(0,0,0,0.9)] items-center justify-center flex ">
      <Link
        onClick={() => navigate(-1)}
        className="absolute top-[5%] right-[5%] ri-close-fill text-3xl mr-2 text-zinc-400 hover:text-[#6556CD]"
      ></Link>

      {ytvideo ? (
        <ReactPlayer
          height={600}
          width={1000}
          src={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Trailer;
