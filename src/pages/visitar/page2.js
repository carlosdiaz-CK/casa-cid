import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/visitar.css";

import Visitar from "./index";
import Visitar3 from "./page3";
import Home from "../index";

const Visitar2 = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigationBack = (e) => {
    e.preventDefault();
    setCurrentPage("visitar");
  };

  const handleNavigationNext = (e) => {
    e.preventDefault();
    setCurrentPage("visitar3");
  };

  const handleNavigationHome = (e) => {
    e.preventDefault();
    setCurrentPage("home");
  }

  let content;
  switch (currentPage) {
    case "visitar":
      content = <Visitar />;
      break;
    case "visitar3":
      content = <Visitar3 />;
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
              nextButtonHref="#!"
              handleNavigationNext={handleNavigationNext}
            />

            <div className="main__content">
              <div className="page">
                <h2>PILATES SAYULITA</h2>
              </div>
              <div className="page__columns">
                <div>
                  <img
                    src="./assets/img/pages/visitar/visitar-3.jpeg"
                    alt="PILATES SAYULITA"
                  />
                </div>
                <div>
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
                <div>
                  <img
                    src="./assets/img/pages/visitar/visitar-4.jpeg"
                    alt="Pulse Fitness PV"
                  />
                </div>
                <div>
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
              handleNavigationHome={handleNavigationHome}
              zIndexStyle={1}
            />
          </PagesLayout>
        </>
      );
  }

  return <>{content}</>;
};

export default Visitar2;
