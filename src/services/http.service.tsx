import axios from "axios";

const config = {
    baseURL: 'http://10.103.1.37',
};
const HttpService = axios.create(config);
export default HttpService

