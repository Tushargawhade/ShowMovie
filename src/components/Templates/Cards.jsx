import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data , title}) {


console.log(data);

  return (

    <div className='flex w-full h-full flex-wrap mt-2 px-[2%] bg-[#1F1E24]'>

        {data.map((c,i)=>(

            <Link to={`/${c.media_type || title}/details/${c.id}`} key={i} className='relative w-[28vh] mr-[6%] mb-[5%]'>

                <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[42vh] object-cover' src={`https://image.tmdb.org/t/p/original${ c.poster_path || c.backdrop_path || c.profile_path}`} alt="" />



                <h1 className='text-zinc-300 font-semibold  text-xl mt-2 '>

                {c.name || c.original_title || c.title || c.original_name  }
                    
                </h1>

                {c.vote_average && (

                    <div className='absolute right-[-10%] bottom-[25%] flex text-lg  font-semibold text-zinc-200 w-[6vh] h-[6vh] bg-yellow-600 justify-center items-center rounded-[50%] '>
                    {(c.vote_average?.toFixed(1) || c.known_for?.[0]?.vote_average?.toFixed(1)) * 10} <sup>%</sup>
                    </div>
                )
                }

            </Link>

        ))}    
    
    </div>
  )
}

export default Cards
