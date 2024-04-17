import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/visitar.css";

import Home from "../index";
import Visitar2 from "./page2";

const Visitar = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigationBack = (e) => {
    e.preventDefault();
    setCurrentPage("home");
  };

  const handleNavigationNext = (e) => {
    e.preventDefault();
    setCurrentPage("visitar2");
  };

  let content;
  switch (currentPage) {
    case "home":
      content = <Home />;
      break;
    case "visitar2":
      content = <Visitar2 />;
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
                <h2>BUDDHA GALLERY AND SPA</h2>
              </div>
              <div className="page__columns">
                <div>
                  <img
                    src="./assets/img/pages/visitar/visitar-1.jpeg"
                    alt="BUDDHA GALLERY AND SPA"
                  />
                </div>
                <div>
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
                <div>
                  <img
                    src="./assets/img/pages/visitar/visitar-2.jpeg"
                    alt="NIRVANNA SPA"
                  />
                </div>
                <div>
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
              handleNavigationHome={handleNavigationBack}
              zIndexStyle={1}
            />
          </PagesLayout>
        </>
      );
  }

  return <>{content}</>;
};

export default Visitar;
