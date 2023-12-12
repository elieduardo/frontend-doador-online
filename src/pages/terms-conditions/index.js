import React, { useEffect } from "react";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import { Col, Row } from "react-bootstrap";

export default function TermsConditions() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <NavBarComp />
            <div className={`px-5 pt-3`}>
                <Row>
                    <Col
                        sm={12}
                        md={12}
                        lg={6}
                        className="title-sm text-lg-start text-center"
                    >
                        Termos e condições - Doador Online
                    </Col>
                    <Col
                        sm={12}
                        md={12}
                        lg={6}
                        className="text-lg-end text-center mt-4 mt-lg-0"
                    ></Col>
                </Row>
                <div className="pb-3 pb-4 mt-3 border-top" />
            </div>
            <div className="px-5 py-2">
                <div className="title-sm text-center mb-2">Propósito da Plataforma:</div>
                <div className="content-text">
                    A plataforma Doador Online foi desenvolvida com o propósito de facilitar e tornar mais acessível o processo de doação de órgãos, sangue e medula. Os usuários concordam em utilizar a plataforma exclusivamente para finalidades legais e éticas, em conformidade com todas as leis e regulamentos aplicáveis.
                </div>
                <div className="title-sm m text-center mt-4 mb-2">Registro:</div>
                <div className="content-text">
                    Para acessar determinadas funcionalidades da plataforma, os usuários concordam em fornecer informações precisas e atualizadas durante o processo de registro. Quaisquer atividades realizadas por meio da conta são de sua responsabilidade.
                </div>
                <div className="title-sm m text-center mt-4 mb-2">Privacidade e Segurança:</div>
                <div className="content-text">
                    A proteção e privacidade das informações pessoais dos usuários são de extrema importância. Todas as informações fornecidas serão tratadas de acordo com nossa Política de Privacidade, e medidas de segurança são implementadas para proteger os dados dos usuários contra acesso não autorizado ou uso indevido.
                </div>
                <div className="title-sm m text-center mt-4 mb-2">Escolha do Tipo de Doação:</div>
                <div className="content-text">
                    A plataforma Doado Online oferece aos usuários a oportunidade de escolher o tipo de doação que desejam realizar, fornecendo informações educativas e esclarecedoras sobre os processos de doação de órgãos, sangue e medula. Encorajamos os usuários a tomarem decisões informadas e conscientes.
                </div>
                <div className="title-sm m text-center mt-4 mb-2">Responsabilidades dos Usuários:</div>
                <div className="content-text">
                    Os usuários concordam em utilizar a plataforma de maneira ética e responsável. Qualquer conduta inadequada, incluindo informações falsas ou prejudiciais, resultará em medidas apropriadas, incluindo a possível suspensão da conta.
                </div>
                <div className="title-sm m text-center mt-4 mb-2">Modificações nos Termos:</div>
                <div className="content-text">
                    Reservamo-nos o direito de modificar estes Termos e Condições a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação na plataforma. Os usuários são incentivados a revisar periodicamente os Termos para se manterem informados. Ao utilizar a plataforma "Doador Online", você concorda integralmente com estes Termos e Condições. Obrigado por se juntar a nós na missão de salvar vidas por meio da doação.
                </div>
                <Footer />
            </div>
        </>
    );
}
