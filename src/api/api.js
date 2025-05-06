import axios from "axios";
export default axios.create({
  baseURL: "http://apixm.devmaster.vn/api/",

  // baseURL: "http://apixm.devmaster.vn/swagger/index.html",
});
