import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Loading from "./components/Loading";


const App = () => {
  return (
    <div className="w-screeen h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/loading" element={<Loading />} /> */}
        
      </Routes>
    </div>
  );
};

export default App;
