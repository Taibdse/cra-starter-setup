import axios from "axios";
import queryString from "query-string";
import { ROOT_API } from "constants/app";

const axiosClient = axios.create({
  baseURL: ROOT_API,
  headers: {
    "Content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

export const setHttpClientHeaders = (key, value) => {
  axiosClient.defaults.headers.common[key] = value;
};

export default axiosClient;
