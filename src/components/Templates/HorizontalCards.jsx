import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'



const HorizontalCards = ({data}) => {

  // console.log(data)

  return (
        
      <div className='w-full flex  overflow-y-hidden mb-3 p-3'>

        {data.map((d,i)=> 
          
          <Link to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[16%]  mr-5  bg-zinc-900 mb-5'>

            <img className='w-full h-[45%] object-cover' src={`https://image.tmdb.org/t/p/original${ d.backdrop_path || d.poster_path}`} alt="" />



            <div className='text-white h-[55%] p-2'>

              <h1 className=' text-xl font-semibold '>
                {d.original_title || 
                    d.title || 
                    d.original_name || 
                    d.name
                }
              </h1> 


              <p className='text-sm mt-1'>
                  {d.overview.slice(0,40)}... 
                  <span className='text-zinc-500'>more</span>
              </p>


            </div>
  


          </Link>

        )}




      </div>


  )
}

export default HorizontalCards
