import axios from "axios";

const instance = axios.create({
  baseURL: "https://trip-planner-api-bb54r.ondigitalocean.app",
});

export default instance;
