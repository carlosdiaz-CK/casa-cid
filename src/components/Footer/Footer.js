import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = ({ homeBtn, pageCount, totalPages, zIndexStyle }) => {
  return (
    <footer className="footer" style={{ zIndex: zIndexStyle }}>
      <div className="footer_pageCount">
        {pageCount && totalPages && (
          <p>
            {pageCount} / {totalPages}
          </p>
        )}
      </div>

      <div className="footer__languages">
        <a href="/">
          <img
            src="/assets/img/mexico.png"
            alt="Bandera de México para el idioma español"
            id="lang-es"
          />
        </a>
        <a href="/en">
          <img
            src="/assets/img/usa.png"
            alt="Bandera de Estados Unidos para el idioma inglés"
            id="lang-en"
          />
        </a>
      </div>

      <div className="footer__return">
        {homeBtn && (
          <Link to="/" className="footer__returnBtn">
            <img
              src="/assets/img/home.png"
              alt="Botón de regreso al inicio"
            />
          </Link>
        )}
      </div>
    </footer>
  );
};

export default Footer;
