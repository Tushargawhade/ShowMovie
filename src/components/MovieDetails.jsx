import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import Loading from "./Loading";

const MovieDetails = () => {
  const { info } = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(info);

  useEffect(() => {
    dispatch(asyncloadmovie(id));

    return () => {
      dispatch(removemovie());
    };
  }, []);

  return info ? (
    <div

      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original${
          info.detail.backdrop_path
        })`,

        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-screen px-[10%]"
      >


      <nav className="w-full h-[10vh] text-zinc-100 flex gap-10 text-xl items-center">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-long-line mr-2 text-zinc-200"
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i class="ri-external-link-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i class="ri-earth-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          imdb
        </a>
      </nav>


      {/* 1st card image  */}
      <div className="w-full flex">
          

          <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[42vh] object-cover ' src={`https://image.tmdb.org/t/p/original${info.detail.poster_path ||info.detail.backdrop_path }`} alt="" />



          <div >




          </div>





      </div>





    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
