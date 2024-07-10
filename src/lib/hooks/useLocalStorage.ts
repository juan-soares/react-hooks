export function useLocalStorage(key: string, defaultValue: any) {
  function get() {
    const value = window.localStorage.getItem(key) || defaultValue;

    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  }

  function set(value: any) {
    if (typeof value !== "string") {
      value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
  }

  return { get, set };
}
