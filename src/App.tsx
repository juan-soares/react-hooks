import "./App.css";
import { NewVideoForm, VideoList, VideoPlayer } from "./ui/components";

export default function App() {
  return (
    <div>
      <NewVideoForm />
      <VideoPlayer
        selectedVideo={{ cover: "", duration: 0, id: "", title: "", url: "" }}
      />
      <VideoList />
    </div>
  );
}
