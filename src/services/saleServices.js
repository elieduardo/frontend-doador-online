import { getUserId } from "./auth";
import baseAxiosAuth from "./config/baseAxiosAuth";
import baseAxiosPublic from "./config/baseAxiosPublic";

const getSales = async (campaignId) => {
    return await baseAxiosPublic.get(`/api/v1/sales`);
};

const postUsePoints = async (saleId) => {
    const payload = {
        userId: getUserId()
    };
    return await baseAxiosPublic.post(`/api/v1/sales/${saleId}/use-points`, payload);
};

const deleteSale = async (saleId) => {
    return await baseAxiosPublic.delete(`/api/v1/sales/${saleId}`);
}

export { getSales, postUsePoints, deleteSale };