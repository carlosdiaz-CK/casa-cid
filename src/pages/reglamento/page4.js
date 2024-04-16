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
          backButtonHref="/reglamento/page3"
          titlePage="Reglamento"
          nextButtonHref="/reglamento/page5"
        />

        <div className="main__content">
          <li>
            Realizar modificaciones estéticas o sustanciales a la estructura y
            fachada exterior del Departamento, de las áreas comunes o de uso
            exclusivo, salvo previa autorización por escrito emitida por el
            Administrador y autorizada por el Consejo de Administración del
            Condominio o la Asamblea de Condóminos cuando la naturaleza de los
            trabajos o modificaciones así lo ameriten. Cualquier trabajo de obra
            a realizarse en el Condominio o en cualquiera de los Departamentos
            solo podrán ejecutarse dentro del horario comprendido de lunes a
            viernes de 10:00 a 18:00 horas, siempre y cuando estos sean hábiles.
            Los Propietarios podrán realizar o ejecutar trabajos de
            mantenimiento o reparaciones a su Departamento fuera del horario
            establecido, cuando la naturaleza de dichos trabajos o reparaciones
            así lo requieran, previa aprobación del Administrador.
          </li>
          <li>
            En la entrega de su condominio recibirán por cada habitación 1
            toalla de cortesía por parte del desarrollador. Estas toallas
            tendrán bordado el número de su departamento y son las únicas
            toallas autorizadas para su uso en el área de alberca y áreas
            comunes. Si llegaran a necesitar más toallas o reposición de las
            mismas favor de pasar a esta administración.
          </li>

          <p>
            <strong>ANIMALES Y MASCOTAS</strong>
          </p>

          <li>
            Se permitirá un máximo de una mascota de raza pequeña ya sea perros
            o gatos por cada condominio, y deberán ser registrados con el
            Administrador General.
          </li>
        </div>

        <Footer homeBtn={true} pageCount={4} totalPages={12} />
      </PagesLayout>
    </>
  );
};

export default page2;
