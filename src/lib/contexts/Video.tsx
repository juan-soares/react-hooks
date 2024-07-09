import { createContext } from "react";

interface IProps {
  children: JSX.Element[];
}

export const VideoContext = createContext([]);

export function VideoContextProvider({ children }: IProps) {
  return <VideoContext.Provider value={[]}>{children}</VideoContext.Provider>;
}
