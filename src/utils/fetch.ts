import axios from "axios";

const tokenKey = process.env.TOKEN_KEY;
const instance = axios.create({
    baseURL: process.env.REQUEST_URL
});

instance.defaults.headers[tokenKey as string] = process.env.AUTH_TOKEN as string;
instance.defaults.headers['Content-Type'] = 'multipart/form-data';

export default instance;