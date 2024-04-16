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
          backButtonHref="/reglamento/page2"
          titlePage="Reglamento"
          nextButtonHref="/reglamento/page4"
        />

        <div className="main__content">
          <li>
            Preguntar en la administración sobre los servicios disponibles para
            su señal de televisión e internet.
          </li>
          <li>
            Está prohibido el uso de drogas ilícitas o de venta libre en esta
            propiedad.
          </li>
          <li>
            El uso de reproductores de audio, audiovisuales o cualesquier otro
            aparato electrónico o de cómputo con emisión de sonido, así como, de
            instrumentos musicales que emitan sonidos de alta intensidad. En
            ningún caso se podrán reproducir ruidos o sonidos que superen los 65
            dB de ruido en un horario de 08:00 a 22:00 horas y los 55 dB en un
            horario de 20:00 a 08:00 horas del día siguiente.
          </li>
          <li>
            Antes de contratar algún servicio de proveedor le recomendamos
            solicitar sugerencias a la administración, ya que solo trabajamos
            con profesionales.
          </li>
          <li>
            Sacudir alfombras, colgar toallas, ropa u objetos similares en las
            terrazas y / o dentro de la Departamento con el potencial de ser
            vistos por terceros ajenos al Departamento.
          </li>
          <li>
            Cambiar el color de las fachadas a menos que sea acordado y aprobado
            por el Consejo.
          </li>
        </div>

        <Footer homeBtn={true} pageCount={3} totalPages={12} />
      </PagesLayout>
    </>
  );
};

export default page2;
