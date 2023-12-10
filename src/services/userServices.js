import { removeMask } from "../helpers/Strings";
import { getFullName, getUserId } from "./auth";
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
  complement,
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
      addressline2: complement,
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

const getPoints = async () => {
  return await baseAxiosPublic.get(`/api/v1/users/${getUserId()}/points`);
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
  const userId = await getUserId();
  const payload = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    birthDate: birthDate,
    gender: gender
  };

  return await baseAxiosPublic.put(`api/v1/users/${userId}/personal-data`, payload);
};

const putDonationOptions = async (data) => {
  const { bloodDonator, bloodType, marrowDonator, organsDonator, rhFactor } = data;
  const userId = await getUserId();

  const payload = {
    isBloodDonator: bloodDonator,
    isBoneMarrowDonator: marrowDonator,
    isOrganDonator: organsDonator,
    rHFactor: parseInt(rhFactor),
    bloodType: parseInt(bloodType)
  };

  return await baseAxiosPublic.put(`api/v1/users/${userId}/donation-options`, payload);
};

const putAddress = async (data) => {
  const { zipCode, street, number, complement, district, city, state } = data;
  const userId = await getUserId();
  
  const payload = {
    zipCode: zipCode,
    street: street,
    number: number,
    addressline2: complement,
    district: district,
    city: city,
    state: state
  };

  return await baseAxiosPublic.put(`api/v1/users/${userId}/address`, payload);
};

export {
  createUser,
  passwordForget,
  passwordChange,
  getUser,
  getUsers,
  getDonations,
  getPoints,
  postDonation,
  putPersonalData,
  putDonationOptions,
  putAddress
};
