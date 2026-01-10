import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import notfound from "/notfound.jpg";

const TopNav = () => {
  const [query, setquery] = useState("");
  // console.log(query);

  const [searches, setsearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      console.log(data.results);

      setsearches(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center  ml-[15%]">
      <i className="ri-search-line text-zinc-400 text-3xl "></i>

      <input
        onChange={(e) => {
          setquery(e.target.value);
        }}
        value={query}
        className="w-[40%] mx-8 p-2 text-zinc-200 outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />

      {query.length > 0 && (
        <i
          onClick={() => {
            setquery("");
          }}
          className="ri-close-line  text-zinc-400 text-3xl"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-100 top-[90%] overflow-auto rounded-sm ">
        {searches.map((s, i) => (
          <Link
            key={i}
            className=" hover:text-black hover:bg-zinc-300 duration:400  w-full font-semibold text-zinc-700 p-8 justify-start items-center  border-b-2 border-zinc-100 flex shadow-lg"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover mr-5 rounded"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original${
                      s.backdrop_path || s.profile_path
                    }`
                  : notfound
              }
              alt=""
            />

            <span>
              {s.original_title || s.title || s.original_name || s.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
