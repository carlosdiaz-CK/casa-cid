import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";

import RestaurantesBares from "./index";
import RestaurantesBaresInterior4 from "./interiores/restaurantes-bares-interior-4";
import Home from "../index";

const RestaurantesBares2 = () => {
  const [currentPage, setCurrentPage] = useState("");

  let content;
  switch (currentPage) {
    case "restaurantes-bares":
      content = <RestaurantesBares />;
      break;
    case "restaurantes-bares-interior-4":
      content = <RestaurantesBaresInterior4 />;
      break;
    case "home":
      content = <Home />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-4.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={() => setCurrentPage("restaurantes-bares")}
              titlePage="Restaurantes y bares"
            />

            <div className="main__content">
              <div className="page">
                <h2>ALOHA SAYULITA</h2>
              </div>
              <div className="page__columns">
                <div className="column_image">
                  <img
                    src="./assets/img/pages/restaurantes-bares/restaurantes-bares-3.jpeg"
                    alt="ALOHA SAYULITA"
                  />
                </div>
                <div className="column_text">
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
                <div className="column_image" onClick={() => setCurrentPage("restaurantes-bares-interior-4")}>
                  <img
                    src="./assets/img/pages/restaurantes-bares/restaurantes-bares-4.jpeg"
                    alt="SI SEÑOR SAYULITA"
                  />
                  <div className="ver_mas">
                    <span>Ver más...</span>
                  </div>
                </div>
                <div className="column_text">
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
              pageCount={2}
              totalPages={2}
              homeBtn={true}
              handleNavigationHome={() => setCurrentPage("home")}
              zIndexStyle={1}
            />
          </PagesLayout>
        </>
      );
  }

  return <>{content}</>;
};

export default RestaurantesBares2;
