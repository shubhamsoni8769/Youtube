import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const WatchLater = () => {
  // const watchLaterIds = JSON.parse(localStorage.getItem("items"));
  const videos = useSelector((store) => store.ytVideos.video);

  const [currentStorage, SyncWithLocalStorage] = useState(JSON.parse(localStorage.getItem("items")) ?? []);
  const eventListenerFun = e => {
    SyncWithLocalStorage(JSON.parse(localStorage.getItem("items"))); //<----spread it which will cause refrence to change
  };

  useEffect(() => {
    window.addEventListener("storage", eventListenerFun);

    return () => window.removeEventListener("storage", eventListenerFun);
  }, []);


  const watchLaterVideos = () => {
    const array = [];
    currentStorage.forEach((id) => {
      const v = videos.find((video) => {
        return video.id === id;
      });
      if (v) {
        array.push(v);
      }
    });

    return array;
  };

  return (
    <div className="flex flex-wrap">
      {watchLaterVideos().map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          {" "}
          <VideoCard info={video} isWatchLater={true} />
        </Link>
      ))}
    </div>
  );
};

export default WatchLater;
