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
          backButtonHref="/reglamento/page10"
          titlePage="Reglamento"
          nextButtonHref="/reglamento/page12"
        />

        <div className="main__content">
          <li>
            El acceso y uso de las áreas verdes es exclusivo de todos los
            propietarios de los departamentos que conforman el conjunto
            habitacional, dando el acceso a las áreas a todos los arrendatarios
            solo cuando se cumplan las siguientes tres condiciones.
            <ol>
              <li>El propietario deberá estar al corriente de sus cuotas.</li>
              <li>
                El propietario está obligado a dar aviso y registrar a los
                arrendatarios con la administración, mediante correo y/o una
                carta por escrito.
              </li>
              <li>El contrato de arrendamiento debe ser mayor a una semana.</li>
              <li>
                El arrendatario deberá cumplir cabalmente con el reglamento
                interno. Acotando que a la primera falta se le prohibirá la
                entrada a las áreas comunes.
              </li>
            </ol>
          </li>

          <p>
            <strong>CUANDO NO SE ENCUENTREN</strong>
          </p>

          <p>
            Al dejar su condominio por periodos largos no olvide las siguientes
            recomendaciones:
          </p>
          <ol>
            <li>
              Avisar a esta administración cuando se vayan a retirar por
              periodos largos (48 hrs.).
            </li>
            <li>
              Favor de cerrar su válvula principal de agua para evitar posibles
              inundaciones.
            </li>
            <li>
              Apagar los interruptores en su tablero eléctrico para el ahorro de
              energía.
            </li>
          </ol>
        </div>

        <Footer homeBtn={true} pageCount={11} totalPages={12} />
      </PagesLayout>
    </>
  );
};

export default page2;
