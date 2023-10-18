import { removeMask } from "../helpers/Strings";
import baseAxiosPublic from "./config/baseAxiosPublic";

const createUser = async ({
  name,
  cpf,
  birthDate,
  bloodDonator,
  bloodFactor,
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
  let userType = [];
  if (bloodDonator) {
    userType.push(1);
  }
  if (marrowDonator) {
    userType.push(2);
  }
  if (organsDonator) {
    userType.push(3);
  }

  const payload = {
    name,
    cpf: removeMask(cpf),
    password,
    email,
    phoneNumber: removeMask(phoneNumber),
    birthDate,
    gender: parseInt(gender),
    bloodType: 1,
    userType: parseInt(userType),
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

export { createUser };
