import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";

import Despensa from "./index";
import DespensaInterior3 from "./interiores/despensa-interior-3";
import Home from "../index";

const Despensa2 = () => {
  const [currentPage, setCurrentPage] = useState("");

  let content;
  switch (currentPage) {
    case "despensa":
      content = <Despensa />;
      break;
    case "despensaInterior3":
      content = <DespensaInterior3 />;
      break;
    case "home":
      content = <Home />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-5.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={() => setCurrentPage("despensa")}
              titlePage="Tu despensa"
            />

            <div className="main__content">
              <div className="page">
                <h2>LA COMER NUEVO NAYARIT</h2>
              </div>
              <div className="page__columns">
                <div className="column_image" onClick={() => setCurrentPage("despensaInterior3")}>
                  <img
                    src="./assets/img/pages/despensa/despensa-3.jpeg"
                    alt="LA COMER NUEVO NAYARIT"
                  />
                  <div className="ver_mas">
                    <span>Ver más...</span>
                  </div>
                </div>
                <div className="column_text">
                  <p>
                    La vieja confiable, un supermercado donde podrás comprar
                    toda tu despensa para pasar unos días increíbles sin tener
                    que salir de tu hermoso Airbnb.
                  </p>
                  <p>
                    Dirección: Av Paseo Flamingos Lote 8-1, Flamingos Club
                    Residencial, 63732, 63732 Nay.
                  </p>
                </div>
              </div>
            </div>

            <Footer
              pageCount={2}
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

export default Despensa2;
