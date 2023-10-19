import { userStorageKey } from "../constants/values";
import baseAxiosPublic from "./config/baseAxiosPublic";

const postAuthentication = async (usuario, senha) => {
  const payload = { usuario, senha };
  var auth = await baseAxiosPublic
    .post("/api/v1/auth", payload)
    .then((response) => decodeToken(response));
  localStorage.setItem(userStorageKey, JSON.stringify(auth));
  return auth;
};

function decodeToken({ data: jwt }) {
  const payload = jwt.split(".")[1];
  const decode = decodeURIComponent(escape(window.atob(payload)));
  const { sub, role, jti, exp } = JSON.parse(decode);

  const userApp = {
    sub,
    role,
    jti,
    exp,
  };
  return { user: userApp };
}

function isAuthenticated() {
  try {
    const token = localStorage.getItem(userStorageKey);
    const { user } = JSON.parse(token);
    if (user) {
      let currentDate = new Date();
      return user.exp * 1000 > currentDate.getTime();
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

function logout() {
  window.location.reload();
  localStorage.clear();
}

export { postAuthentication, isAuthenticated, logout };
