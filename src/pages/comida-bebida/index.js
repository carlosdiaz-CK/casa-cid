import React from "react";
import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/comida-bebida.css";

const index = () => {
  return (
    <>
      <PagesLayout backgroundImage="/assets/img/photos/casa-cid-3.jpg">
        <ScreenSaver />

        <PagesHeader
          backButtonHref="/"
          titlePage="Comida y bebida"
          nextButtonHref="/comida-bebida/page2"
        />

        <div className="main__content">
          <div className="page">
            <h2>MAR - SAYULITA</h2>
          </div>
          <div className="page__columns">
            <div>
              <img
                src="/assets/img/pages/comida-bebida/comida-bebida-1.png"
                alt="MAR - SAYULITA"
              />
            </div>
            <div>
              <p>
                Un restaurante de mariscos delicioso donde podrás disfrutar de
                tu comida tanto dentro del restaurante o en unas sombrillas a
                pie de playa. Un lugar perfecto para disfrutar de una deliciosa
                comida, drinks y buena musica.
              </p>
              <p>
                Dirección: #9 La Playa, Centro, 63734 Sayulita, Nay.
                <br />
                Contacto: 32 2728 7715
              </p>
            </div>
          </div>

          <div className="page">
            <h2>DON PEDRO’S RESTAURANTE & BAR</h2>
          </div>
          <div className="page__columns">
            <div>
              <img
                src="/assets/img/pages/comida-bebida/comida-bebida-2.jpeg"
                alt="DON PEDRO’S RESTAURANTE & BAR"
              />
            </div>
            <div>
              <p>
              Si tienes antojo de una deliciosa langosta, este lugar es perfecto para ti. En este delicioso restaurante podrás disfrutar de una vista hermosa y sin mencionar sus deliciosos platillos.
              </p>
              <p>
                Dirección: C. Marlín 2, 63734 Sayulita, Nay.
                <br />
                Contacto: 32 9291 3090
              </p>
            </div>
          </div>
        </div>

        <Footer homeBtn={true} pageCount={1} totalPages={2} />
      </PagesLayout>
    </>
  );
};

export default index;
