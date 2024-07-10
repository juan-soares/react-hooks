import { useState } from "react";

function get(key: string, defaultValue: any) {
  const value = window.localStorage.getItem(key) || defaultValue;

  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
}

function set(key: string, value: any) {
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
}

export function useLocalStorage(key: string, defaultValue: any) {
  const [localValue, setLocalValue] = useState(get(key, defaultValue));

  function updateValue(newValue: any) {
    set(key, newValue);
    setLocalValue(newValue);
  }

  return { localValue, updateValue };
}
