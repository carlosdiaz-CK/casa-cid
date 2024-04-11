import React from "react";
import "./PagesHeader.css";
import { Link } from "react-router-dom";

const PagesHeader = ({ backButtonHref, titlePage, nextButtonHref }) => {
  return (
    <>
      <div className="PagesHeader">
        {backButtonHref && (
          <Link to={backButtonHref}>
            <img src="/assets/img/atras.png" alt="Atrás" className="atras" />
          </Link>
        )}

        <h1>{titlePage}</h1>

        {nextButtonHref && (
          <Link to={nextButtonHref}>
            <img src="/assets/img/siguiente.png" alt="Siguiente" className="siguiente" />
          </Link>
        )}
      </div>
    </>
  );
};

export default PagesHeader;