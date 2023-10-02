import React from "react";
import WatchLaterBtn from "./WatchLaterBtn";

const VideoCard = ({ info, isWatchLater }) => {
  const { id, snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-[16rem] shadow">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <li className="font-bold py-2 list-none">{title}</li>
      <div className="flex">
        <div>
          <ul>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
          </ul>
        </div>
        <div>
          <WatchLaterBtn isWatchLater={isWatchLater} id={id}/>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
