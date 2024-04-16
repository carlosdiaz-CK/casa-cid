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
          backButtonHref="/reglamento/page7"
          titlePage="Reglamento"
          nextButtonHref="/reglamento/page9"
        />

        <div className="main__content">
          <li>
            Queda prohibido instalar antenas de radio o televisión y tendederos
            de ropa en paredes, ventanas, balcones y demás partes exteriores del
            condominio, así como cables y masetas que distorsionen la fachada
            original del condominio.
          </li>

          <li>
            Los Propietarios deben informar a la oficina de Administraciones,
            por escrito, si un Propietario tiene previsto realizar algún tipo de
            construcción o renovación en su Unidad. Los propietarios deben
            proporcionar planos y dibujos detallados del tipo de construcción o
            renovaciones que se están realizando, las fechas de principio a fin,
            así como el personal y los contratistas que están autorizados a
            estar en su Unidad. Los propietarios deben discutir y proporcionar
            detalles relacionados con la mitigación del ruido y la generación /
            migración de polvo. Una vez que el Propietario presente sus planes
            de construcción / renovación e información, se requiere una revisión
            y aprobación por parte del Consejo antes de comenzar cualquier
            construcción o renovación. El Consejo se reserva el derecho de un
            período de 7 días para revisar y comentar a los Propietarios. Es
            posible que el propietario vuelva a presentar los planos / dibujos
            para la construcción antes de una aprobación final por parte del
            Consejo. En ningún momento se realizará ninguna construcción,
            renovación o modificación antes de la aprobación final del Consejo.
            • Todos los residuos generados por la renovación debe ser retirado
            por el contratista o usted mismo. En ninguno de los casos podrá
            dejar los escombros en áreas comunes, contenedores o en el sistema
            de ducto de basura.
          </li>
        </div>

        <Footer homeBtn={true} pageCount={8} totalPages={12} />
      </PagesLayout>
    </>
  );
};

export default page2;
