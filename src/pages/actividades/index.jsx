import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";

import Home from "../index";
import Actividades2 from "./page2";
import ActividadesInterior1 from "./interiores/actividades-interior-1.jsx";
import ActividadesInterior2 from "./interiores/actividades-interior-2.jsx";

const Actividades = () => {
  const [currentPage, setCurrentPage] = useState("");

  let content;
  switch (currentPage) {
    case "home":
      content = <Home />;
      break;
    case "actividades2":
      content = <Actividades2 />;
      break;
    case "actividades-interior-1":
      content = <ActividadesInterior1 />;
      break;
    case "actividades-interior-2":
      content = <ActividadesInterior2 />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-2.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={() => setCurrentPage("home")}
              titlePage="Actividades en Sayulita"
              nextButtonHref="#!"
              handleNavigationNext={() => setCurrentPage("actividades2")}
            />

            <div className="main__content">
              <div className="page">
                <h2>MEGA YATE ChicaFun WATERSLIDES</h2>
              </div>
              <div className="page__columns">
                <div className="column_image" onClick={() => setCurrentPage("actividades-interior-1")}>
                  <img
                    src="./assets/img/pages/actividades/actividades-1.jpeg"
                    alt="MEGA YATE ChicaFun WATERSLIDES"
                  />
                  <div className="ver_mas">
                    <span>Ver más...</span>
                  </div>
                </div>
                <div className="column_text">
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
                <div className="column_image" onClick={() => setCurrentPage("actividades-interior-2")}>
                  <img
                    src="./assets/img/pages/actividades/actividades-2.jpeg"
                    alt="EXCURSIONES A CABALLO"
                  />
                  <div className="ver_mas">
                    <span>Ver más...</span>
                  </div>
                </div>
                <div className="column_text">
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

  return <>{content}</>;
};

export default Actividades;
