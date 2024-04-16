import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/mas.css";

import Home from "../index";
import Mas2 from "./page2";

const Mas = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigationBack = (e) => {
    e.preventDefault();
    setCurrentPage("home");
  };

  const handleNavigationNext = (e) => {
    e.preventDefault();
    setCurrentPage("mas2");
  };

  let content;
  switch (currentPage) {
    case "home":
      content = <Home />;
      break;
    case "mas2":
      content = <Mas2 />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-7.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={handleNavigationBack}
              titlePage="Más opciones"
              nextButtonHref="#!"
              handleNavigationNext={handleNavigationNext}
            />

            <div className="main__content">
              <div className="page mas">
                <h2>BOLONGO, PUNTA DE MITA, NAYARIT</h2>

                <div>
                  <img
                    src="./assets/img/pages/mas/bolongo-1.jpeg"
                    alt="Bolongo"
                  />
                  <img
                    src="./assets/img/pages/mas/bolongo-2.jpeg"
                    alt="Bolongo"
                  />
                  <img
                    src="./assets/img/pages/mas/bolongo-3.jpeg"
                    alt="Bolongo"
                  />
                  <img src="./assets/img/qr.jpeg" alt="QR CID Kapital" />
                </div>
              </div>
            </div>

            <Footer
              homeBtn={true}
              pageCount={1}
              totalPages={2}
              zIndexStyle={1}
            />
          </PagesLayout>
        </>
      );
  }

  return <>{content}</>;
};

export default Mas;
