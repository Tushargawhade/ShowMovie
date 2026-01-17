import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loading from './Loading';
import TopNav from './Templates/TopNav';
import Dropdown from './Templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './Templates/Cards';



const Movie = () => {


  document.title = "ShowMovie | Movies";

  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);



  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      // console.log(data.results);
      // setmovie(data.results);


      if(data.results.length > 0){

          setmovie((prev)=>[...prev,...data.results])
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
    if(movie.length === 0 ){
      GetMovie();
    }
    else{
      setpage(1);
      setmovie([]);
      GetMovie();
    }
  }





  useEffect(()=>{
    regreshHandler();
  },[category])



  return movie.length > 0  ? (
    <div className="w-screen h-screen ">
      <div className="p-[2%] w-full flex items-center justify-between">

        <h1 className="font-semibold text-2xl text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-long-line mr-2 text-zinc-500  hover:text-[#6556CD]"
          ></i>
          Movies <small className='text-sm ml-1 text-zinc-600'>({category})</small>
        </h1>

        <div className="flex items-center w-[80%]">
          <TopNav />

          <Dropdown title="Category" options={["popular", "top_rated","upcoming","now_playing"]} func={(e)=>setcategory(e.target.value)}/>
          <div className="w-[2%]"></div>
        </div>


      </div>


      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}
        loader = {<h1 className="bg-[#1F1E24]">loading....</h1>}
      >

        <Cards data={movie} title="movie"/>

      </InfiniteScroll>


    </div>
  ) : (   
    <Loading/>
 )
}

export default Movie;