import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/actividades.css";

import Home from "../index";
import Actividades2 from "./page2";

const Actividades = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigationBack = (e) => {
    e.preventDefault();
    setCurrentPage("home");
  };

  const handleNavigationNext = (e) => {
    e.preventDefault();
    setCurrentPage("actividades2");
  };

  let content;
  switch (currentPage) {
    case "home":
      content = <Home />;
      break;
    case "actividades2":
      content = <Actividades2 />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-2.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={handleNavigationBack}
              titlePage="Actividades al aire libre"
              nextButtonHref="#!"
              handleNavigationNext={handleNavigationNext}
            />

            <div className="main__content">
              <div className="page">
                <h2>MEGA YATE ChicaFun WATERSLIDES</h2>
              </div>
              <div className="page__columns">
                <div>
                  <img
                    src="./assets/img/pages/actividades/actividades-1.jpeg"
                    alt="MEGA YATE ChicaFun WATERSLIDES"
                  />
                </div>
                <div>
                  <p>
                    Si estas buscando comodidad, diversión y aventura te
                    recomendamos este trimarán que lo tiene todo y es todo
                    incluido. Sin duda vivirás una experiencia increíble.
                  </p>
                  <p>Reserva en: tripadvisor.com.mx</p>
                </div>
              </div>

              <div className="page">
                <h2>EXCURSIONES A CABALLO</h2>
              </div>
              <div className="page__columns">
                <div>
                  <img
                    src="./assets/img/pages/actividades/actividades-2.jpeg"
                    alt="EXCURSIONES A CABALLO"
                  />
                </div>
                <div>
                  <p>
                    Disfruta de un paseo a caballo por las selvas tropicales de
                    Sayulita. Podrás montar a través de ríos y cascadas hasta
                    llegar a la playa.
                  </p>
                  <p>Contacto: 34 911 776 743</p>
                </div>
              </div>
            </div>

            <Footer
              homeBtn={true}
              pageCount={1}
              totalPages={2}
              zIndexStyle={1}
            />
          </PagesLayout>
        </>
      );
  }

  return <>{content}</>;
};

export default Actividades;
