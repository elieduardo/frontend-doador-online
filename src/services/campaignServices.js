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
    const payload = {
        UserId: getUserId(),
        DoneeName: name,
        DoneeBloodType: bloodType,
        DoneeRhFactor: rhFactor,
        CampaignImage: formData,
        DoneeBirthDate: birthDate,
        DonationPlace: donationPlace
    };

    return await baseAxiosAuth.post("/api/v1/campaigns", payload, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
};


const getCampaigns = async ({ name, bloodType, rhFactor }) => {
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

const getCampaignCarrousel = async () =>{
    return await baseAxiosPublic.get('/api/v1/campaigns/carrousel');
}

export { createCampaign, getCampaign, getCampaigns, getCampaignCarrousel };
