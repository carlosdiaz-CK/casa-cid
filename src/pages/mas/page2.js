import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/mas.css";

import Mas from "./index";

const Mas2 = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigationBack = (e) => {
    e.preventDefault();
    setCurrentPage("mas");
  };

  let content;
  switch (currentPage) {
    case "mas":
      content = <Mas />;
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
            />

            <div className="main__content">
              <div className="page mas">
                <h2>NIMA BAY, MARINA VALLARTA, JALISCO</h2>

                <div>
                  <img
                    src="./assets/img/pages/mas/nima1.jpeg"
                    alt="Nima Bay"
                  />
                  <img
                    src="./assets/img/pages/mas/nima2.jpeg"
                    alt="Nima Bay"
                  />
                  <img
                    src="./assets/img/pages/mas/nima3.jpeg"
                    alt="Nima Bay"
                  />
                  <img
                    src="./assets/img/pages/mas/nima4.jpeg"
                    alt="Nima Bay"
                  />
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

export default Mas2;
