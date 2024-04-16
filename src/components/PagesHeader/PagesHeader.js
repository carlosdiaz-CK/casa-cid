import React, { useState } from "react";
import "./PagesHeader.css";

const PagesHeader = ({ backButtonHref, handleNavigationBack, titlePage, nextButtonHref, handleNavigationNext }) => {
  return (
    <>
      <div className="PagesHeader">
        {backButtonHref && (
          <a href={backButtonHref} onClick={handleNavigationBack}>
            <img src="./assets/img/atras.png" alt="Atrás" className="atras" />
          </a>
        )}

        <h1>{titlePage}</h1>

        {nextButtonHref && (
          <a href={nextButtonHref} onClick={handleNavigationNext}>
            <img src="./assets/img/siguiente.png" alt="Siguiente" className="siguiente" />
          </a>
        )}
      </div>
    </>
  );
};

export default PagesHeader;