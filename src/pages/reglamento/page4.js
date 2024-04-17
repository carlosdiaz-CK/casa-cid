import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/reglamento.css";

import Reglamento3 from "./page3";
import Reglamento5 from "./page5";
import Home from "../index";

const Reglamento4 = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigationBack = (e) => {
    e.preventDefault();
    setCurrentPage("reglamento3");
  };

  const handleNavigationNext = (e) => {
    e.preventDefault();
    setCurrentPage("reglamento5");
  };

  const handleNavigationHome = (e) => {
    e.preventDefault();
    setCurrentPage("home");
  };

  let content;
  switch (currentPage) {
    case "reglamento3":
      content = <Reglamento3 />;
      break;
    case "reglamento5":
      content = <Reglamento5 />;
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
              nextButtonHref="#!"
              handleNavigationNext={handleNavigationNext}
            />

            <div className="main__content">
              <p>
                <strong>REGLAMENTO REDUCIDO DE CONVIVENCIA.</strong> ÁREAS
                COMUNES
              </p>

              <ol>
                <li>
                  El horario de uso de la alberca es conforme al reglamento
                  interno del condominio. .
                </li>
                <li>
                  El uso de la alberca es bajo responsabilidad del condómino o
                  visitante. No se cuenta con servicio de salvavidas.
                </li>
                <li>
                  Todos los menores de 12 años deberán estar supervisados por un
                  adulto.
                </li>
                <li>Favor de depositar la basura en su lugar.</li>
                <li>
                  Está prohibido tener cualquier tipo de envases de vidrio en la
                  zona de alberca. Evitemos un accidente.
                </li>
                <li>
                  Está prohibido tener bocinas o equipos de música con volumen
                  de tal forma que sea escuchado por los demás condóminos.,. Si
                  utiliza aparatos electrónicos en el área del jardín, alberca o
                  snack bar, favor de usar audífonos para no molestar a los
                  demás propietarios.
                </li>
                <li>
                  Está prohibido entrar a la alberca con arena. Favor de
                  enjuagarse en las regaderas.
                </li>
                <li>
                  Está prohibido apartar camastros, sillas o mesas en temporadas
                  de alta ocupación. La oficina de Administración podrá dictar
                  medidas temporales. Si se encuentran sus pertenencias sobre
                  dichos muebles, serán enviados a la administración en calidad
                  de extraviados.
                </li>
              </ol>
            </div>

            <Footer
              pageCount={4}
              totalPages={7}
              homeBtn={true}
              handleNavigationHome={handleNavigationHome}
              zIndexStyle={1}
            />
          </PagesLayout>
        </>
      );
  }

  return content;
};

export default Reglamento4;
