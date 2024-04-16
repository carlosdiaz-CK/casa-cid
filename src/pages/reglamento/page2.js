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
          backButtonHref="/reglamento"
          titlePage="Reglamento"
          nextButtonHref="/reglamento/page3"
        />

        <div className="main__content">
          <li>
            El número máximo de personas registradas para un departamento de 3
            dormitorios es de cuatro (6) adultos y cuatro (4) niños para un
            total de 10 huéspedes.
          </li>
          <li>
            El número máximo de invitados permitido dentro de las áreas comunes
            para todas las unidades será de 10 personas.
          </li>
          <li>
            El acceso a los Visitantes será exclusivamente permitido cuando el
            Titular notifique al Administrador y al Concierge del Condominio
            mediante correo electrónico, para que le sea notificada la
            autorización de acceso al personal de seguridad, debiendo incluir:
            <ol>
              <li>El nombre completo y procedencia de la persona;</li>
              <li>Número de personas que realizarán la visita</li>
              <li>
                Fecha de ingreso y salida de la persona que realiza la visita.
              </li>
            </ol>
          </li>
          <li>
            Favor de mantener las puertas de su balcón cerradas al usar el aire
            acondicionado esto para evitar que se condense su equipo.
          </li>
          <li>
            Favor de no estacionar su vehículo en el área de lobby o en áreas
            comunes, cada condominio cuenta con su estacionamiento designado que
            deberá ser usado solo por los propietarios. Hay un área designada
            para visitantes y proveedores.
          </li>
        </div>

        <Footer homeBtn={true} pageCount={2} totalPages={12} />
      </PagesLayout>
    </>
  );
};

export default page2;
