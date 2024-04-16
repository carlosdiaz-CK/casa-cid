import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/reglamento.css";

import Home from "../index";

const Reglamento = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigationBack = (e) => {
    e.preventDefault();
    setCurrentPage("home");
  };

  let content;
  switch (currentPage) {
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
              // nextButtonHref="/reglamento/page2"
            />

            <div className="main__content">
              {/* <p>
            <strong>Estimado Propietario de Nima Bay:</strong>
          </p>
          <p>
            Pensando en su comodidad, a continuación algunos puntos importantes
            a tomar en cuenta antes de habitar su nuevo condominio:
          </p>
          <p>
            <strong>USO DE CONDOMINIO</strong>
          </p>
          <ul>
            <li>
              Cada propietario hará uso de su vivienda en forma ordenada y
              decorosa. Evitando actos y actitudes contrarias a la moral y a las
              buenas costumbres. Por ningún motivo se deberá afectar la
              tranquilidad o la seguridad de los demás condóminos.
            </li>
            <li>
              El horario para los contratistas del propietario de construcción,
              renovaciones y mejoras es de 10:00 a 18:00 horas de Lunes a
              Viernes, No se permiten actividades de construcción los sábados,
              domingos y días festivos.
            </li>
            <li>
              Los horarios de mudanzas y personal de limpieza, serán de Lunes a
              viernes de 09:00 a 18:00 horas y sábados de 9:00 a 14:00 horas.
            </li>
            <li>
              El número máximo de personas registradas para un departamento de 2
              dormitorios es de cuatro (4) adultos y cuatro (4) niños para un
              total de 8 huéspedes.
            </li>
          </ul> */}
            </div>

            <Footer homeBtn={true} pageCount={1} totalPages={1} zIndexStyle={1} />
          </PagesLayout>
        </>
      );
  }

  return <>{content}</>;
};

export default Reglamento;
