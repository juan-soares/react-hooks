interface IVideo {
  title: string;
  duration: number;
  url: string;
  cover: string;
}

interface IProps {
  video: IVideo;
  onClick: (video: {}) => {};
}

export function Video({ video, onClick }: IProps) {
  const { cover, title, duration } = video;

  return (
    <li onClick={() => onClick(video)}>
      <img src={cover} alt={title} />
      <span>{duration}</span>
      <h2>{title}</h2>
    </li>
  );
}
