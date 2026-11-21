export const storageHelper = {
  get(key, fallback = null) {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};
