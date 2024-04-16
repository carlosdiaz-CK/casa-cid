import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/mas.css";
import "../../styles/carrito.css";

import Home from "../index";

const Carrito = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigationBack = (e) => {
    e.preventDefault();
    setCurrentPage("home");
  };

  let content;
  switch (currentPage) {
    case "home":
      content = <Home />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-1.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={handleNavigationBack}
              titlePage="Carrito de golf"
            />

            <div className="main__content">
              <div className="page mas carrito">
                <h2>Réntalo para transportarte</h2>

                <div>
                  <img
                    src="./assets/img/pages/carrito/carrito-1.JPG"
                    alt="Carrito de golf"
                  />
                  <img
                    src="./assets/img/pages/carrito/carrito-2.JPG"
                    alt="Carrito de golf"
                  />
                  <img
                    src="./assets/img/pages/carrito/carrito-3.JPG"
                    alt="Carrito de golf"
                  />
                  <img
                    src="./assets/img/pages/carrito/carrito-4.jpeg"
                    alt="Carrito de golf"
                  />
                </div>
              </div>
            </div>

            <Footer
              homeBtn={true}
              pageCount={1}
              totalPages={1}
              zIndexStyle={1}
            />
          </PagesLayout>
        </>
      );
  }

  return <>{content}</>;
};

export default Carrito;
