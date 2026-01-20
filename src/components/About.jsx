import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const About = () => {
    const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#1F1E24] px-[10%] py-[3%] text-zinc-300">



     <div className="w-full flex items-center justify-between">

        <h1 className=" text-3xl font-black text-zinc-100 mb-6">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-long-line mr-2 text-zinc-500  hover:text-[#6556CD]"
          ></i>
          About ShowMovie
        </h1>

     </div>
      

      <p className="text-lg leading-7 mb-6">
        <Link to={"/"}  className="text-[#6556CD] font-semibold">ShowMovie</Link> is a modern
        entertainment discovery platform where you can explore movies, TV shows,
        web series, seasons, episodes, and popular personalities from the film
        industry.
      </p>


      <h2 className="text-2xl font-bold text-zinc-200 mt-8 mb-3">
        Our Mission
      </h2>

      <p className="leading-7 mb-6">
        Our goal is to provide users with a clean, fast, and visually rich
        experience to discover trending content, explore detailed information,
        watch trailers, and stay updated with the latest in entertainment.
      </p>


      <h2 className="text-2xl font-bold text-zinc-200 mt-8 mb-3">
        Key Features
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Browse trending movies and TV shows</li>
        <li>Detailed pages for movies, TV series, and episodes</li>
        <li>Watch official trailers directly on the platform</li>
        <li>Explore cast, crew, and popular personalities</li>
      </ul>

      <h2 className="text-2xl font-bold text-zinc-200 mt-8 mb-3">
        Technology Used
      </h2>

      <p className="leading-7 mb-6">
        This project is built using modern web technologies including
        <span className="text-white font-semibold"> React</span>,
        <span className="text-white font-semibold"> Redux</span>,
        <span className="text-white font-semibold"> React Router</span>,
        <span className="text-white font-semibold"> Tailwind CSS</span>, and
        data powered by the 
        <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6556CD] hover:underline ml-2"
        >
             TMDB API
        </a>

      </p>

      {/* Footer Note */}
      <p className="mt-10 text-sm text-zinc-500">
        © {new Date().getFullYear()} ShowMovie. All rights reserved.
      </p>






    </div>
  )
}

export default About
