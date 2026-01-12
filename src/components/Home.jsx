import React, { useEffect, useState } from "react";
import SideNavbar from "./Templates/SideNavbar";
import TopNav from "./Templates/TopNav";
import axios from "../utils/axios";
import Headers from "./Templates/Headers";
import HorizontalCards from './Templates/HorizontalCards'


const Home = () => {
  document.title = "ShowMovie | Homepage";

   const [wallpaper, setwallpaper] = useState(null);
   const [trending, settrending] = useState(null);

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


   const GetTrending = async ()=>{

    try{
      const { data } = await axios.get('trending/all/day');
      // console.log(data.results);
      
      settrending(data.results);


    }
    catch(error){

      console.log("Error :", error); 
    }

   }

   console.log(trending);

  useEffect(()=>{
    !wallpaper && GetHeaderWallpaper();
    !trending && GetTrending();

  },[])


  
  return wallpaper && trending ? (
    <>
      <SideNavbar />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden ">
        <TopNav />
        <Headers data={wallpaper} />
        <HorizontalCards data={trending}/>

      </div>
    </>
  ) : <h1>Loading...</h1> 
};

export default Home;
