import React from "react";

import { FiMenu, FiSearch, FiBell, FiVideo, FiMic } from "react-icons/fi";
import youTubeLogo from "../../assets/youTubeLogo.png";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/slices/toggalMenuSlice";

const Navbar = () => {
  const dispatch =useDispatch()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white ">
      <div className="flex items-center justify-between px-4 h-14">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <FiMenu className="text-2xl cursor-pointer" onClick={()=>{dispatch(toggleSidebar())}} />

          <div className="flex items-center gap-1 cursor-pointer">
            <img src={youTubeLogo} alt="YouTube" className="h-14" />
          </div>
        </div>

        {/* Center Section (Desktop Search) */}
        <div className="flex items-center flex-1 max-w-xl mx-4">
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
            />
            <button className="px-2 md:px-6 border border-l-0 border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200">
              <FiSearch className="text-xl" />
            </button>
          </div>
          <button className="ml-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <FiMic className="text-xl" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Search Icon */}

          <FiVideo className="text-xl cursor-pointer hidden sm:block" />
          <FiBell className="text-xl cursor-pointer hidden sm:block" />

          <img
            src="https://i.pravatar.cc/300"
            alt="profile"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>
      </div>

      
    </header>
  );
};

export default Navbar;
