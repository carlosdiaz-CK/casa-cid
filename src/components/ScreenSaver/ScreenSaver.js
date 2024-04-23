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
    "/assets/img/photos/casa-cid-23.jpg",
    "/assets/img/photos/casa-cid-31.jpg",
    "/assets/img/photos/casa-cid-51.jpg",
    "/assets/img/photos/casa-cid-52.jpg",
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
        <source src="./assets/video/screen-saver-casa-cid.webm" type="video/mp4" />
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
      <Footer zIndexStyle={4} />
    </div>
  );
};

export default ScreenSaver;
