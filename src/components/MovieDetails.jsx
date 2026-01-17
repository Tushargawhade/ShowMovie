import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import Loading from "./Loading";

const MovieDetails = () => {
  const {pathname} = useLocation();
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
      {/* part 1st poster image  */}
      <nav className="w-full h-[10vh] text-zinc-100 flex gap-10 text-2xl items-center">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-long-line mr-2 text-zinc-200"
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>

        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* part 2nd card image  */}
      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[56vh] object-cover "
          src={`https://image.tmdb.org/t/p/original${info.detail.poster_path || info.detail.backdrop_path}`}
          alt=""
        />

        <div className="content ml-[5%] text-white">

          <h1 className="text-4xl font-black  ">
            {info.detail.name ||
              info.detail.original_title ||
              info.detail.title ||
              info.detail.original_name}

              <small className="text-2xl font-bold text-zinc-300 ml-2">({info.detail.release_date.split("-")[0]})</small>
          </h1>


          <div className="mt-3 mb-4 flex items-center gap-x-3 ">


            <span className=' flex text-lg  font-semibold text-zinc-200 w-[6vh] h-[6vh] bg-yellow-600 justify-center items-center rounded-[50%] '>
            {info.detail.vote_average?.toFixed(1) || info.detail.known_for?.[0]?.vote_average?.toFixed(1)} <sup>%</sup>
            </span>

            <h1 className="w-15 text-xl font-semibold leading-5">User Score</h1>
            
            <h1>{info.detail.release_date}</h1>

            <h1>
              {info.detail.genres.map((g)=> g.name).join(",")}
            </h1>

            <h1>{info.detail.runtime}min</h1>

          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200">{info.detail.tagline}</h1>

          <h1 className="text-2xl font-bold mt-2 mb-1 ">Overview</h1>

          <p>{info.detail.overview}</p>



          <h1 className="text-2xl font-bold mt-2 mb-1 ">Movie Translated</h1>

          <p className="mb-8">{info.translations.join(", ")}</p>


          <Link
              className="px-4 py-4 text-xl bg-[#6556CD] rounded-lg "
              to={`${pathname}/trailer`}
          >
            <i class="ri-play-fill text-2xl mr-1"></i>
            Play Trailer

          </Link>


          








        </div>
      </div>

      {/* part 3rd box-details image  */}

      <div className="w-[80%] flex flex-col gap-y-4 mt-10">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex  gap-x-10 items-center text-white">
            <h1>Available on plateform</h1>

            {info.watchproviders.flatrate.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] rounded-md object-cover"
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex  gap-x-10 items-center text-white">
            <h1>Available on rent</h1>

            {info.watchproviders.rent.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] rounded-md object-cover"
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex  gap-x-10 items-center text-white">
            <h1>Available on buy</h1>

            {info.watchproviders.buy.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] rounded-md object-cover"
                src={`https://image.tmdb.org/t/p/original${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
