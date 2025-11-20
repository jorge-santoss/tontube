import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.BACKEND_URL || "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export function fetchVideos() {
  return instance.get("/");
}

export function getVideoUrl(filename) {
  return `${instance.defaults.baseURL}uploads/${filename}`;
}
