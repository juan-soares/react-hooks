import { IVideoAction, IVideoState } from "../interfaces";

export const videoInitialState: IVideoState = {
  videoList: [],
  selectedVideo: null,
};

export function videoReducer(
  state: IVideoState,
  action: IVideoAction
): IVideoState {
  switch (action.type) {
    case "add":
      const updatedVideoList = [...state.videoList, action.value];
      return { ...state, videoList: updatedVideoList };
    case "select":
      return { ...state, selectedVideo: action.value };
    default:
      return state;
  }
}
