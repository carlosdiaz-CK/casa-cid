import React from "react";
import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/despensa.css";

const page2 = () => {
  return (
    <>
      <PagesLayout backgroundImage="/assets/img/photos/casa-cid-5.jpg">
        <ScreenSaver />

        <PagesHeader backButtonHref="/despensa" titlePage="Despensa" />

        <div className="main__content">
          <div className="page">
            <h2>LA COMER NUEVO NAYARIT</h2>
          </div>
          <div className="page__columns">
            <div>
              <img
                src="/assets/img/pages/despensa/despensa-3.jpeg"
                alt="LA COMER NUEVO NAYARIT"
              />
            </div>
            <div>
              <p>
                La vieja confiable, un supermercado donde podrás comprar toda tu despensa para pasar unos días increíbles sin tener que salir de tu hermoso Airbnb.
              </p>
              <p>
                Dirección: Av Paseo Flamingos Lote 8-1, Flamingos Club Residencial, 63732, 63732 Nay.
              </p>
            </div>
          </div>
        </div>

        <Footer homeBtn={true} pageCount={2} totalPages={2} />
      </PagesLayout>
    </>
  );
};

export default page2;
