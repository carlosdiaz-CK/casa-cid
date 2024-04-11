import React from "react";
import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/mas.css";
import "../../styles/carrito.css";

const index = () => {
  return (
    <>
      <PagesLayout backgroundImage="/assets/img/photos/casa-cid-1.jpg">
        <ScreenSaver />

        <PagesHeader
          backButtonHref="/"
          titlePage="Carrito de golf"
        />

        <div className="main__content">
          <div className="page mas carrito">
            <h2>Réntalo para transportarte</h2>

            <div>
              <img src="/assets/img/pages/carrito/carrito-1.JPG" alt="Carrito de golf" />
              <img src="/assets/img/pages/carrito/carrito-2.JPG" alt="Carrito de golf" />
              <img src="/assets/img/pages/carrito/carrito-3.JPG" alt="Carrito de golf" />
              <img src="/assets/img/pages/carrito/carrito-4.jpeg" alt="Carrito de golf" />
            </div>
          </div>
        </div>

        <Footer homeBtn={true} pageCount={1} totalPages={1} />
      </PagesLayout>
    </>
  );
};

export default index;
