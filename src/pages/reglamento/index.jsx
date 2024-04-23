import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";

import Home from "../index";
import Page2 from "./page2";

const Reglamento = () => {
  const [currentPage, setCurrentPage] = useState("");

  let content;
  switch (currentPage) {
    case "home":
      content = <Home />;
      break;
    case "page2":
      content = <Page2 />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-52.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={() => setCurrentPage("home")}
              titlePage="Reglamento"
              nextButtonHref="#!"
              handleNavigationNext={() => setCurrentPage("page2")}
            />

            <div className="main__content">
              <p>
                <strong>CONDICIONES DE RENTA:</strong> La reserva incluye
                limpieza de entrada y salida de la unidad, entrega de toallas,
                blancos y sábanas completamente limpios, libre uso de cualquier
                utensilio o equipo de cocina, libre acceso a red wifi para uso
                de internet, libre uso de televisiones o aparatos, libre uso
                para fines recreativos de todas las amenidades con las que
                cuenta el desarrollo. Cumpliendo con las normas establecidas por
                el reglamento de sana convivencia.
              </p>

              <p className="pTitle">
                <strong>Check in 3:00 PM y Check Out 12:00 PM</strong>
              </p>
              <ul>
                <li>
                  Cualquier extravío en el inventario o desperfecto ya sea a la
                  unidad privativa o a las áreas comunes realizado durante el
                  periodo de renta mencionado en esta carta es motivo de cobro
                  por el monto de recuperación del artículo, mueble, pieza,
                  accesorio, aparato etc. o costo de reparación del daño
                  realizado y/o en todo caso el pago de la multa por parte del
                  condominio..
                </li>
                <li>
                  La capacidad máxima de ocupación es de 3 personas por
                  habitación, considerando niños y bebés, sin importar la edad.
                  (En caso de exceder el Aforo no se les dará el ingreso a las
                  personas excedentes).
                </li>
                <li>No Mascotas. (no se permiten visitas).</li>
              </ul>
            </div>

            <Footer
              pageCount={1}
              totalPages={7}
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

export default Reglamento;
