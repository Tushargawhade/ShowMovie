import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import Loading from "./Loading";
import HorizontalCads from "../components/Templates/HorizontalCards";
import Dropdown from "../components/Templates/Dropdown";

const PersonDetail = () => {
  const { info } = useSelector((state) => state.person);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { id } = useParams();

  const [category, setcategory] = useState(["movie"]);

  console.log(info);

  useEffect(() => {
    dispatch(asyncloadperson(id));

    return () => {
      dispatch(removeperson());
    };
  }, [id]);


  return info ? (
    <div className="w-screen px-[8%] h-[170vh] bg-[#1F1E24]">


      <nav className="w-full h-[10vh] text-zinc-100 flex gap-10 text-2xl items-center">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-long-line mr-2 text-zinc-200"
        ></Link>
      </nav>




      <div className="w-full flex ">


        {/* part 2 left poster detail */}

        <div className="w-[20%]  p-5 ">



          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover "
            src={`https://image.tmdb.org/t/p/original${info.detail.profile_path}`}
            alt=""
          />

          <hr className="border-t-2 mt-5 mb-5 text-zinc-500 " />

          {/* external links of social media  */}
          <div className="text-white text-2xl flex gap-4">


            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://x.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>


          </div>

          {/* personal information  */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-5 ">
             Personal Info
          </h1>

          <h1 className="text-lg text-zinc-400  font-semibold ">
            Known For
          </h1>

          <h1 className="text-zinc-400">
            {info.detail.known_for_department}
          </h1>



          <h1 className="text-lg text-zinc-400  font-semibold mt-3 ">
            Gender 
          </h1>

          <h1 className="text-zinc-400">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>


          <h1 className="text-lg text-zinc-400  font-semibold mt-3 ">
            Birthday 
          </h1>

          <h1 className="text-zinc-400">
            {info.detail.birthday}
          </h1>


          <h1 className="text-lg text-zinc-400  font-semibold mt-3 ">
            Deathday 
          </h1>

          <h1 className="text-zinc-400">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>


          <h1 className="text-lg text-zinc-400  font-semibold mt-3 ">
            Place of Birth 
          </h1>

          <h1 className="text-zinc-400">
            {info.detail.place_of_birth}
          </h1>

          <h1 className="text-lg text-zinc-400  font-semibold mt-3 ">
            Also Known as
          </h1>

          <h1 className="text-zinc-400">
            {info.detail.also_known_as.join(", ")}
          </h1>





        </div>



        {/* right poster detail  */}

        <div className="w-[80%] ml-5">

           <h1 className="text-5xl text-zinc-400 font-black my-5 ">
             {info.detail.name}
          </h1>

          <h1 className="text-xl text-zinc-400  font-semibold ">
            Overview
          </h1>
          <p className=" text-zinc-400 mt-3">
            {info.detail.biography}


          </p>

          <h1 className="text-lg text-zinc-400  font-semibold  mt-4 mb-2 ">
            Known For
          </h1>

          <HorizontalCads data={info.combineCredits.cast}   />

          <div className="w-full  flex justify-between">

            <h1 className="mt-5 text-xl  text-zinc-400 font-semibold">Acting</h1>

            <Dropdown title="category" options={["tv","movie"]} func={(e)=> setcategory(e.target.value)
            }/>


          </div>

          <div className="list-disc  text-zinc-400 w-full h-[50vh] mt-5  overflow-x-hidden overflow-y-auto shadow-xl  shadow-[rgba(255,255,255,0.3)] border-2  border-zinc-700 px-10">


            {info[category+"Credits"].cast.map((c,i) => (

              <li className="hover:text-white p-5 rounded  hover:bg-[#19191d] duration-300 cursor-pointer">

                <Link to={`/${category}/details/${c.id}`} className="">

                  <span >{
                    c.name ||
                    c.original_title ||
                    c.title ||
                    c.original_name}
                  </span>

                  <span className="block">
                    {
                      c.character && `character name : ${c.character}`
                    }
                  </span>

                


                
                </Link>




              </li>

            ))}


          </div>

          







        </div>





      </div>


    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetail;
