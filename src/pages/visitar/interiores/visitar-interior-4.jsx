import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import PagesLayout from "../../../layouts/PagesLayout";
import ScreenSaver from "../../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../../components/PagesHeader/PagesHeader";
import Footer from "../../../components/Footer/Footer";
import "../../../styles/mas.css";

import Visitar2 from "../page2";
import Home from "../../index";

const VisitarInterior4 = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [openLightbox, setOpenLightbox] = useState(Array(4).fill(false));

  const openLightboxAtIndex = (index) => {
    const updatedLightboxState = [...openLightbox];
    updatedLightboxState[index] = true;
    setOpenLightbox(updatedLightboxState);
  };

  const closeLightboxAtIndex = (index) => {
    const updatedLightboxState = [...openLightbox];
    updatedLightboxState[index] = false;
    setOpenLightbox(updatedLightboxState);
  };

  let content;
  switch (currentPage) {
    case "visitar-2":
      content = <Visitar2 />;
      break;
    case "home":
      content = <Home />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-5.jpg">
            <ScreenSaver />
            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={() => setCurrentPage("visitar-2")}
              titlePage="Por visitar"
            />
            <div className="main__content">
              <div className="page mas">
                <h2>SAYULITA FIT</h2>

                <div>
                  {[1, 2, 3, 4].map((index) => (
                    <img
                      key={index}
                      src={`./assets/img/pages/visitar/interiores/visitar-interior-4-${index}.jpeg`}
                      alt="SAYULITA FIT"
                      onClick={() => openLightboxAtIndex(index - 1)}
                    />
                  ))}
                </div>
                {openLightbox.map((isOpen, index) => (
                  <Lightbox
                    key={index}
                    open={isOpen}
                    close={() => closeLightboxAtIndex(index)}
                    slides={[
                      ...Array.from({ length: 4 }, (_, i) => ({
                        src: `./assets/img/pages/visitar/interiores/visitar-interior-4-${((index + i) % 4) + 1
                          }.jpeg`,
                      })),
                    ]}
                  />
                ))}
              </div>
            </div>

            <Footer
              pageCount={1}
              totalPages={1}
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

export default VisitarInterior4;