import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

const ScreenSaver = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isHidden, setIsHidden] = useState(true); // Estado para controlar la visibilidad del protector de pantalla

  const backgroundOrder = [
    "/assets/img/photos/casa-cid-2.jpg",
    "/assets/img/photos/casa-cid-3.jpg",
    "/assets/img/photos/casa-cid-4.jpg",
    "/assets/img/photos/casa-cid-5.jpg",
    "/assets/img/photos/casa-cid-6.jpg",
    "/assets/img/photos/casa-cid-7.jpg",
    "/assets/img/photos/casa-cid-8.jpg",
    "/assets/img/photos/casa-cid-9.jpg",
    "/assets/img/photos/casa-cid-10.jpg",
    "/assets/img/photos/casa-cid-11.jpg",
    "/assets/img/photos/casa-cid-12.jpg",
    "/assets/img/photos/casa-cid-13.jpg",
    "/assets/img/photos/casa-cid-14.jpg",
    "/assets/img/photos/casa-cid-15.jpg",
    "/assets/img/photos/casa-cid-16.jpg",
    "/assets/img/photos/casa-cid-17.jpg",
    "/assets/img/photos/casa-cid-18.jpg",
    "/assets/img/photos/casa-cid-19.jpg",
    "/assets/img/photos/casa-cid-20.jpg",
    "/assets/img/photos/casa-cid-21.jpg",
    "/assets/img/photos/casa-cid-22.jpg",
    "/assets/img/photos/casa-cid-23.jpg",
    "/assets/img/photos/casa-cid-24.jpg",
    "/assets/img/photos/casa-cid-25.jpg",
    "/assets/img/photos/casa-cid-26.jpg",
    "/assets/img/photos/casa-cid-27.jpg",
    "/assets/img/photos/casa-cid-28.jpg",
    "/assets/img/photos/casa-cid-29.jpg",
    "/assets/img/photos/casa-cid-30.jpg",
    "/assets/img/photos/casa-cid-31.jpg",
    "/assets/img/photos/casa-cid-32.jpg",
    "/assets/img/photos/casa-cid-33.jpg",
    "/assets/img/photos/casa-cid-34.jpg",
    "/assets/img/photos/casa-cid-35.jpg",
    "/assets/img/photos/casa-cid-36.jpg",
    "/assets/img/photos/casa-cid-37.jpg",
    "/assets/img/photos/casa-cid-38.jpg",
    "/assets/img/photos/casa-cid-39.jpg",
    "/assets/img/photos/casa-cid-40.jpg",
    "/assets/img/photos/casa-cid-41.jpg",
    "/assets/img/photos/casa-cid-42.jpg",
    "/assets/img/photos/casa-cid-43.jpg",
    "/assets/img/photos/casa-cid-44.jpg",
    "/assets/img/photos/casa-cid-45.jpg",
    "/assets/img/photos/casa-cid-46.jpg",
    "/assets/img/photos/casa-cid-47.jpg",
    "/assets/img/photos/casa-cid-48.jpg",
    "/assets/img/photos/casa-cid-49.jpg",
    "/assets/img/photos/casa-cid-50.jpg",
    "/assets/img/photos/casa-cid-1.jpg",
  ];

  useEffect(() => {
    const interval = 30000;
    const id = setInterval(changeBackground, interval);
    setIntervalId(id);

    // Configurar el temporizador para mostrar el fondo de pantalla después de 60 segundos de inactividad
    let timeoutId;
    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsHidden(false); // Mostrar el fondo de pantalla después de 60 segundos de inactividad
      }, 60000);
    };

    // Agregar listeners para eventos de interacción del usuario
    const handleInteraction = () => {
      setIsHidden(true); // Ocultar el fondo de pantalla al detectar interacción del usuario
      resetTimeout(); // Reiniciar el temporizador
    };

    document.addEventListener("mousemove", handleInteraction);
    document.addEventListener("click", handleInteraction);

    resetTimeout(); // Iniciar el temporizador

    // Cuando el componente se desmonta, limpiar los intervalos y listeners
    return () => {
      clearInterval(id);
      clearTimeout(timeoutId);
      document.removeEventListener("mousemove", handleInteraction);
      document.removeEventListener("click", handleInteraction);
    };
  }, []);

  const changeBackground = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundOrder.length);
  };

  return (
    <div style={{ display: isHidden ? "none" : "block" }} className="screen-saver-video">
      <video autoPlay muted loop id="screen-saver-video">
        <source src="./assets/video/screen-saver-casa-cid.mp4" type="video/mp4" />
      </video>

      <div className="screen-saver__logo">
          <img
            src="./assets/img/logo-ck-blanco.png"
            alt="Logo"
            style={{ width: "25vw" }}
          />
          <h1
            style={{
              marginTop: "24px",
              color: "#75a1b6",
              fontSize: "3rem",
              textAlign: "center",
              opacity: "0.75",
            }}
          >
            ¡BIENVENIDO!
          </h1>
          <p
            style={{
              color: "#ffffff",
              fontSize: "1.6rem",
              textAlign: "center",
              opacity: "0.75",
            }}
          >
            Toca la pantalla para comenzar
          </p>
        </div>
      {/* <div
        className="screen-saver"
        style={{ backgroundImage: `url('${backgroundOrder[currentIndex]}')` }}
      >
        <div className="screen-saver__logo">
          <img
            src="/assets/img/logo-ck-blanco.png"
            alt="Logo"
            style={{ width: "25vw" }}
          />
          <h1
            style={{
              marginTop: "24px",
              color: "#75a1b6",
              fontSize: "3rem",
              textAlign: "center",
              opacity: "0.75",
            }}
          >
            ¡BIENVENIDO!
          </h1>
          <p
            style={{
              color: "#ffffff",
              fontSize: "1.6rem",
              textAlign: "center",
              opacity: "0.75",
            }}
          >
            Toca la pantalla para comenzar
          </p>
        </div>

        <Footer homeBtn={true} pageCount={0} totalPages={0} />
      </div>

      <div
        className="screen-saver"
        style={{
          backgroundImage: `url('${
            backgroundOrder[(currentIndex + 1) % backgroundOrder.length]
          }')`,
        }}
      >
        <div className="screen-saver__logo">
          <img
            src="/assets/img/logo-ck-blanco.png"
            alt="Logo"
            style={{ width: "25vw" }}
          />
          <h1
            style={{
              marginTop: "24px",
              color: "#75a1b6",
              fontSize: "3rem",
              textAlign: "center",
              opacity: "0.75",
            }}
          >
            ¡BIENVENIDO!
          </h1>
          <p
            style={{
              color: "#ffffff",
              fontSize: "1.6rem",
              textAlign: "center",
              opacity: "0.75",
            }}
          >
            Toca la pantalla para comenzar
          </p>
        </div>

        <Footer homeBtn={true} pageCount={false} totalPages={false} />
      </div> */}
      <Footer zIndexStyle={4} />
    </div>
  );
};

export default ScreenSaver;
