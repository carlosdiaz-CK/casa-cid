import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";

import Home from "../index";
import Visitar2 from "./page2";
import VisitarInterior2 from "./interiores/visitar-interior-2";

const Visitar = () => {
  const [currentPage, setCurrentPage] = useState("");

  let content;
  switch (currentPage) {
    case "home":
      content = <Home />;
      break;
    case "visitar2":
      content = <Visitar2 />;
      break;
    case "visitar-interior-2":
      content = <VisitarInterior2 />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-4.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={() => setCurrentPage("home")}
              titlePage="Por visitar"
              nextButtonHref="#!"
              handleNavigationNext={() => setCurrentPage("visitar2")}
            />

            <div className="main__content">
              <div className="page">
                <h2>BUDDHA GALLERY AND SPA</h2>
              </div>
              <div className="page__columns">
                <div className="column_image">
                  <img
                    src="./assets/img/pages/visitar/visitar-1.jpeg"
                    alt="BUDDHA GALLERY AND SPA"
                  />
                </div>
                <div className="column_text">
                  <p>
                    Si estas buscando pasar un día de relajación y paz, Buddha
                    Gallery Spa es para ti, lo recomendamos ampliamente.
                  </p>
                  <p>
                    Dirección: C. Marlín 10, 63734 Sayulita, Nay.
                    <br />
                    Contacto: 32 9291 3406
                  </p>
                </div>
              </div>

              <div className="page">
                <h2>NIRVANNA SPA</h2>
              </div>
              <div className="page__columns">
                <div className="column_image" onClick={() => setCurrentPage("visitar-interior-2")}>
                  <img
                    src="./assets/img/pages/visitar/visitar-2.jpeg"
                    alt="NIRVANNA SPA"
                  />
                  <div className="ver_mas">
                    <span>Ver más...</span>
                  </div>
                </div>
                <div className="column_text">
                  <p>
                    ¿Un día de spa en pareja? Claro que si, te recomendamos
                    Nirvana Spa un lugar perfecto para pasar un día de
                    relajación con tu pareja.
                  </p>
                  <p>
                    Dirección: Second floor esquina, calle Marlin, Manuel N.
                    Navarrete 9, Sayulita, Nay.
                    <br />
                    Contacto: 32 9291 7302
                  </p>
                </div>
              </div>
            </div>

            <Footer
              pageCount={1}
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

export default Visitar;
