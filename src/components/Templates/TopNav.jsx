import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const TopNav = () => {

    const [query, setquery] = useState("")

    console.log(query)
   

    
    



  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center  ml-[15%]'>

 

        <i class="ri-search-line text-zinc-400 text-3xl "></i>

        <input 
            onChange={(e)=>{setquery(e.target.value)}}
            value={query}
            className='w-[40%] mx-8 p-2 text-zinc-200 outline-none border-none bg-transparent' 
            type="text" 
            placeholder='search anything'
        />

        {query.length > 0 && (<i onClick={()=>{setquery("")}} class="ri-close-line  text-zinc-400 text-3xl"></i>)}
        


        <div className='absolute w-[50%] max-h-[50vh] bg-zinc-100 top-[90%] overflow-auto rounded-sm '>

        
            <Link className='inline-block hover:text-black hover:bg-zinc-300 duration:400  w-full font-semibold text-zinc-700 p-8 justify-start items-center  border-b-2 border-zinc-100'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
            </Link>

            <Link className='inline-block hover:text-black hover:bg-zinc-300 duration:400  w-full font-semibold text-zinc-700 p-8 justify-start items-center  border-b-2 border-zinc-100'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
            </Link>



        </div>


      





    </div>
  )
}

export default TopNav
