import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";

import Visitar from "./index";
import Visitar3 from "./page3";
import VisitarInterior3 from "./interiores/visitar-interior-3";
import VisitarInterior4 from "./interiores/visitar-interior-4";
import Home from "../index";

const Visitar2 = () => {
  const [currentPage, setCurrentPage] = useState("");

  let content;
  switch (currentPage) {
    case "visitar":
      content = <Visitar />;
      break;
    case "visitar3":
      content = <Visitar3 />;
      break;
    case "visitar-interior-3":
      content = <VisitarInterior3 />;
      break;
    case "visitar-interior-4":
      content = <VisitarInterior4 />;
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
              handleNavigationBack={() => setCurrentPage("visitar")}
              titlePage="Por visitar"
              nextButtonHref="#!"
              handleNavigationNext={() => setCurrentPage("visitar3")}
            />

            <div className="main__content">
              <div className="page">
                <h2>PILATES SAYULITA</h2>
              </div>
              <div className="page__columns">
                <div className="column_image" onClick={() => setCurrentPage("visitar-interior-3")}>
                  <img
                    src="./assets/img/pages/visitar/visitar-3.jpeg"
                    alt="PILATES SAYULITA"
                  />
                  <div className="ver_mas">
                    <span>Ver más...</span>
                  </div>
                </div>
                <div className="column_text">
                  <p>
                    Lugar excelente para ejercitarte con entrenadores sumamente
                    preparados y profesionales, si tu hasta de vacaciones buscas
                    tener actividad física, este es el lugar indicado.
                  </p>
                  <p>
                    Av. 63728 Sayulita, Nay.
                    <br />
                    Contacto: 32 2319 5790
                  </p>
                </div>
              </div>

              <h2>SAYULITA FIT</h2>
              <div className="page__columns">
                <div className="column_image" onClick={() => setCurrentPage("visitar-interior-4")}>
                  <img
                    src="./assets/img/pages/visitar/visitar-4.jpeg"
                    alt="SAYULITA FIT"
                  />
                  <div className="ver_mas">
                    <span>Ver más...</span>
                  </div>
                </div>
                <div className="column_text">
                  <p>
                    En este lugar encontraras de todo, desde ciclismo hasta
                    entrenamiento de pesas con coach personal, este es un lugar
                    super completo en el tanto tú como tus hijos podrán asistir.
                  </p>
                  <p>
                    Dirección: 321 Ave. Revolucion #C, 63734 Sayulita, Nay.
                    <br />
                    Contacto: 32 2107 8614
                  </p>
                </div>
              </div>
            </div>

            <Footer
              pageCount={2}
              totalPages={3}
              homeBtn={true}
              handleNavigationHome={() => setCurrentPage("home")}
              zIndexStyle={1}
            />
          </PagesLayout>
        </>
      );
  }

  return <>{content}</>;
};

export default Visitar2;
