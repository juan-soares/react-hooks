import { createContext, useReducer } from "react";
import { videoInitialState, videoReducer } from "../reducers";
import { IVideoAction, IVideoState } from "../interfaces";

interface IProps {
  children: JSX.Element[];
}

export const VideoStoreContext = createContext<{
  state: IVideoState;
  dispatch: React.Dispatch<IVideoAction>;
}>({
  state: videoInitialState,
  dispatch: () => {},
});

export function VideoContextProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(videoReducer, videoInitialState);

  return (
    <VideoStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoStoreContext.Provider>
  );
}
