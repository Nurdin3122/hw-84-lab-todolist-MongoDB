import axios from 'axios';
import {apiURL} from "./Url.ts";

const axiosApi = axios.create({
    baseURL: apiURL
});
export default axiosApi;