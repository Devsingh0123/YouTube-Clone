import React from "react";
import { AiFillHome, AiOutlineFire } from "react-icons/ai";
import { MdOutlineSubscriptions, MdVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import SidebarItemCard from "./SidebarItemCard";
import { useSelector } from "react-redux";

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

        <hr className="my-3" />

        <SidebarItemCard icon={<MdVideoLibrary />} label="Library" />
        <SidebarItemCard icon={<AiOutlineFire />} label="Trending" />
      </div>
      <div className="px-2 py-3 space-y-1">
        {/* Menu Item */}
        <SidebarItemCard icon={<AiFillHome />} label="Home" active />
        <SidebarItemCard icon={<SiYoutubeshorts />} label="Shorts" />
        <SidebarItemCard
          icon={<MdOutlineSubscriptions />}
          label="Subscriptions"
        />

        <hr className="my-3" />

        <SidebarItemCard icon={<MdVideoLibrary />} label="Library" />
        <SidebarItemCard icon={<AiOutlineFire />} label="Trending" />
      </div>
      <div className="px-2 py-3 space-y-1">
        {/* Menu Item */}
        <SidebarItemCard icon={<AiFillHome />} label="Home" active />
        <SidebarItemCard icon={<SiYoutubeshorts />} label="Shorts" />
        <SidebarItemCard
          icon={<MdOutlineSubscriptions />}
          label="Subscriptions"
        />

        <hr className="my-3" />

        <SidebarItemCard icon={<MdVideoLibrary />} label="Library" />
        <SidebarItemCard icon={<AiOutlineFire />} label="Trending" />
      </div>
      <div className="px-2 py-3 space-y-1">
        {/* Menu Item */}
        <SidebarItemCard icon={<AiFillHome />} label="Home" active />
        <SidebarItemCard icon={<SiYoutubeshorts />} label="Shorts" />
        <SidebarItemCard
          icon={<MdOutlineSubscriptions />}
          label="Subscriptions"
        />

        <hr className="my-3" />

        <SidebarItemCard icon={<MdVideoLibrary />} label="Library" />
        <SidebarItemCard icon={<AiOutlineFire />} label="Trending" />
      </div>
      <div className="px-2 py-3 space-y-1">
        {/* Menu Item */}
        <SidebarItemCard icon={<AiFillHome />} label="Home" active />
        <SidebarItemCard icon={<SiYoutubeshorts />} label="Shorts" />
        <SidebarItemCard
          icon={<MdOutlineSubscriptions />}
          label="Subscriptions"
        />

        <hr className="my-3" />

        <SidebarItemCard icon={<MdVideoLibrary />} label="Library" />
        <SidebarItemCard icon={<AiOutlineFire />} label="Trending" />
      </div>
    </aside>
  );
};

export default Sidebar;
