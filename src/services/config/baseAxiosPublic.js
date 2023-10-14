import axios from "axios";
import { responseError } from "../../helpers/ResponseApi";

const baseAxiosPublic = axios.create({
    baseURL: process.env.REACT_APP_API_DIFERENCIAL
});

baseAxiosPublic.interceptors.response.use(
    (response) => response
);

baseAxiosPublic.interceptors.response.use(
    (response) => response,
    (error) => responseError(error)
);

export default baseAxiosPublic;