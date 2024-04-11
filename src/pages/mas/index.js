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
          backButtonHref="/"
          titlePage="Más opciones"
          nextButtonHref="/mas/page2"
        />

        <div className="main__content">
          <div className="page mas">
            <h2>BOLONGO, PUNTA DE MITA, NAYARIT</h2>

            <div>
              <img src="/assets/img/pages/mas/bolongo-1.jpeg" alt="Bolongo" />
              <img src="/assets/img/pages/mas/bolongo-2.jpeg" alt="Bolongo" />
              <img src="/assets/img/pages/mas/bolongo-3.jpeg" alt="Bolongo" />
              <img src="/assets/img/qr.jpeg" alt="QR CID Kapital" />
            </div>
          </div>
        </div>

        <Footer homeBtn={true} pageCount={1} totalPages={2} />
      </PagesLayout>
    </>
  );
};

export default index;
