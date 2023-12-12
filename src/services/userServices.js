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

  const formData = new FormData();
  formData.append('name', name);
  formData.append('cpf', removeMask(cpf));
  formData.append('password', password);
  formData.append('email', email);
  formData.append('phoneNumber', removeMask(phoneNumber));
  formData.append('birthDate', birthDate);
  formData.append('gender', parseInt(gender));
  formData.append('bloodType', parseInt(bloodType));
  formData.append('RhesusFactor', parseInt(rhFactor));
  formData.append('userType', 3);
  formData.append('donationType', donationType);

  formData.append('Address[street]', street);
  formData.append('Address[district]', district);
  formData.append('Address[addressline2]', complement);
  formData.append('Address[number]', number);
  formData.append('Address[city]', city);
  formData.append('Address[state]', state);
  formData.append('Address[zipCode]', removeMask(zipCode));
  formData.append('Address[country]', "Brasil");

  return await baseAxiosPublic.post("/api/v1/users", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
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

const postContact = async (data) => {
  let { name, email, message } = data;
  const payload = {
    name,
    email,
    message
  };

  return await baseAxiosPublic.post(`/api/v1/users/contact-us`, payload);
}

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
  putAddress,
  postContact
};
