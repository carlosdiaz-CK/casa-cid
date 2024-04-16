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
          backButtonHref="/reglamento/page11"
          titlePage="Reglamento"
        />

        <div className="main__content">
          <ol start={4}>
            <li>
              No dejar vencer sus recibos de luz, televisión y teléfono; puede
              representar un problema en su próxima visita, por lo que sugerimos
              tomar precauciones.
            </li>
          </ol>

          <p>
            <strong>
              El incumplimiento a cualesquiera de las disposiciones contenidas
              en el presente documento se le impondrá una Multa por la cantidad
              de $250.00 USD (Doscientos cincuenta dólares moneda de curso legal
              en los Estados Unidos de América), estás multas podrán ser
              acumulativas por cada una de las conductas, actos u omisiones que
              el Propietario, Familiar, Visitante, Huésped o Proveedor efectúe.
            </strong>
          </p>

          <p>
            Agradecemos de antemano su atención al presente documento y le
            reiteramos que estamos a sus órdenes para cualquier duda o
            aclaración al respeto.
          </p>

          <p>
            <strong>ATENTAMENTE</strong>
          </p>

          <p>
            <strong>
              Víctor Torres Córdoba
              <br />
              Gerente Administrativo de Nima Bay
            </strong>
          </p>

          <p>
            admon.nimabay@gmail.com
            <br />
            Teléfono Oficina (322) 22 123 35 / (322) 22 105 34
          </p>
        </div>

        <Footer homeBtn={true} pageCount={12} totalPages={12} />
      </PagesLayout>
    </>
  );
};

export default page2;
