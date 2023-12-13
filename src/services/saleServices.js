import { getUserId } from "./auth";
import baseAxiosAuth from "./config/baseAxiosAuth";
import baseAxiosPublic from "./config/baseAxiosPublic";

const getSales = async () => {
    return await baseAxiosAuth.get(`/api/v1/sales`);
};

const getSalesCarousel = async () => {
    return await baseAxiosPublic.get(`/api/v1/sales/carousel`);
};

const postUsePoints = async (saleId) => {
    const payload = {
        userId: getUserId()
    };
    return await baseAxiosPublic.post(`/api/v1/sales/${saleId}/use-points`, payload);
};

const postSale = async (values) => {
    const { description, points } = values;
    const payload = {
        description,
        points: parseInt(points)
    };
    return await baseAxiosAuth.post(`/api/v1/sales`, payload);
};

const deleteSale = async (saleId) => {
    return await baseAxiosPublic.delete(`/api/v1/sales/${saleId}`);
}

export { getSales, getSalesCarousel, postUsePoints, postSale, deleteSale };