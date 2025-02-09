import { useContext, useState } from "react";
import style from "./NewVideoForm.module.css";
import { IVideo } from "../../../lib/interfaces";
import { VideoStoreContext } from "../../../lib/contexts";

export function NewVideoForm() {
  const { dispatch } = useContext(VideoStoreContext);
  const [newVideo, setNewVideo] = useState<IVideo>({
    id: "",
    title: "",
    duration: 0,
    url: "",
    cover: "",
  });

  const saveVideo = () => {
    dispatch({ type: "add", value: newVideo });
  };

  const resetFields = () => {
    setNewVideo({
      id: "",
      title: "",
      duration: 0,
      url: "",
      cover: "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveVideo();
    resetFields();
  };

  const handleChange = (name: string, value: string) => {
    setNewVideo((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
      <label>Titulo:</label>
      <input
        id="title"
        type="text"
        required
        onChange={({ target: { id, value } }) => handleChange(id, value)}
      />
      <label>Duração:</label>
      <input
        id="duration"
        type="text"
        required
        onChange={({ target: { id, value } }) => handleChange(id, value)}
      />
      <label>Vídeo:</label>
      <input
        id="url"
        type="text"
        required
        onChange={({ target: { id, value } }) => handleChange(id, value)}
      />
      <label>Capa:</label>
      <input
        id="cover"
        type="text"
        required
        onChange={({ target: { id, value } }) => handleChange(id, value)}
      />
      <button>Salvar</button>
    </form>
  );
}
