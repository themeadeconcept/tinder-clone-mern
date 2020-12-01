import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-clonetm.herokuapp.com",
});

export default instance;
