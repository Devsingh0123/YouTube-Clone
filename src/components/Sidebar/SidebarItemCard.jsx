import React from "react";

const SidebarItemCard = ({ icon, label, active }) => {
  return (
    <div
      className={`flex items-center gap-5 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100
        ${active ? "bg-gray-100 font-medium" : ""}`}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm ">{label}</span>
    </div>
  );
}

export default SidebarItemCard