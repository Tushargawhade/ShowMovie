import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data , title}) {
  return (

    <div className='flex w-full h-full flex-wrap mt-2 px-[2%] bg-[#1F1E24]'>

        {data.map((c,i)=>(

            <Link key={i} className='w-[28vh] mr-[6%] mb-[5%]'>

                <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[42vh] object-cover' src={`https://image.tmdb.org/t/p/original${ c.poster_path || c.backdrop_path}`} alt="" />



                <h1 className='text-zinc-300 font-semibold  text-xl mt-2 '>

                {c.original_title || c.title || c.original_name || c.name}
                    
                </h1>


            
            </Link>





        ))}    
    
    </div>
  )
}

export default Cards
