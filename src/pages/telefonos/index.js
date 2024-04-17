import React, { useState } from "react";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/telefonos.css";

import Home from "../index";

const Telefonos = () => {
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
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-5.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="!#"
              handleNavigationBack={handleNavigationBack}
              titlePage="Teléfonos de emergencia"
            />

            <div className="main__content">
              {/* <p><strong>Lobby: </strong>33 3333 3333</p> */}
            </div>

            <Footer
              pageCount={1}
              totalPages={1}
              homeBtn={true}
              handleNavigationHome={handleNavigationBack}
              zIndexStyle={1}
            />
          </PagesLayout>
        </>
      );
  }

  return <>{content}</>;
};

export default Telefonos;
