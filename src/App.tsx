import "./App.css";
import { VideoContextProvider } from "./lib/contexts";
import { NewVideoForm, VideoList, VideoPlayer } from "./ui/components";

export default function App() {
  return (
    <div>
      <VideoContextProvider>
        <NewVideoForm />
        <VideoPlayer
          selectedVideo={{ cover: "", duration: 0, id: "", title: "", url: "" }}
        />
        <VideoList />
      </VideoContextProvider>
    </div>
  );
}
