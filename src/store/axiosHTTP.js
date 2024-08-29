import axios from "axios";
let axiosHTTP = null;
axiosHTTP = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

export default axiosHTTP;