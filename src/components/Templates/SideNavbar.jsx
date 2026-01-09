import React from 'react'
import { Link } from 'react-router-dom'



const SideNavbar = () => {
  return (
   
      <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10 '>

        <h1 className='text-2xl text-white font-bold '>
            <i class="ri-tv-fill mr-2 text-[#6556CD]"></i>
            <span className='text-2xl'>SCSDB</span>  
        </h1>

        <nav className='flex flex-col gap-2 text-zinc-400'>

            <h1 className='text-white  font-semibold text-xl mt-8  mb-3'>
                New Feeds
            </h1>

            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'>
                <i class="ri-fire-fill mr-2"></i> Trending
            </Link>

            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'>
                <i class="ri-sparkling-2-fill mr-2"></i> Popular
            </Link>

            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'>
                <i class="ri-movie-2-ai-fill mr-2"></i> Movies
            </Link>

            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'>
                <i class="ri-tv-2-fill mr-2"></i> TV Shows
            </Link>

            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'>
                <i class="ri-team-fill mr-2"></i> People
            </Link>

        </nav>

        <hr className='border-none h-[1px] bg-zinc-400' />

        <nav className='flex flex-col gap-2 text-zinc-400'>

            <h1 className='text-white  font-semibold text-xl mt-6  mb-3'>
                Website Information
            </h1>

            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'>
                <i class="ri-phone-fill"></i> About Us
            </Link>

            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'>
                <i class="ri-phone-fill"></i> Contact SCSDB
            </Link>


        </nav>




      </div>
  )
}

export default SideNavbar
