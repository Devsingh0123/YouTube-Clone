import axios from "axios";
import React, { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_API } from "../../utils/youtubeApi";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const [channelLogoUrl, setChannelLogoUrl] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchChannelLogoUrl = async () => {
      try {
        const res = await axios.get(YOUTUBE_CHANNEL_API(snippet.channelId));

        setChannelLogoUrl(res.data.items[0].snippet.thumbnails.default.url);
      } catch (error) {
        console.error("Channel logo error:", error);
      }
    };
    fetchChannelLogoUrl();
  }, [snippet.channelId]);

  // console.log(video);

  return (
    <div
      className="cursor-pointer"
      onClick={() =>
        navigate(`/watch/${video.id}`)
      }
    >
      <img
        className="rounded-xl w-full"
        src={snippet.thumbnails.medium.url}
        alt="thumbnail"
      />

      <div className="flex gap-3 mt-3 justify-center items-center">
        {/* Channel Logo */}
        <img
          className="w-9 h-9 rounded-full"
          src={channelLogoUrl}
          alt="channel logo"
        />
        <div className="mt-2">
          <h3 className="font-semibold text-sm line-clamp-2">
            {snippet.title}
          </h3>

          <p className="text-gray-500 text-xs mt-1">{snippet.channelTitle}</p>

          <p className="text-gray-500 text-xs">{statistics?.viewCount} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
