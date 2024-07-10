import { IVideoAction, IVideoState } from "../interfaces";
import { useLocalStorage } from "../hooks/useLocalStorage";

const { localValue, updateValue } = useLocalStorage("videoList", []);

export const videoInitialState: IVideoState = {
  videoList: localValue,
  selectedVideo: null,
};

export function videoReducer(
  state: IVideoState,
  action: IVideoAction
): IVideoState {
  switch (action.type) {
    case "add":
      const updatedVideoList = [...state.videoList, action.value];
      updateValue(updatedVideoList);
      return { ...state, videoList: updatedVideoList };
    case "select":
      return { ...state, selectedVideo: action.value };
    default:
      return state;
  }
}
