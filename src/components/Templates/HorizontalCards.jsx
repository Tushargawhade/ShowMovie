import React from 'react'
import { Link } from 'react-router-dom'
import notfound from '/notfound.jpg'




const HorizontalCards = ({data}) => {

  // console.log(data)

  return (
        
      <div className='w-full flex overflow-y-hidden mb-3 p-3'>

        {data.length > 0 ? data.map((d,i)=>( 
          
          <Link to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[16%] h-[35vh] mr-5  bg-zinc-900 mb-5'>

            <img 
              className='w-full h-[55%] object-cover' 
              src={  d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/original${ d.backdrop_path || d.poster_path}` : notfound} 

              alt="" />



            <div className='text-white h-[45%] p-2  overflow-y-auto'>

              <h1 className=' text-xl font-semibold '>
                {   d.title || 
                    d.name || 
                    d.original_title || 
                    d.original_name 
                 
                }
              </h1> 


              <p className='text-sm mt-1'>
                  {d.overview.slice(0,40)}... 
                  <span className='text-zinc-500'>more</span>
              </p>


            </div>
  


          </Link>

        )): <h1 className='text-3xl font-black mt-5 text-white text-center '>Nothing to Show</h1>
}  



      </div>


  )
} 

export default HorizontalCards
