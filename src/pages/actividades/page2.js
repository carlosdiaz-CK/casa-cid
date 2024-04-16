import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/actividades.css";

import Actividades from "./index";

const Actividades2 = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigationBack = (e) => {
    e.preventDefault();
    setCurrentPage("actividades");
  };

  let content;
  switch (currentPage) {
    case "actividades":
      content = <Actividades />;
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
            />

            <div className="main__content">
              <div className="page">
                <h2>LECCIONES PRIVADAS DE SURF</h2>
              </div>
              <div className="page__columns">
                <div>
                  <img
                    src="./assets/img/pages/actividades/actividades-3.jpeg"
                    alt="LECCIONES PRIVADAS DE SURF"
                  />
                </div>
                <div>
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
              homeBtn={true}
              pageCount={2}
              totalPages={2}
              zIndexStyle={1}
            />
          </PagesLayout>
        </>
      );
  }

  return <> {content} </>;
};

export default Actividades2;
