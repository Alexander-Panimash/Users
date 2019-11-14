import axios from "axios";

const config = {
    baseURL: 'http://localhost:5000',
};
const HttpService = axios.create(config);
export default HttpService

