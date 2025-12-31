
import React from "react";
import { useState } from "react";

const ReadMoreButton = ({ text, limit = 40 }) => {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  const words = text.split(" ");
  const isLong = words.length > limit;

//   console.log(isLong);
  

  const displayedText = expanded
    ? text
    : words.slice(0, limit).join(" ");

  return (
    <p className="text-sm text-gray-700 leading-relaxed">
      {displayedText}
      {isLong && (
        <>
          {!expanded && "... "}
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 text-blue-600 font-medium hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        </>
      )}
    </p>
  );
};

export default ReadMoreButton;
