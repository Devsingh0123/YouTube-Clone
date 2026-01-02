
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReadMoreButton from "../components/ReadMoreButton";

const Watch = () => {
  const { videoId } = useParams();

  const videos = useSelector((store) => store.videos.videos);

  const video = videos.find((v) => v.id === videoId);

//   const discription = video.snippet.description

  if (!video) return null;

  return (
    <div className="p-4 w-3/4">
      {/* VIDEO PLAYER */}
      <div className="w-full aspect-video mb-4">
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube player"
          allowFullScreen
        />
      </div>

      {/* VIDEO DETAILS */}
      <h1 className="text-lg font-semibold">
        {video.snippet.title}
      </h1>

      <p className="text-sm text-gray-500 mt-1">
        {video.statistics?.viewCount} views
      </p>

      <div className="mt-3">
        <ReadMoreButton text={video.snippet.description}/>
      </div>
    </div>
  );
};

export default Watch;
