import { IVideo } from "../../../lib/interfaces";
import { formatTime } from "../../../lib/utils";

interface IProps {
  video: IVideo;
  onClick: (video: IVideo) => void;
}

export function Video({ video, onClick }: IProps) {
  const { cover, title, duration } = video;

  return (
    <li onClick={() => onClick(video)}>
      <img src={cover} alt={title} />
      <span>{formatTime(duration)}</span>
      <h2>{title}</h2>
    </li>
  );
}
