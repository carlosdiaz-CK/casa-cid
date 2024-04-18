import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";

import Actividades from "./index";
import ActividadesInterior3 from "./interiores/actividades-interior-3";
import Home from "../index";

const Actividades2 = () => {
  const [currentPage, setCurrentPage] = useState("");

  let content;
  switch (currentPage) {
    case "actividades":
      content = <Actividades />;
      break;
    case "actividades-interior-3":
      content = <ActividadesInterior3 />;
      break;
    case "home":
      content = <Home />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-2.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={() => setCurrentPage("actividades")}
              titlePage="Actividades en Sayulita"
            />

            <div className="main__content">
              <div className="page">
                <h2>LECCIONES PRIVADAS DE SURF</h2>
              </div>
              <div className="page__columns">
                <div className="column_image" onClick={() => setCurrentPage("actividades-interior-3")}>
                  <img
                    src="./assets/img/pages/actividades/actividades-3.jpeg"
                    alt="LECCIONES PRIVADAS DE SURF"
                  />
                  <div className="ver_mas">
                    <span>Ver más...</span>
                  </div>
                </div>
                <div className="column_text">
                  <p>
                    Aprende a surfear en una lección privada, por lo que
                    recibirás atención personalizada y se te proporcionara todo
                    el equipo necesario.
                  </p>
                  <p>Contacto: 34 911 776 743</p>
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

  return <> {content} </>;
};

export default Actividades2;
