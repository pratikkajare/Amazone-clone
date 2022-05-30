import axios from "axios";

const instance = axios.create({
  baseURL: "https://pratikamazon-backend.herokuapp.com",
});

export default instance;
