import ScreenSaver from "../components/ScreenSaver/ScreenSaver";
import Footer from "../components/Footer/Footer";
import "../styles/index.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <ScreenSaver />

      <main className="main">
        <video autoPlay muted loop className="main__video">
          <source src="/assets/video/screen-saver-casa-cid.mp4" type="video/mp4" />
        </video>

        <div className="menu">
          <div className="menu__logo">
            <img src="/assets/img/logo-ck-blanco.png" alt="Logo CID Kapital" />
          </div>
          <nav className="menu__nav">
            <ul>
              <li>
                <Link to="/carrito">Carrito de golf</Link>
              </li>
              <li>
                <Link to="/actividades">Actividades al aire libre</Link>
              </li>
              <li>
                <Link to="/comida-bebida">Comida y bebida</Link>
              </li>
              <li>
                <Link to="/visitar">¿Qué visitar?</Link>
              </li>
              <li>
                <Link to="/despensa">Despensa</Link>
              </li>
              <li>
                <Link to="/telefonos">Teléfonos de emergencia</Link>
              </li>
              <li>
                <Link to="/mas">Más opciones</Link>
              </li>
              <li>
                <Link to="/reglamento">Reglamento</Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>

      <Footer />
    </>
  );
}
