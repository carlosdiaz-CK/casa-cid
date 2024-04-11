import React from "react";
import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/visitar.css";

const page2 = () => {
  return (
    <>
      <PagesLayout backgroundImage="/assets/img/photos/casa-cid-4.jpg">
        <ScreenSaver />

        <PagesHeader
          backButtonHref="/visitar"
          titlePage="¿Qué visitar?"
          nextButtonHref="/visitar/page3"
        />

        <div className="main__content">
          <div className="page">
            <h2>PILATES SAYULITA</h2>
          </div>
          <div className="page__columns">
            <div>
              <img
                src="/assets/img/pages/visitar/visitar-3.jpeg"
                alt="PILATES SAYULITA"
              />
            </div>
            <div>
              <p>
                Lugar excelente para ejercitarte con entrenadores sumamente preparados y profesionales, si tu hasta de vacaciones buscas tener actividad física, este es el lugar indicado.
              </p>
              <p>
                Av. 63728 Sayulita, Nay.
                <br />
                Contacto: 32 2319 5790
              </p>
            </div>
          </div>

          <h2>SAYULITA FIT</h2>
          <div className="page__columns">
            <div>
              <img
                src="/assets/img/pages/visitar/visitar-4.jpeg"
                alt="Pulse Fitness PV"
              />
            </div>
            <div>
              <p>
                En este lugar encontraras de todo, desde ciclismo hasta entrenamiento de pesas con coach personal, este es un lugar super completo en el tanto tú como tus hijos podrán asistir.
              </p>
              <p>
                Dirección: 321 Ave. Revolucion #C, 63734 Sayulita, Nay.
                <br />
                Contacto: 32 2107 8614
              </p>
            </div>
          </div>
        </div>

        <Footer homeBtn={true} pageCount={2} totalPages={3} />
      </PagesLayout>
    </>
  );
};

export default page2;
