import { IVideo } from "../interfaces";

export const storageService = {
  get(key: string, defaultValue: []) {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    } else {
      return defaultValue;
    }
  },
  set(key: string, value: IVideo[]) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
