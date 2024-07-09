import { useEffect, useRef, useState } from "react";
import style from "./VideoPlayer.module.css";
import { IVideo } from "../../../lib/interfaces";
import { formatTime } from "../../../lib/utils";

interface IProps {
  selectedVideo: IVideo;
}

export function VideoPlayer({ selectedVideo }: IProps) {
  const { url, duration, title } = selectedVideo;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressTimer = useRef();

  function playVideo() {
    videoRef.current.play();
    setIsPlaying(true);
  }

  function pauseVideo() {
    videoRef.current.pause();
    setIsPlaying(false);
  }

  function onProgress() {
    setProgress(videoRef.current.currentTime);
  }

  function handleProgress(actualTime: number) {
    videoRef.current.currentTime = actualTime;
    onProgress();
  }

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener("play", playVideo);
    videoElement.addEventListener("pause", pauseVideo);
    videoElement.addEventListener("seeked", onProgress);
    handleProgress(0);
    pauseVideo();

    return () => {
      videoElement.removeEventListener("play", playVideo);
      videoElement.removeEventListener("pause", pauseVideo);
      videoElement.removeEventListener("seeked", onProgress);
    };
  }, [selectedVideo]);

  useEffect(() => {
    clearInterval(progressTimer.current);

    if (!isPlaying) return;
    progressTimer.current = setInterval(onProgress, 1000);
  }, [isPlaying]);

  return (
    <div className={style.videoPlayer}>
      <video src={url} ref={videoRef} />
      {url && (
        <>
          <div className={style.controls}>
            <button onClick={isPlaying ? pauseVideo : playVideo}>
              {isPlaying ? "||" : ">"}
            </button>
            <span>{`${formatTime(Math.round(progress))} / ${formatTime(
              duration
            )}`}</span>
            <input
              type="range"
              value={progress}
              min={0}
              max={duration}
              step={0.1}
              onChange={({ target: { value } }) =>
                handleProgress(parseInt(value))
              }
            />
          </div>
          <h2>{title}</h2>
        </>
      )}
    </div>
  );
}
