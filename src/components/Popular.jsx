import  { use, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loading from './Loading';
import TopNav from './Templates/TopNav';
import Dropdown from './Templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './Templates/Cards';




const Popular = () => {

    document.title = "ShowMovie | Popular";

  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);



  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      // console.log(data.results);
      // setpopular(data.results);


      if(data.results.length > 0){

          setpopular((prev)=>[...prev,...data.results])
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
    if(popular.length === 0 ){
      GetPopular();
    }
    else{
      setpage(1);
      setpopular([]);
      GetPopular();
    }
  }





  useEffect(()=>{
    regreshHandler();
  },[category])




  return popular.length > 0  ? (
    <div className="w-screen h-screen ">
      <div className="p-[2%] w-full flex items-center justify-between">

        <h1 className="font-semibold text-2xl text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-long-line mr-2 text-zinc-500  hover:text-[#6556CD]"
          ></i>
          Popular
        </h1>

        <div className="flex items-center w-[80%]">
          <TopNav />

          <Dropdown title="Category" options={["tv", "movie"]} func={(e)=>setcategory(e.target.value)}/>
          <div className="w-[2%]"></div>
        </div>


      </div>


      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        loader = {<h1 className="bg-[#1F1E24]">loading....</h1>}
      >

        <Cards data={popular} title={category}/>

      </InfiniteScroll>


    </div>
  ) : (   
    <Loading/>
 )
}

export default Popular;