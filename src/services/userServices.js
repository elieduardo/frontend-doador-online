import { getNumbers, removeMask } from "../helpers/Strings";
import { getFirstName, getFullName, getUserId } from "./auth";
import baseAxiosAuth from "./config/baseAxiosAuth";
import baseAxiosPublic from "./config/baseAxiosPublic";

const createUser = async ({
  name,
  cpf,
  birthDate,
  bloodDonator,
  rhFactor,
  bloodType,
  city,
  district,
  email,
  gender,
  marrowDonator,
  number,
  organsDonator,
  password,
  phoneNumber,
  state,
  street,
  zipCode,
}) => {
  let donationType = [];
  if (bloodDonator) {
    donationType.push(1);
  }
  if (marrowDonator) {
    donationType.push(2);
  }
  if (organsDonator) {
    donationType.push(3);
  }

  const payload = {
    name,
    cpf: removeMask(cpf),
    password,
    email,
    phoneNumber: removeMask(phoneNumber),
    birthDate,
    gender: parseInt(gender),
    bloodType: parseInt(bloodType),
    RhesusFactor: parseInt(rhFactor),
    userType: 3,
    donationType,
    Address: {
      street,
      district,
      number,
      city,
      state,
      zipCode: removeMask(zipCode),
      country: "Brasil",
    },
  };

  return await baseAxiosPublic.post("/api/v1/users", payload);
};

const passwordForget = async ({ email }) => {
  const payload = {
    email,
  };

  return await baseAxiosPublic.post("/api/v1/users/password-recovery", payload);
};

const passwordChange = async (email, token, password, confirmPassword) => {
  const payload = {
    email,
    token,
    password,
    confirmPassword,
  };

  return await baseAxiosPublic.post("/api/v1/users/change-password", payload);
};

const getUsers = async ({ name, donationType, bloodType, rhFactor }) => {
  const queryParams = new URLSearchParams({
    name,
    donationType,
    bloodType,
    rhFactor
  });

  return await baseAxiosPublic.get(`/api/v1/users?${queryParams.toString()}`);
};

const getUser = async () => {
  return await baseAxiosPublic.get(`/api/v1/users/${getUserId()}`);
}

const getDonations = async (userId) => {
  return await baseAxiosPublic.get(`/api/v1/users/${userId}/donations`);
}

const postDonation = async (idUsuario, donationType) => {  
  const payload = {
    donationType: parseInt(donationType),
    donationPlace: getFullName()
  };

  return await baseAxiosPublic.post(`/api/v1/users/${idUsuario}/donation`, payload);
};

const putPersonalData = async (data) => {
  const { name, email, phoneNumber, birthDate, gender } = data;
  const payload = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    birthDate: birthDate,
    gender: gender
  };

  return await baseAxiosAuth.put(`api/v1/users/${getUserId()}/personal-data`, payload);
};

export { createUser, passwordForget, passwordChange, getUser, getUsers, getDonations, postDonation, putPersonalData };
