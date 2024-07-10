import { IVideoAction, IVideoState } from "../interfaces";
import { storageService } from "../services/StorageService";

export const videoInitialState: IVideoState = {
  videoList: storageService.get("videoList", []),
  selectedVideo: null,
};

export function videoReducer(
  state: IVideoState,
  action: IVideoAction
): IVideoState {
  switch (action.type) {
    case "add":
      const updatedVideoList = [...state.videoList, action.value];
      storageService.set("videoList", updatedVideoList);
      return { ...state, videoList: updatedVideoList };
    case "select":
      return { ...state, selectedVideo: action.value };
    default:
      return state;
  }
}
