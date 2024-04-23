import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";

import Reglamento from "./index";
import Reglamento3 from "./page3";
import Home from "../index";

const Reglamento2 = () => {
  const [currentPage, setCurrentPage] = useState("");

  let content;
  switch (currentPage) {
    case "reglamento":
      content = <Reglamento />;
      break;
    case "reglamento3":
      content = <Reglamento3 />;
      break;
    case "home":
      content = <Home />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-52.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={() => setCurrentPage("reglamento")}
              titlePage="Reglamento"
              nextButtonHref="#!"
              handleNavigationNext={() => setCurrentPage("reglamento3")}
            />

            <div className="main__content">
              <p>
                <strong>ADVERTENCIA:</strong> Dentro el desarrollo no se cuenta
                con paramédico, por lo que, está prohibido realizar actividades
                de riesgo, tales como nadar cerca de las piedras en el mar,
                introducirse muy lejos de la playa, piquetes de mantarrayas o
                algún animal marino o ponzoñoso, juegos imprudentes, clavados en
                albercas, dejar niños solos sin supervisión, realizar caminatas
                dentro de la selva, llegar a estados de ebriedad y caminar cerca
                de las albercas o mar, introducirse a nadar al mar o albercas
                bajo consumo de alcohol o drogas, etc..
              </p>

              <p>
                <strong>PROHIBIDO:</strong> Consumo de drogas o sustancias no
                legales nocivas para la salud, realizar actos inmorales o
                delictivos, rituales de carácter oscuro, grabaciones inmorales,
                fiestas con excesos, en términos generales ningún acto inmoral.
              </p>

              <p>
                <strong>NOTA:</strong> Cualquier servicio no descrito en el
                presente documento se podrá cotizar por separado..
              </p>

              <p className="pTitle">
                <strong>C A N C E L A C I O N E S:</strong>
              </p>
              <p>
                Al cancelar una reserva se procederá a las siguientes cláusulas.
              </p>

              <ol>
                <li>
                  Aviso de cancelación con 30 días previos a la fecha de reserva
                  o más, procede penalización del 15% sobre el total de la
                  reserva.
                </li>
              </ol>
            </div>

            <Footer
              pageCount={2}
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

export default Reglamento2;
