import style from "./VideoPlayer.module.css";
import { IVideo } from "../../../lib/interfaces";
import { useEffect, useRef } from "react";

interface IProps {
  selectedVideo: IVideo;
}

export function VideoPlayer({ selectedVideo }: IProps) {
  const { url, duration, title } = selectedVideo;
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener("play", playVideo);
    videoElement.addEventListener("pause", pauseVideo);
    videoElement.addEventListener("seeked", onProgress);

    return () => {
      videoElement.removeEventListener("play", playVideo);
      videoElement.removeEventListener("pause", pauseVideo);
      videoElement.removeEventListener("seeked", onProgress);
    };
  }, [selectedVideo]);

  function playVideo() {}

  function pauseVideo() {}

  function onProgress() {}

  return (
    <div className={style.videoPlayer}>
      <video src={url} ref={videoRef} />
      <div className={style.controls}>
        <button></button>
        <span></span>
        <input type="range" min={0} max={duration} step={0.1} />
      </div>
      <h2>{title}</h2>
    </div>
  );
}
