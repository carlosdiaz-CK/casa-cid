import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/comida-bebida.css";

import ComidaBebida from "./index";

const ComidaBebida2 = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigationBack = (e) => {
    e.preventDefault();
    setCurrentPage("comida-bebida");
  };

  let content;
  switch (currentPage) {
    case "comida-bebida":
      content = <ComidaBebida />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-3.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={handleNavigationBack}
              titlePage="Comida y bebida"
            />

            <div className="main__content">
              <div className="page">
                <h2>ALOHA SAYULITA</h2>
              </div>
              <div className="page__columns">
                <div>
                  <img
                    src="./assets/img/pages/comida-bebida/comida-bebida-3.jpeg"
                    alt="ALOHA SAYULITA"
                  />
                </div>
                <div>
                  <p>
                    Restaurante de mariscos a pie de playa con la mejor vista
                    que podrás pedir, cuenta con un excelente ambiente y el
                    servicio no se diga. Si podemos sugerir un platillo te
                    sugerimos el sashimi, está de locura.
                  </p>
                  <p>
                    Dirección: Delfines 12, 63728 Sayulita, Nay.
                    <br />
                    Contacto: 33 3390 7252
                  </p>
                </div>
              </div>

              <div className="page">
                <h2>SI SEÑOR SAYULITA</h2>
              </div>
              <div className="page__columns">
                <div>
                  <img
                    src="./assets/img/pages/comida-bebida/comida-bebida-4.jpeg"
                    alt="SI SEÑOR SAYULITA"
                  />
                </div>
                <div>
                  <p>
                    El lugar perfecto para una cena romántica, se encargan de
                    que pases una noche increíble, si quieres disfrutar de una
                    noche en pareja con platillos y cocteles deliciosos, este es
                    el lugar perfecto para ti.
                  </p>
                  <p>
                    Dirección: Playa Los Muertos 13 A, Pescadores S/N, 63734
                    Sayulita, Nay.
                    <br />
                    Contacto: 32 9291 2055
                  </p>
                </div>
              </div>
            </div>

            <Footer
              homeBtn={true}
              pageCount={2}
              totalPages={2}
              zIndexStyle={1}
            />
          </PagesLayout>
        </>
      );
  }

  return <>{content}</>;
};

export default ComidaBebida2;
