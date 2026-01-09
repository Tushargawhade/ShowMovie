import React from 'react'
import SideNavbar from './Templates/SideNavbar';

const Home = () => {

  document.title = "ShowMovie | Homepage";

  return (
    <>
      
      <SideNavbar/>
      <div className='w-[80%] h-full '></div>
      
 
    </>
  )
}

export default Home
