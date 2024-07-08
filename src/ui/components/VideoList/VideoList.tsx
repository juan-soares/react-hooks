import style from "./VideoList.module.css";
import { IVideo } from "../../../lib/interfaces";
import { Video } from "../Video";

const list: IVideo[] = [];

export function VideoList() {
  function onClick(video: IVideo) {}

  return (
    <ul className={style.list}>
      {list.map((listItem) => (
        <Video key={listItem.id} video={listItem} onClick={onClick} />
      ))}
    </ul>
  );
}
