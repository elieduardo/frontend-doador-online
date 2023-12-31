import React, { useCallback, useEffect, useState } from "react";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";

import { Alert, Col, Row } from "react-bootstrap";
import { isAuthenticated, roleIsEqual } from "../../services/auth";
import { Roles } from "../../helpers/Constant";
import ModalSale from "./modalSale";
import ItemSale from "../../components/ItemSale";
import { getSales } from "../../services/saleServices";
import { toast } from "react-toastify";

export default function Sales() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleGetSales = useCallback(async () => {
    setIsLoading(true);

    await getSales()
      .then(({ data }) => {
        setData(data);
      })
      .catch((e) => {
        toast.error(`${e.status} - ${e.messages}`, {
          autoClose: 3000,
          hideProgressBar: true,
        });
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    handleGetSales();
  }, [handleGetSales])

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
            Promoções
          </Col>
          {(isAuthenticated() && roleIsEqual(Roles.Partner)) &&
            <Col
              sm={12}
              md={12}
              lg={6}
              className="text-lg-end text-center mt-4 mt-lg-0"
            >
              <ModalSale handleGetSales={handleGetSales} />
            </Col>}
        </Row>
        <div className="pb-3 pb-4 mt-3 border-top" />
      </div>
      <div className="px-5 py-2">
        {isLoading ?
          <div className="pt-5 d-flex justify-content-center">
            Aguarde
            <span
              class="ms-1 spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          </div> :
          <Row>
            {data.map(x =>
            (<ItemSale
              data={x}
              handleGetSales={handleGetSales}
            />)
            )}
            {data.length === 0 && <Alert className="mx-3 my-7 text-center">Nenhuma promoção foi encontrada.</Alert>}
          </Row>
        }
        <Footer />
      </div>
    </>
  );
}
