import React from "react";
import SideNavbar from "./Templates/SideNavbar";
import TopNav from "./Templates/TopNav";

const Home = () => {
  document.title = "ShowMovie | Homepage";

  return (
    <>
      <SideNavbar />
      <div className="w-[80%] h-full ">
        <TopNav />
      </div>
    </>
  );
};

export default Home;
