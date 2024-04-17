import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/visitar.css";

import Visitar2 from "./page2";
import Home from "../index";

const Visitar3 = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigationBack = (e) => {
    e.preventDefault();
    setCurrentPage("visitar2");
  };

  const handleNavigationHome = (e) => {
    e.preventDefault();
    setCurrentPage("home");
  }

  let content;
  switch (currentPage) {
    case "visitar2":
      content = <Visitar2 />;
      break;
    case "home":
      content = <Home />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-4.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={handleNavigationBack}
              titlePage="Por visitar"
            />

            <div className="main__content">
              <div className="page">
                <h2>EL BARRILITO</h2>
              </div>
              <div className="page__columns">
                <div>
                  <img
                    src="./assets/img/pages/visitar/visitar-5.jpeg"
                    alt="EL BARRILITO"
                  />
                </div>
                <div>
                  <p>
                    Es uno de los bares que tienes que visitar si estas en
                    Sayulita, cuentan con musica super agradable, ofertas en
                    bebidas y un gran servicio al cliente. Si quieres escaparte
                    una noche de fiestas te lugar es el indicado.
                  </p>
                  <p>
                    Dirección: C. Jose Mariscal 9, 63728 Sayulita, Nay.
                    <br />
                    Contacto: 33 3105 0351
                  </p>
                </div>
              </div>

              <h2>LUCID</h2>
              <div className="page__columns">
                <div>
                  <img
                    src="./assets/img/pages/visitar/visitar-6.jpeg"
                    alt="Pulse Fitness PV"
                  />
                </div>
                <div>
                  <p>
                    Un lugar para tomar unos drinks tranqui disfrutando de su
                    deliciosa mixologia con un ambiente relax. Si estas en plan
                    de salir pero quieres algo tranquilo Lucid es una gran
                    opción.
                  </p>
                </div>
              </div>
            </div>

            <Footer
              pageCount={3}
              totalPages={3}
              homeBtn={true}
              handleNavigationHome={handleNavigationHome}
              zIndexStyle={1}
            />
          </PagesLayout>
        </>
      );
  }

  return <>{content}</>;
};

export default Visitar3;
