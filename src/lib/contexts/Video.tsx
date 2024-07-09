import { createContext, useReducer } from "react";
import { IVideoContext } from "../interfaces";
import { videoInitialState, videoReducer } from "../reducers";

interface IProps {
  children: JSX.Element[];
}

export const VideoStoreContext = createContext<IVideoContext>({
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
