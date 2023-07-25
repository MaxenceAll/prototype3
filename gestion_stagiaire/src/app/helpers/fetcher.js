import axios from "axios";
import config from "../config/config";

const axiosInstance = axios.create({
    baseURL: config.api.url,
    withCredentials: true,
    headers: {
    "Content-Type": "application/json",
    },
});

const fetcher = {
    get: (url, params) => axiosInstance.get(url, { params }),
    post: (url, data) => axiosInstance.post(url, data),
    put: (url, data) => axiosInstance.put(url, data),
    delete: (url) => axiosInstance.delete(url),
};

export default fetcher;
