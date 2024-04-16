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
          backButtonHref="/reglamento/page9"
          titlePage="Reglamento"
          nextButtonHref="/reglamento/page11"
        />

        <div className="main__content">
          <li>
            Los propietarios que no estén al corriente del pago de cuotas
            ordinarias y extraordinarias anteriores a la asamblea general no
            tendrán derecho de voz y voto, además de que se les restringirá el
            acceso a las albercas, gimnasio, club de dueños, zen lounge, club de
            playa y elevadores.
          </li>

          <p>
            <strong>
              *Para más detalles consultar la política de cobranza, evítese
              multas o cortes de agua, caliente, luz en el refrigerador o
              bloqueo de tarjetas digitales.
            </strong>
          </p>

          <p>
            <strong>ARRENDAMIENTO DE INMUEBLES</strong>
          </p>

          <li>
            Los propietarios que arrenden o bajo títulos permitan a terceras
            personas usar su porción de inmueble, tendrán la obligación de
            avisar a la administración por escrito, proporcionándole la copia
            del contrato, con el objeto de que el administrador pueda efectuar
            el registro de este.
          </li>

          <li>
            Los departamentos de 1 recamara que sean rentados solo podrán
            habitarlos un máximo de 2 personas, los departamentos de 2 recámaras
            que sean rentados solo podrán habitarlos un máximo de 4 adultos y 4
            niños, y los de 3 recámaras que sean rentados solo podrán habitados
            por un máximo de 6 adultos y 4 niños .
          </li>

          <li>
            Todas las empresas que intervengan en el arrendamiento y
            administración de unidades del conjunto habitacional Nima Bay que se
            vean involucradas en hechos violatorios a los reglamentos, se le
            negara seguir arrendando inmuebles en el conjunto habitacional Nima
            Bay.
          </li>
        </div>

        <Footer homeBtn={true} pageCount={10} totalPages={12} />
      </PagesLayout>
    </>
  );
};

export default page2;
