import React from "react";
import { useSelector } from "react-redux";

const SidebarItemCard = ({ icon, label, active }) => {

  const isSidebarOpen = useSelector(state => state.toggalMenuReducer.isSidebarOpen)
  return (
    <div
      className={`flex items-center gap-5 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100
        ${active ? "bg-gray-100 font-medium" : ""}`}
    >
      <span className="text-xl">{icon}</span>
     {isSidebarOpen && <span className="text-sm ">{label}</span>}
    </div>
  );
}

export default SidebarItemCard