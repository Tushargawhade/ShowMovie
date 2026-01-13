import React from "react";
import loader from "/loader.gif";

function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img src={loader} alt="" />
    </div>
  );
}

export default Loading;
