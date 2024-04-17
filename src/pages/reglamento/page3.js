import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/reglamento.css";

import Reglamento2 from "./page2";
import Reglamento4 from "./page4";
import Home from "../index";

const Reglamento3 = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigationBack = (e) => {
    e.preventDefault();
    setCurrentPage("reglamento2");
  };

  const handleNavigationNext = (e) => {
    e.preventDefault();
    setCurrentPage("reglamento4");
  };

  const handleNavigationHome = (e) => {
    e.preventDefault();
    setCurrentPage("home");
  }

  let content;
  switch (currentPage) {
    case "reglamento2":
      content = <Reglamento2 />;
      break;
    case "reglamento4":
      content = <Reglamento4 />;
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
              <ol start={2}>
                <li>
                  Aviso de cancelación menor de 30 a 20 días previos a la fecha
                  de reserva, procede penalización del 30% sobre el total de la
                  reserva.
                </li>
                <li>
                  Aviso de cancelación menor de 20 a 15 días previos a la fecha
                  de reserva, procede penalización del 50% sobre el total de la
                  reserva.
                </li>
                <li>
                  Aviso de cancelación menor de 15 días previos a la fecha de
                  reserva, procede penalización del 85% sobre el total de la
                  reserva.
                </li>
              </ol>

              <p>
                <strong>I M P O R T A N T E:</strong>
                <br />
                Al realizar el apartado mediante cualquier medio económico
                (Transferencia, depósito, o efectivo) de la unidad se considera
                como aceptación a las condiciones de renta, y reglas
                establecidas que a continuación se mencionan en este comprobante
                de alta de reserva vacacional. Al no cumplir alguna de las
                siguientes normas se podrá proceder en alguna llamada de
                atención por parte del equipo de seguridad del condominio y en
                caso de incurrir varias será acreedor a una sanción económica
                (multa). Al realizar un mal uso de la propiedad o instalaciones
                del lugar a la persona nombrada como el contratante de la
                Reserva Vacacional, quien se le responsabilizará de las
                consecuencias económicas, materiales, físicas, morales, etc. del
                daño generado por dicho mal uso.
              </p>
            </div>

            <Footer
              pageCount={3}
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

export default Reglamento3;
