import React from "react";
import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/reglamento.css";

const page2 = () => {
  return (
    <>
      <PagesLayout backgroundImage="/assets/img/photos/casa-cid-8.jpg">
        <ScreenSaver />

        <PagesHeader
          backButtonHref="/reglamento/page4"
          titlePage="Reglamento"
          nextButtonHref="/reglamento/page6"
        />

        <div className="main__content">
          <li>
            No se permitirá tener en el interior del edificio, animales que
            resulten molestos a los residentes de Nima Bay (pericos y perros que
            ladran).
          </li>
          <li>
            Todas las mascotas deben de estar con correa en todo momento, nunca
            pueden ser dejado sin atención en las áreas comunes incluyendo los
            pasillos.
          </li>
          <li>
            Las heces de mascotas en las áreas comunes deben ser limpiados y
            desinfectados por el propietario inmediatamente.
          </li>
          <li>
            Las Mascotas deben permanecer exclusivamente dentro del departamento
            del Propietario, preservando la higiene general. El paseo de las
            Mascotas se deberá realizar al exterior de la propiedad del
            Condominio. Para su traslado se utilizará correa y deberán utilizar
            el estacionamiento, quedando estrictamente prohibido pasar por las
            áreas comunes y dentro o adyacentes a los caminantes. El dueño de la
            mascota será responsable de recolectar las heces de su Mascota
            durante el traslado.
          </li>

          <p>
            <strong>MUDANZAS</strong>
          </p>

          <li>
            Horarios de mudanzas son de Lunes a Viernes de 9:00 a 18:00 horas y
            Sábados de 9:00 a 14:00 horas
          </li>

          <li>
            Antes de comprar sus muebles y línea blanca tomar en cuenta las
            medidas del elevador así como las puertas de su condominio que son
            estándar, en nuestra oficina contamos con todas las medidas para
            facilitar su mudanza.
          </li>
        </div>

        <Footer homeBtn={true} pageCount={5} totalPages={12} />
      </PagesLayout>
    </>
  );
};

export default page2;
