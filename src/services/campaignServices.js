import { getUserId } from "./auth";
import baseAxiosAuth from "./config/baseAxiosAuth";
import baseAxiosPublic from "./config/baseAxiosPublic";

const createCampaign = async ({
    name,
    bloodType,
    rhFactor,
    image,
    birthDate,
    donationPlace
}) => {
    const formData = new FormData();
    const blob = await fetch(image).then((res) => res.blob());

    formData.append("userId", getUserId());
    formData.append("campaignImage", blob, "campaign_image.png");
    formData.append("doneeName", name);
    formData.append("doneeBloodType", bloodType);
    formData.append("doneeRhFactor", rhFactor);
    formData.append("doneeBirthDate", birthDate);
    formData.append("donationPlace", donationPlace);

    return await baseAxiosAuth.post("/api/v1/campaigns", formData, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
};

const getCampaigns = async ({ name = "", bloodType = "", rhFactor = "" }) => {
    const queryParams = new URLSearchParams({
        name,
        bloodType,
        rhFactor
    });
    return await baseAxiosPublic.get(`/api/v1/campaigns?${queryParams.toString()}`);
};

const getCampaign = async (campaignId) => {
    return await baseAxiosPublic.get(`/api/v1/campaigns/${campaignId}`);
};

const getCampaignCarrousel = async () => {
    return await baseAxiosPublic.get('/api/v1/campaigns/carrousel');
}

export { createCampaign, getCampaign, getCampaigns, getCampaignCarrousel };
