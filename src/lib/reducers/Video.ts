import { IVideoAction, IVideoState } from "../interfaces";
import { useLocalStorage } from "../hooks/useLocalStorage";

const { get, set } = useLocalStorage("videoList", []);

export const videoInitialState: IVideoState = {
  videoList: get(),
  selectedVideo: null,
};

export function videoReducer(
  state: IVideoState,
  action: IVideoAction
): IVideoState {
  switch (action.type) {
    case "add":
      const updatedVideoList = [...state.videoList, action.value];
      set(updatedVideoList);
      return { ...state, videoList: updatedVideoList };
    case "select":
      return { ...state, selectedVideo: action.value };
    default:
      return state;
  }
}
