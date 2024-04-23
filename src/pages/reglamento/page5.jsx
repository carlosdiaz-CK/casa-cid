import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";

import Reglamento4 from "./page4";
import Reglamento6 from "./page6";
import Home from "../index";

const Reglamento5 = () => {
  const [currentPage, setCurrentPage] = useState("");

  let content;
  switch (currentPage) {
    case "reglamento4":
      content = <Reglamento4 />;
      break;
    case "reglamento6":
      content = <Reglamento6 />;
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
              handleNavigationBack={() => setCurrentPage("reglamento4")}
              titlePage="Reglamento"
              nextButtonHref="#!"
              handleNavigationNext={() => setCurrentPage("reglamento6")}
            />

            <div className="main__content">
              <ol start={9}>
                <li>
                  Está prohibido ingresar a la alberca con cualquier tipo de
                  alimentos o bebidas.
                </li>
                <li>
                  CÓDIGO DE VESTIMENTA. Está prohibido entrar a la alberca en
                  cualquier prenda de ropa que no sea traje de baño, esto es
                  obligatorio.
                </li>
                <li>
                  Cualquier persona en notorio estado de embriaguez o bajo el
                  influjo de alguna droga, podrá ser retirada del área por
                  personal de seguridad.
                </li>
                <li>
                  Está PROHIBIDO hacer fogatas de cualquier tipo. Asimismo, está
                  prohibido el uso de cualquier tipo de fuegos artificiales en
                  las áreas comunes del condominio.
                  <br />
                  En caso de violación al reglamento por parte de algún
                  inquilino o visitante, la oficina de Administración podrá
                  solicitar al propietario el retiro de las personas que
                  considere necesarias.
                </li>
                <li>
                  Mantener el orden y cuidado en las áreas comunes del
                  condominio.
                </li>
              </ol>

              <p className="pTitle">
                <strong>ALIMENTOS Y BEBIDAS.</strong>
              </p>

              <p>
                Está permitido tener alimentos y bebidas en áreas comunes del
                condominio, siempre y cuando se observen las siguientes reglas:
              </p>
            </div>

            <Footer
              pageCount={5}
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

export default Reglamento5;
