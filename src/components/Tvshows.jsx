import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loading from './Loading';
import TopNav from './Templates/TopNav';
import Dropdown from './Templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './Templates/Cards';


const Tvshows = () => {



  document.title = "ShowMovie | Tv Shows";

  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tv, settv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);



  const GetTv = async () => {
    try { 
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      // console.log(data.results);
      // settv(data.results);


      if(data.results.length > 0){

          settv((prev)=>[...prev,...data.results])
          setpage(page+1);
      }
      else{
        sethasMore(false);
      }


    } catch (error) {
      console.log("Error :", error);
    }
  };


  const regreshHandler = ()=>{
    if(tv.length === 0 ){
      GetTv();
    }
    else{
      setpage(1);
      settv([]);
      GetTv();
    }
  }





  useEffect(()=>{
    regreshHandler();
  },[category])




  return tv.length > 0  ? (
    <div className="w-screen h-screen ">
      <div className="p-[2%] w-full flex items-center justify-between">

        <h1 className="font-semibold text-2xl text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-long-line mr-2 text-zinc-500  hover:text-[#6556CD]"
          ></i>
         TV Shows <small className='text-sm ml-1 text-zinc-600'>({category})</small>
        </h1>

        <div className="flex items-center w-[80%]">
          <TopNav />

          <Dropdown title="Category" options={["on_the_air", "popular","top_rated","airing_today"]} func={(e)=>setcategory(e.target.value)}/>
          <div className="w-[2%]"></div>
        </div>


      </div>


      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader = {<h1 className="bg-[#1F1E24]">loading....</h1>}
      >

        <Cards data={tv} title={category}/>

      </InfiniteScroll>


    </div>
  ) : (   
    <Loading/>
 )





}

export default Tvshows
