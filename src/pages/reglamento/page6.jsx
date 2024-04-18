import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";

import Reglamento5 from "./page5";
import Reglamento7 from "./page7";
import Home from "../index";

const Reglamento6 = () => {
  const [currentPage, setCurrentPage] = useState("");

  let content;
  switch (currentPage) {
    case "reglamento5":
      content = <Reglamento5 />;
      break;
    case "reglamento7":
      content = <Reglamento7 />;
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
              handleNavigationBack={() => setCurrentPage("reglamento5")}
              titlePage="Reglamento"
              nextButtonHref="#!"
              handleNavigationNext={() => setCurrentPage("reglamento7")}
            />

            <div className="main__content">
              <ol>
                <li>
                  En áreas de Albercas y Áreas Comunes, está prohibido el uso de
                  vasos, copas, platos, refractarios, etc. de cristal.
                </li>
                <li>
                  Siempre se deberán usar vajillas de plástico, para evitar un
                  accidente.
                </li>
                <li>
                  Está prohibido el uso de platos de plástico desechable. Solo
                  se permite el uso de platos de cartón (o materiales similares)
                  biodegradables.
                </li>
                <li>
                  Está prohibido contratar servicio de banquetes y catering para
                  ser servido en Áreas Comunes.
                </li>
                <li>
                  El uso de hieleras personales en las áreas públicas está
                  permitido, siempre y cuando la hielera sea del tipo, color y
                  modelo aprobado. (solo aplica para el condominio Bolongo)
                </li>
                <li>
                  BEBIDAS. Las botellas de cristal de vino, licor, cerveza,
                  refresco, agua, etc., deberán permanecer siempre en las
                  Hieleras.
                </li>
              </ol>

              <p className="pTitle">
                <strong>DISPOSICIONES GENERALES.</strong>
              </p>

              <ol>
                <li>
                  El uso de cámaras profesionales, equipos de video, drones y
                  otros equipos NO está permitido.
                </li>
                <li>
                  Los departamentos tendrán una ocupación máxima de 3 personas
                  por habitación.
                </li>
              </ol>
            </div>

            <Footer
              pageCount={6}
              totalPages={7}
              homeBtn={true}
              handleNavigationHome={() => setCurrentPage("home")}
              zIndexStyle={1}
            />
          </PagesLayout>
        </>
      );
  }

  return content;
};

export default Reglamento6;
