import React from "react";
import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/mas.css";

const index = () => {
  return (
    <>
      <PagesLayout backgroundImage="/assets/img/photos/casa-cid-7.jpg">
        <ScreenSaver />

        <PagesHeader
          backButtonHref="/mas"
          titlePage="Más opciones"
        />

        <div className="main__content">
          <div className="page mas">
            <h2>CASA CID, IPOMEA SAYULITA, NAYARIT</h2>

            <div>
              <img src="/assets/img/pages/mas/nima-1.jpeg" alt="Nima Bay" />
              <img src="/assets/img/pages/mas/nima-2.jpeg" alt="Nima Bay" />
              <img src="/assets/img/pages/mas/nima-3.jpeg" alt="Nima Bay" />
              <img src="/assets/img/qr.jpeg" alt="QR CID Kapital" />
            </div>
          </div>
        </div>

        <Footer homeBtn={true} pageCount={2} totalPages={2} />
      </PagesLayout>
    </>
  );
};

export default index;
