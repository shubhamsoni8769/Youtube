import React, { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateVideo } from "../utils/ytVideoSlice";

const VideoContainer = () => {
  const getItems = JSON.parse(localStorage.getItem("items"));
  // const [videos, setVideos] = useState([]);
  const videos = useSelector((store) => store.ytVideos.video);
  const dispatch = useDispatch();

  const isWatchLater = (id) => {
    if (!getItems) {
      return false;
    }
    return getItems.includes(id);
  };
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    console.log(YOUTUBE_VIDEOS_API);

    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // setVideos(json.items);
    dispatch(updateVideo(json.items));
    
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          {" "}
          <VideoCard info={video} isWatchLater={isWatchLater(video.id)} />

        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
