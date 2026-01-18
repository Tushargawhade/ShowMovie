import React from "react";
import notFound from "/404.gif";

function NotFound() {
  return (
   <div className="w-screen h-screen flex justify-center items-center">
         <img src={notFound} alt="" />
    </div>
  )
}

export default NotFound
