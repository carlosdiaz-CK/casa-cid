import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/mas.css";

import Mas from "./index";
import Home from "../index";

const Mas2 = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [openLightbox, setOpenLightbox] = useState(Array(4).fill(false));
  const [openWA, setOpenWA] = useState(false);

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
    case "mas":
      content = <Mas />;
      break;
    case "home":
      content = <Home />;
      break;
    default:
      content = (
        <>
          <PagesLayout backgroundImage="./assets/img/photos/casa-cid-7.jpg">
            <ScreenSaver />

            <PagesHeader
              backButtonHref="#!"
              handleNavigationBack={() => setCurrentPage("mas")}
              titlePage="Más lugares Travel"
            />

            <div className="main__content">
              <div className="page mas">
                <h2>NIMA BAY, MARINA VALLARTA, JALISCO</h2>

                <div>
                  {[1, 2, 3, 4].map((index) => (
                    <img
                      key={index}
                      src={`./assets/img/pages/mas/nima${index}.jpeg`}
                      alt="Nima Bay"
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
                        src: `./assets/img/pages/mas/nima${
                          ((index + i) % 4) + 1
                        }.jpeg`,
                      })),
                    ]}
                  />
                ))}

                <img
                  src="./assets/img/wa.png"
                  alt="WhatsApp"
                  className="WA"
                  onClick={() => setOpenWA(true)}
                />

                <Lightbox
                  open={openWA}
                  close={() => setOpenWA(false)}
                  slides={[{ src: "./assets/img/qr.jpg" }]}
                />
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

export default Mas2;
