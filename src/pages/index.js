import React, { useState } from "react";

import ScreenSaver from "../components/ScreenSaver/ScreenSaver";
import Footer from "../components/Footer/Footer";
import "../styles/index.css";

import Carrito from "./carrito";
import Actividades from "./actividades";
import ComidaBebida from "./comida-bebida";
import Visitar from "./visitar";
import Despensa from "./despensa";
import Telefonos from "./telefonos";
import Mas from "./mas";
import Reglamento from "./reglamento";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  let content;
  switch (currentPage) {
    case "carrito":
      content = <Carrito />;
      break;
    case "actividades":
      content = <Actividades />;
      break;
    case "comida-bebida":
      content = <ComidaBebida />;
      break;
    case "visitar":
      content = <Visitar />;
      break;
    case "despensa":
      content = <Despensa />;
      break;
    case "telefonos":
      content = <Telefonos />;
      break;
    case "mas":
      content = <Mas />;
      break;
    case "reglamento":
      content = <Reglamento />;
      break;
    default:
      content = (
        <main className="main">
          <video autoPlay muted loop className="main__video">
            {/* <source
              src="./assets/video/screen-saver-casa-cid.mp4"
              type="video/mp4"
            /> */}
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
              type="video/mp4"
            />
          </video>

          <div className="menu">
            <div className="menu__logo">
              <img
                src="./assets/img/logo-ck-blanco.png"
                alt="Logo CID Kapital"
              />
            </div>
            <nav className="menu__nav">
              <ul>
                <li>
                  <a href="#!" onClick={() => handleNavigation("carrito")}>
                    Carrito de golf
                  </a>
                </li>
                <li>
                  <a href="#!" onClick={() => handleNavigation("actividades")}>
                    Actividades
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    onClick={() => handleNavigation("comida-bebida")}
                  >
                    Comida y bebida
                  </a>
                </li>
                <li>
                  <a href="#!" onClick={() => handleNavigation("visitar")}>
                    Visitar
                  </a>
                </li>
                <li>
                  <a href="#!" onClick={() => handleNavigation("despensa")}>
                    Despensa
                  </a>
                </li>
                <li>
                  <a href="#!" onClick={() => handleNavigation("telefonos")}>
                    Teléfonos
                  </a>
                </li>
                <li>
                  <a href="#!" onClick={() => handleNavigation("mas")}>
                    Más
                  </a>
                </li>
                <li>
                  <a href="#!" onClick={() => handleNavigation("reglamento")}>
                    Reglamento
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </main>
      );
  }

  return (
    <>
      <ScreenSaver />
      {content}
      <Footer />
    </>
  );
}
