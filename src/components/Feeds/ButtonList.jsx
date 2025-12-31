
import React from "react";
const categories = [
   "All",
  "Music",
  "Live",
  "Gaming",
  "News",
  "Sports",
  "Movies",
  "Fashion",
  "Podcasts",
  "Technology",
  "Comedy",
  "Education",
  "Recently uploaded",
  "Watched",
  "New to you",
];

const ButtonList = () => {
  return (
    
    <div className="w-full flex gap-3 overflow-x-auto  px-4 py-3 bg-white">
      {categories.map((item, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap
            ${
              item === "All"
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          {item}
        </button>
      ))}
    </div>
    
  );
};

export default ButtonList;
