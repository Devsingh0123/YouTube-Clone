import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ButtonList from "./components/Feeds/ButtonList";
import VideoContainer from "./components/Feeds/VideoContainer";
import Home from "./pages/Home";


const App = () => {

  

  return (
    <>
      <Navbar />

      <div className="flex px-5  ">
      <Sidebar />
    
      <Home/>
      
     </div>
    </>
  );
}

export default App;
