import React, { useEffect, useState } from "react";
import SideNavbar from "./Templates/SideNavbar";
import TopNav from "./Templates/TopNav";
import axios from "../utils/axios";
import Headers from "./Templates/Headers";


const Home = () => {
  document.title = "ShowMovie | Homepage";

   const [wallpaper, setwallpaper] = useState(null);

   const GetHeaderWallpaper = async ()=>{

    try{

      const { data } = await axios.get('trending/all/day');
      // console.log(data.results);

      const randomwallpaper = data.results[(Math.random() * data.results.length).toFixed()];
      // console.log(randomwallpaper);

      setwallpaper(randomwallpaper);

    }
    catch(error){

      console.log("Error :", error); 
    }

   }


  useEffect(()=>{
    !wallpaper && GetHeaderWallpaper();
  },[])



  return wallpaper ? (
    <>
      <SideNavbar />
      <div className="w-[80%] h-full ">
        <TopNav />
        <Headers data={wallpaper} />

      </div>
    </>
  ) : <h1>Loading...</h1> 
};

export default Home;
