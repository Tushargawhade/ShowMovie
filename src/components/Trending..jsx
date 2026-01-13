import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./Templates/TopNav";
import Dropdown from "./Templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./Templates/Cards";
import Loading from "./Loading";


function Trending() {
  const navigate = useNavigate();

  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/${duration}`);
      // console.log(data.results);

      settrending(data.results);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(()=>{
    GetTrending();
  },[category,duration])


  console.log(trending)

  return trending ? (
    <div className="w-screen h-screen p-[2%] overflow-hidden overflow-y-auto ">
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

          <Dropdown title="Category" options={["tv", "movie", "all"]} func={(e)=>setcategory(e.target.value)}/>
          <div className="w-[2%]"></div>

          <Dropdown title="Duration" options={["day", "week"]} func={(e)=>setduration(e.target.value)} />

        </div>


      </div>

        <Cards data={trending} title={category}/>


    </div>
  ) : (   
    <Loading/>
 )
}

export default Trending;
