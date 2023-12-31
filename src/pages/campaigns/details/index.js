import React, { useCallback, useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import NavBarComp from "../../../components/NavBarComp";
import CustomBreadCrumb from "../../../components/CustomBreadCrumb";
import Footer from "../../../components/Footer";
import DefaultImage from "../../../assets/images/default-image.png";
import { getCampaign } from "../../../services/campaignServices";
import { toast } from "react-toastify";
import { useParams } from 'react-router-dom';
import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from "react-share";

export default function CampaignDetails() {
    const [isLoading, setIsLoading] = useState(false);
    const [donee, setDonee] = useState({});
    let { id } = useParams();

    const shareUrl = `https://frontend-doador-online.vercel.app/campaigns/${id}`;
    const title = "Faça a sua parte, Ajude na campanha de doação de sangue!";
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const handleGetCampaign = useCallback(async () => {
        setIsLoading(true);
        await getCampaign(id)
            .then(({ data }) => {
                setDonee(data);
            })
            .catch((e) => {
                toast.error(`${e.status} - ${e.messages}`, {
                    autoClose: 3000,
                    hideProgressBar: true,
                });
            })
            .finally(() => setIsLoading(false));
    }, [id]);

    useEffect(() => {
        handleGetCampaign();
    }, [handleGetCampaign])

    return (
        <>
            <NavBarComp />
            <CustomBreadCrumb title={`Campanha ${donee.doneeName !== undefined ? `- ${donee.doneeName}` : ''}`} />
            <div className="px-5 py-2">
                {isLoading
                    ?
                    <Row className="justify-content-center align-items-center my-7">
                        <Col className="text-center">
                            Aguarde
                            <span className="ms-1 spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                        </Col>
                    </Row>
                    :
                    donee.doneeName === undefined ?
                        <Alert className="mx-3 my-7 text-center">Nenhuma campanha foi encontrada.</Alert>
                        :
                        <Row>
                            <Col lg={6}>
                                <img className="img-details-campaign" alt="details" variant="top" src={donee.base64Image ? `data:image/png;base64, ${donee.base64Image}` : DefaultImage} />
                            </Col>
                            <Col lg={6} md={12} sm={12} className="px-lg-4">
                                <div className="d-flex flex-column h-100 justify-content-between">
                                    <div>
                                        <div className="title-md mb-1 mt-5 mt-lg-0">{donee.doneeName}</div>
                                        <div className="fw-light">{donee.doneeAge} anos</div>
                                        <div className="fw-light">Tipo sanguíneo: {donee.bloodType}</div>
                                        <div className="fw-light pb-4">Local doação: {donee.donationPlace}</div>
                                        <div className="content-text-md">
                                            A sua ajuda pode salvar a vida de {donee.doneeName}. Faça a sua parte doando e compartilhando esta campanha. Cada contribuição é valiosa e pode fazer a diferença. Juntos, podemos proporcionar esperança e apoio a José e sua família. Seja parte dessa causa e ajude-nos a alcançar nosso objetivo.
                                        </div>
                                    </div>
                                    <div className="text-center lg-mt-0 mt-4">
                                        <div className="content-text-md mb-3 text-center">Compartilhe essa campanha:</div>
                                        <FacebookShareButton
                                            className="mx-2"
                                            url={shareUrl}
                                        >
                                            <FacebookIcon size={32} round />
                                        </FacebookShareButton>
                                        <WhatsappShareButton
                                            className="mx-2"
                                            url={shareUrl}
                                            title={title}
                                            separator=": "
                                        >
                                            <WhatsappIcon size={32} round />
                                        </WhatsappShareButton>
                                        <TwitterShareButton
                                            className="mx-2"
                                            url={shareUrl}
                                            title={title}
                                        >
                                            <XIcon size={32} round />
                                        </TwitterShareButton>
                                        <TelegramShareButton
                                            className="mx-2"
                                            url={shareUrl}
                                            title={title}
                                        >
                                            <TelegramIcon size={32} round />
                                        </TelegramShareButton>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                }
            </div>
            <Footer />
        </>)
}