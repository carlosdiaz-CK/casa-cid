import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/reglamento.css";

import Reglamento6 from "./page6";
import Home from "../index";

const Reglamento7 = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigationBack = (e) => {
    e.preventDefault();
    setCurrentPage("reglamento6");
  };

  const handleNavigationHome = (e) => {
    e.preventDefault();
    setCurrentPage("home");
  }

  let content;
  switch (currentPage) {
    case "reglamento6":
      content = <Reglamento6 />;
      break;
    case "home":
      content = <Home />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-8.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={handleNavigationBack}
              titlePage="Reglamento"
            />

            <div className="main__content">
              <ol start={3}>
                <li>
                  Queda prohibido colgar ropa, toallas o cualquier otra cosa en
                  los balcones, barandales o mobiliario de las terrazas
                </li>
                <li>
                  La música proveniente de una unidad privativa debe ser de tal
                  forma que los vecinos NO la escuchen y solo en el horario que
                  establezca el reglamento del condominio..
                </li>
                <li>
                  Límite de Velocidad. El límite de velocidad dentro del
                  condominio es de 20 km/h en vialidades y 10 km/h en
                  estacionamientos.
                </li>
              </ol>

              <p className="pTitle">
                <strong>MASCOTAS</strong>
              </p>

              <ol>
                <li>
                  No se permitirá en ninguna circunstancia tener dentro del
                  departamento, ni en las azoteas, ni en ninguna otra área
                  común, mascotas de cualquier índole.
                </li>
              </ol>

              <br />
              <br />
              <p>
                <strong>
                  Las disposiciones previamente mencionadas en las áreas comunes
                  pueden experimentar variaciones conforme al reglamento interno
                  del condominio.
                </strong>
              </p>
            </div>

            <Footer
              pageCount={7}
              totalPages={7}
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

export default Reglamento7;
