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
          backButtonHref="/reglamento/page8"
          titlePage="Reglamento"
          nextButtonHref="/reglamento/page10"
        />

        <div className="main__content">
          <li>
            Solo hay un tipo de cortina autorizado para todo el proyecto de Nima
            Bay, esto para que el edificio se vea uniforme y limpio. Favor de
            pasar a las oficinas de administración para proporcionarle esta
            información.
          </li>

          <p>
            <strong>
              *Para más detalles de las construcciones y remodelaciones consulte
              la política de propietarios e invitados evítese multas
              innecesarias.
            </strong>
          </p>

          <p>
            <strong>PAGO DE CUOTAS</strong>
          </p>

          <li>
            Todos los condóminos deberán participar en la conservación y
            mantenimiento de su inmueble a través de una cuota para el fondo de
            mantenimiento y administración, con el se cubren los gastos, que de
            manera inevitable tienen que erogarse para la buena conservación del
            inmueble.
          </li>

          <li>
            La cuota de mantenimiento ordinaria deberá cubrirse antes del día 5
            de cada mes del año en curso. Posterior a esta fecha causara interés
            mensual adicional de 10%.
          </li>

          <li>
            El pago del fondo de reserva será por $ 1,000.00 USD o $16,000
            (Dieciséis Mil Pesos 00/100 N.M.) por condominio y se tendrá que
            realizar con el primer pago de su mantenimiento.
          </li>

          <li>
            Los propietarios que paguen todo el año recibirán un descuento del 6
            % sobre el valor de las cuotas establecidas.
          </li>

          <li>
            En la asamblea anual se acordaran cuotas extraordinarios por los
            propietarios a fin de realizar obras que no se puedan cubrir con las
            cuotas ordinarias.
          </li>
        </div>

        <Footer homeBtn={true} pageCount={9} totalPages={12} />
      </PagesLayout>
    </>
  );
};

export default page2;
