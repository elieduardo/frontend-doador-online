import { removeMask } from "../helpers/Strings";
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

export { createUser, passwordForget, passwordChange };
