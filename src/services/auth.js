import { userStorageKey } from "../constants/values";
import baseAxiosPublic from "./config/baseAxiosPublic";

const postAuthentication = async ({ email, password }) => {
  const payload = {
    email,
    password,
  };
  var auth = await baseAxiosPublic
    .post("/api/v1/users/authenticate", payload)
    .then((response) => decodeToken(response));

  localStorage.setItem(userStorageKey, JSON.stringify(auth));
  return auth;
};

function decodeToken({ data: jwt }) {
  const payload = jwt.jwt.split(".")[1];
  const decode = decodeURIComponent(escape(window.atob(payload)));
  const { sub, role, jti, exp } = JSON.parse(decode);

  const userApp = {
    sub,
    role,
    jti,
    exp,
    jwt: payload
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

function roleIsEqual(role) {
  try {
    const token = localStorage.getItem(userStorageKey);
    const { user } = JSON.parse(token);
    if (user.role) {
      return user.role === role;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

function logout() {
  window.location.replace("/");
  localStorage.clear();
}

function getFirstName() {
  try {
    const token = localStorage.getItem(userStorageKey);
    const { user } = JSON.parse(token);
    if (user) {
      return user.sub.split(" ")[0];
    } else {
      return "Usuário";
    }
  } catch {
    return "Usuário";
  }
}

function getFullName() {
  try {
    const token = localStorage.getItem(userStorageKey);
    const { user } = JSON.parse(token);
    if (user) {
      return user.sub;
    } else {
      return "Usuário";
    }
  } catch {
    return "Usuário";
  }
}


function getUserId() {
  try {
    const token = localStorage.getItem(userStorageKey);
    const { user } = JSON.parse(token);
    if (user.jti) {
      return user.jti;
    } else {
      return "";
    }
  } catch {
    return "";
  }
}


export { postAuthentication, isAuthenticated, roleIsEqual, logout, getFirstName, getFullName, getUserId };
