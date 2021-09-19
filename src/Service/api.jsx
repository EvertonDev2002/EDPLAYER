import axios from "axios";

const instance = axios.create({
  baseURL: "https://edplayer-api.herokuapp.com/edplayer/api",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});
export default instance;
