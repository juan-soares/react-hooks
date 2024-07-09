import { useContext } from "react";
import style from "./VideoList.module.css";
import { IVideo } from "../../../lib/interfaces";
import { VideoStoreContext } from "../../../lib/contexts";
import { Video } from "../Video";

export function VideoList() {
  const {
    state: { videoList },
    dispatch,
  } = useContext(VideoStoreContext);

  function onClick(selectedVideo: IVideo) {
    dispatch({ type: "add", value: selectedVideo });
  }

  return (
    <ul className={style.list}>
      {videoList.map((video) => (
        <Video key={video.id} video={video} onClick={onClick} />
      ))}
    </ul>
  );
}
