import React, { useEffect, useState } from 'react'


import { useDispatch, useSelector } from "react-redux";
import ButtonList from '../components/Feeds/ButtonList';
import VideoContainer from '../components/Feeds/VideoContainer';
import { fetchPopularVideos } from '../redux/slices/videoSlice';
import { Outlet } from 'react-router-dom';



const Home = () => {

const dispatch = useDispatch()
  const {loading } =useSelector((store)=>store.videos)

 
 


    const isSidebarOpen = useSelector(
        (state) => state.toggleMenuReducer.isSidebarOpen
      );

  useEffect(() => {
    dispatch(fetchPopularVideos());
  }, [dispatch]);

  return (
    <div className={`pt-14 transition-all duration-300 min-h-screen overflow-x-hidden
            ${isSidebarOpen ? "ml-60" : "ml-18"}`} >
      

      {loading ? (
        <p className="p-4">Loading videos...</p>
      ) : (
        <Outlet  />
      )}
    </div>
  );
};

export default Home;
