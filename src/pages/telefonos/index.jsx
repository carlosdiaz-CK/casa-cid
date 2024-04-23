import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";

import Home from "../index";

const Telefonos = () => {
  const [currentPage, setCurrentPage] = useState("");

  let content;
  switch (currentPage) {
    case "home":
      content = <Home />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-31.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={() => setCurrentPage("home")}
              titlePage="Teléfonos de emergencia"
            />

            <div className="main__content">
              <p>
                <strong>Emergencias</strong>
              </p>

              <p>
                Número de emergencia de Protección Civil. Este es el mejor número para llamar a Ambulancia, Bomberos y Socorristas de EMT:
              </p>

              <p>01 800 830 2185</p>
              <p>(322) 113-3255</p>

              <p className="pTitle">
                <strong>Servicios de policía y bomberos:</strong>
              </p>

              <p>
                Marque el 911 para emergencias. Se contesta en Puerto Vallarta, pero despachan desde Bucerías, Valle de Banderas, Jarretederas, etc, dependiendo de la necesidad del servicio, como servicio de policía, bomberos, servicio médico, etc.
              </p>

              <p>
                Marca 080 desde celulares mexicanos. (Marcar 080 NO funcionará desde teléfonos celulares de EE. UU., Canadá o Europa). Por favor marque 01-329-291-1818 desde teléfonos celulares extranjeros. Programe este número en su celular para cualquier emergencia. Esta llamada va directamente a la oficina en Valle de Banderas, las 24 horas del día.
              </p>

              <p>
                Para reportar actividad sospechosa en Sayulita, favor de marcar al 045-322-141-5994.
              </p>
            </div>

            <Footer
              pageCount={1}
              totalPages={1}
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

export default Telefonos;
