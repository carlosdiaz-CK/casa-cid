import React from "react";
import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/reglamento.css";

const page2 = () => {
  return (
    <>
      <PagesLayout backgroundImage="./assets/img/photos/casa-cid-8.jpg">
        <ScreenSaver />

        <PagesHeader
          backButtonHref="/reglamento/page6"
          titlePage="Reglamento"
          nextButtonHref="/reglamento/page8"
        />

        <div className="main__content">
          <li>
            No se permite el uso de bicicletas, patines ni patinetas de
            cualquier índole en las áreas comunes de Nima Bay.
          </li>

          <li>
            Niños menores de 12 años deben estar siempre acompañados de un
            adulto en las áreas comunes.
          </li>

          <p>
            <strong>TOLVAS DE BASURA (DUCTO DE BASURA)</strong>
          </p>

          <li>
            El sistema de ducto de basura es pequeño (18 pulgadas), favor de no
            desechar bolsas grandes, solo bolsas medianas que entren con
            facilidad.
          </li>
          <li>
            No tirar cajas de cualquier tipo por el ducto de basura, las cajas
            se atoran y quedara bloqueado el sistema de ducto de basura y
            causara malos olores en toda la torre. Tampoco se permite tirar
            basura suelta incluido los periódicos, correo, botellas de vidrio,
            cartón, líquidos, ganchos de ropa, materiales flamables o peligrosos
            a excepción de los materiales antes mencionados la demás basura debe
            ser empaquetada y sellada en bolsas medianas para posteriormente ser
            arrojada por el ducto
          </li>

          <p>
            <strong>MEJORAS Y REPARACIONES</strong>
          </p>

          <li>
            El horario para los contratistas del Propietario de construcción,
            renovaciones y mejoras es de 10:00 a.m. a 6:00 p.m., de lunes a
            viernes. No se permiten actividades de construcción los sábados,
            domingos o días festivos.
          </li>
        </div>

        <Footer homeBtn={true} pageCount={7} totalPages={12} />
      </PagesLayout>
    </>
  );
};

export default page2;
