import React from "react";
import { AiFillHome, AiOutlineFire } from "react-icons/ai";
import { MdOutlineSubscriptions, MdVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import SidebarItemCard from "./SidebarItemCard";
import { useSelector } from "react-redux";

import { FaHistory } from "react-icons/fa";
import { CgPlayList } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { GiFilmStrip } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoFlagOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { ImFeed } from "react-icons/im";


const Sidebar = () => {
  const isSidebarOpen = useSelector(
    (state) => state.toggleMenuReducer.isSidebarOpen
  );
  return (
    <aside
      className={`fixed top-14 left-0 h-[calc(100vh-56px)] bg-white overflow-y-auto transition-all duration-300 ${isSidebarOpen ? "w-60" : "w-18"}`}
    >
      <div className="px-2 py-3 space-y-1">
        {/* Menu Item */}
        <SidebarItemCard icon={<AiFillHome />} label="Home" active />
        <SidebarItemCard icon={<SiYoutubeshorts />} label="Shorts" />
        <SidebarItemCard
          icon={<MdOutlineSubscriptions />}
          label="Subscriptions"
        />

     

        <SidebarItemCard icon={<MdVideoLibrary />} label="Library" />
        <SidebarItemCard icon={<AiOutlineFire />} label="Trending" />
           <hr className="my-3" />
      </div>
      <div className="px-2 py-3 space-y-1">


        
        <SidebarItemCard icon={<FaHistory />} label="History" />
        <SidebarItemCard icon={<CgPlayList />} label="Playlists" />
        <SidebarItemCard
          icon={<MdOutlineWatchLater />}
          label="Watch Later"
        />

        

        <SidebarItemCard icon={<GoDownload />} label="Downloads" />
        <hr className="my-3" />
       
      </div>
      <div className="px-2 py-3 space-y-1">



     
        <SidebarItemCard icon={<MdOutlineShoppingBag />} label="Shopping" active />
        <SidebarItemCard icon={<IoMusicalNoteOutline />} label="Music" />
        <SidebarItemCard
          icon={<GiFilmStrip />}
          label="Films"
        />

       

        <SidebarItemCard icon={<ImFeed />} label="Live" />
         <hr className="my-3" />
        
      </div>
      <div className="px-2 py-3 space-y-1">
       <SidebarItemCard icon={<IoSettingsOutline />} label="Settings" />
        <SidebarItemCard icon={<IoFlagOutline />} label="Report History" active />
        <SidebarItemCard icon={<IoIosHelpCircleOutline />} label="Help" />
        <SidebarItemCard
          icon={<MdOutlineFeedback />}
          label="Send Feedback"
        />

        
      </div>
    </aside>
  );
};

export default Sidebar;
