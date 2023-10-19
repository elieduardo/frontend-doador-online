import { removeMask } from "../helpers/Strings";
import baseAxiosPublic from "./config/baseAxiosPublic";

const getAddress = async (zipCode) => {
  return await baseAxiosPublic.get(`/api/v1/address/${removeMask(zipCode)}`);
};

export { getAddress };
