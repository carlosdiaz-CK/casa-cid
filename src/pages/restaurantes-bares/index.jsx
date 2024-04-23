import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";

import Home from "../index";
import RestaurantesBares2 from "./page2";
import RestaurantesBaresInterior1 from "./interiores/restaurantes-bares-interior-1";
import RestaurantesBaresInterior2 from "./interiores/restaurantes-bares-interior-2";

const RestaurantesBares = () => {
  const [currentPage, setCurrentPage] = useState("");

  let content;
  switch (currentPage) {
    case "home":
      content = <Home />;
      break;
    case "restaurantes-bares-2":
      content = <RestaurantesBares2 />;
      break;
    case "restaurantes-bares-interior-1":
      content = <RestaurantesBaresInterior1 />;
      break;
    case "restaurantes-bares-interior-2":
      content = <RestaurantesBaresInterior2 />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-4.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={() => setCurrentPage("home")}
              titlePage="Restaurantes y bares"
              nextButtonHref="#!"
              handleNavigationNext={() => setCurrentPage("restaurantes-bares-2")}
            />

            <div className="main__content">
              <div className="page">
                <h2>MAR - SAYULITA</h2>
              </div>
              <div className="page__columns">
                <div className="column_image" onClick={() => setCurrentPage("restaurantes-bares-interior-1")}>
                  <img
                    src="./assets/img/pages/restaurantes-bares/restaurantes-bares-1.png"
                    alt="MAR - SAYULITA"
                  />
                  <div className="ver_mas">
                    <span>Ver más...</span>
                  </div>
                </div>
                <div className="column_text">
                  <p>
                    Un restaurante de mariscos delicioso donde podrás disfrutar
                    de tu comida tanto dentro del restaurante o en unas
                    sombrillas a pie de playa. Un lugar perfecto para disfrutar
                    de una deliciosa comida, drinks y buena musica.
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
                <div className="column_image" onClick={() => setCurrentPage("restaurantes-bares-interior-2")}>
                  <img
                    src="./assets/img/pages/restaurantes-bares/restaurantes-bares-2.jpeg"
                    alt="DON PEDRO’S RESTAURANTE & BAR"
                  />
                  <div className="ver_mas">
                    <span>Ver más...</span>
                  </div>
                </div>
                <div className="column_text">
                  <p>
                    Si tienes antojo de una deliciosa langosta, este lugar es
                    perfecto para ti. En este delicioso restaurante podrás
                    disfrutar de una vista hermosa y sin mencionar sus
                    deliciosos platillos.
                  </p>
                  <p>
                    Dirección: C. Marlín 2, 63734 Sayulita, Nay.
                    <br />
                    Contacto: 32 9291 3090
                  </p>
                </div>
              </div>
            </div>

            <Footer
              pageCount={1}
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

export default RestaurantesBares;
