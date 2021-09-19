import axios from "axios";

const instance = axios.create({
  baseURL: "https://edplayer-api.herokuapp.com/api",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});
export default instance;
