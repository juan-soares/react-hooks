import "./App.css";
import { NewVideoForm, VideoList, VideoPlayer } from "./ui/components";

export default function App() {
  return (
    <div>
      <NewVideoForm />
      <VideoPlayer />
      <VideoList />
    </div>
  );
}
