import React from "react";
import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/telefonos.css";

const index = () => {
  return (
    <>
      <PagesLayout backgroundImage="/assets/img/photos/casa-cid-5.jpg">
        <ScreenSaver />

        <PagesHeader backButtonHref="/" titlePage="Teléfonos de emergencia" />

        <div className="main__content">
          {/* <p><strong>Lobby: </strong>33 3333 3333</p> */}
        </div>

        <Footer homeBtn={true} pageCount={1} totalPages={1} />
      </PagesLayout>
    </>
  );
};

export default index;
