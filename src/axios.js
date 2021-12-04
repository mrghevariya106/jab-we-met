import axios from "axios";

const intsance = axios.create({
  baseURL: "https://jab-we-met-backend.herokuapp.com/",
});

export default intsance;
