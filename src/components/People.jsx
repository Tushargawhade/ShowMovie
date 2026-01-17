import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loading from './Loading';
import TopNav from './Templates/TopNav';
import Dropdown from './Templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './Templates/Cards';

const People = () => {

  document.title = "ShowMovie | Person";

  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [person, setperson] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);


  const GetPerson = async () => {
    try { 
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      // console.log(data.results);
      // setperson(data.results);

      if(data.results.length > 0){

          setperson((prev)=>[...prev,...data.results])
          setpage(page+1);
      }
      else{
        sethasMore(false);
      }


    } catch (error) {
      console.log("Error :", error);
    }
  };

  // console.log(person);

  const regreshHandler = ()=>{
    if(person.length === 0 ){
      GetPerson();
    }
    else{
      setpage(1);
      setperson([]);
      GetPerson();
    }
  }


  useEffect(()=>{
    regreshHandler();
  },[category])


  return person.length > 0  ? (
    <div className="w-screen h-screen ">
      <div className="p-[2%] w-full flex items-center justify-between">

        <h1 className="font-semibold text-2xl text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-long-line mr-2 text-zinc-500  hover:text-[#6556CD]"
          ></i>
         Peoples 
        </h1>

        <div className="flex items-center w-[80%]">
          <TopNav />
           
        </div>


      </div>


      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
        loader = {<h1 className="bg-[#1F1E24]">loading....</h1>}
      >

        <Cards data={person} title="person"/>

      </InfiniteScroll>


    </div>
  ) : (   
    <Loading/>
 )

}
 
export default People
