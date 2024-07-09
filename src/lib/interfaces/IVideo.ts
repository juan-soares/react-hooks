export interface IVideo {
  id: string;
  title: string;
  duration: number;
  url: string;
  cover: string;
}

export interface IVideoState {
  videoList: IVideo[];
  selectedVideo: IVideo | null;
}

export interface IVideoAction {
  type: "add" | "select";
  value: IVideo;
}

export interface IVideoReducer {
  state: IVideoState;
  action: { type: "add" | "select"; value: IVideo };
}
