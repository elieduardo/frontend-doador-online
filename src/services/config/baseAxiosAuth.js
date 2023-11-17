import axios from "axios";
import { responseError } from "../../helpers/ResponseApi";
import { userStorageKey } from "../../constants/values";

const baseAxiosAuth = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_ENDPOINT,
});

baseAxiosAuth.interceptors.request.use(async (config) => {
  const auth = authHeader();
  config.headers.Authorization = auth.Authorization;
  return config;
});

baseAxiosAuth.interceptors.response.use((response) => response);

baseAxiosAuth.interceptors.response.use(
  (response) => response,
  (error) => responseError(error)
);

function authHeader() {
  try {
    const token = localStorage.getItem(userStorageKey);
    const user = JSON.parse(token);
    return { Authorization: `Bearer ${user.user.accessToken}` };
  } catch {
    return { Authorization: "" };
  }
}

export default baseAxiosAuth;
