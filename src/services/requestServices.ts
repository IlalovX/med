import axios from "axios";

const $host = axios.create({
  baseURL: "https://kmi-backend.onrender.com/",
});
export { $host };
