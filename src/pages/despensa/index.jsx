import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";

import Home from "../index";
import Despensa2 from "./page2";
import DespensaInterior1 from "./interiores/despensa-interior-1";
import DespensaInterior2 from "./interiores/despensa-interior-2";

const Despensa = () => {
  const [currentPage, setCurrentPage] = useState("");

  let content;
  switch (currentPage) {
    case "home":
      content = <Home />;
      break;
    case "despensa2":
      content = <Despensa2 />;
      break;
    case "despensaInterior1":
      content = <DespensaInterior1 />;
      break;
    case "despensaInterior2":
      content = <DespensaInterior2 />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-23.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={() => setCurrentPage("home")}
              titlePage="Tu despensa"
              nextButtonHref="#!"
              handleNavigationNext={() => setCurrentPage("despensa2")}
            />

            <div className="main__content">
              <div className="page">
                <h2>MERCADO DEL PUEBLO</h2>
              </div>
              <div className="page__columns">
                <div className="column_image" onClick={() => setCurrentPage("despensaInterior1")}>
                  <img
                    src="./assets/img/pages/despensa/despensa-1.jpeg"
                    alt="MERCADO DEL PUEBLO"
                  />
                  <div className="ver_mas">
                    <span>Ver más...</span>
                  </div>
                </div>
                <div className="column_text">
                  <p>
                    En este hermoso mercado pintoresco encontraras desde ropa
                    hasta materia prima para preparar tus alimentos. Ve y visita
                    este mercado no te lo puedes perder.
                  </p>
                  <p>Dirección: Av. Revolución, 63728 Sayulita Nay.</p>
                </div>
              </div>

              <div className="page">
                <h2>PESCADERIA OMAR</h2>
              </div>
              <div className="page__columns">
                <div className="column_image" onClick={() => setCurrentPage("despensaInterior2")}>
                  <img
                    src="./assets/img/pages/despensa/despensa-2.jpeg"
                    alt="PESCADERIA OMAR"
                  />
                  <div className="ver_mas">
                    <span>Ver más...</span>
                  </div>
                </div>
                <div className="column_text">
                  <p>
                    A quien no se le antoja un delicioso ceviche o un aguachile
                    cuando esta en la playa, es por eso que te recomendamos las
                    pescaderías Omar donde podrás encontrar los mariscos más
                    frescos y deliciosos.
                  </p>
                  <p>
                    Dirección: Av. Revolución 123, 63734 Sayulita, Nay.
                    <br />
                    Contacto: 32 2171 0611
                  </p>
                </div>
              </div>
            </div>
            <Footer
              pageCount={1}
              totalPages={2}
              homeBtn={true}
              handleNavigationHome={() => setCurrentPage("home")}
              zIndexStyle={1}
            />
          </PagesLayout>
        </>
      );
  }

  return content;
};

export default Despensa;
