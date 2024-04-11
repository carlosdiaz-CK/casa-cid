import React from "react";
import PagesLayout from "../../layouts/PagesLayout";
import ScreenSaver from "../../components/ScreenSaver/ScreenSaver";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/reglamento.css";

const page2 = () => {
  return (
    <>
      <PagesLayout backgroundImage="/assets/img/photos/casa-cid-8.jpg">
        <ScreenSaver />

        <PagesHeader
          backButtonHref="/reglamento/page5"
          titlePage="Reglamento"
          nextButtonHref="/reglamento/page7"
        />

        <div className="main__content">
          <li>
            No está permitido utilizar el elevador para mover muebles, línea
            blanca o cosas pesadas, todo tiene que subir por las escaleras de
            emergencia, de esta manera mantendremos el elevador en el mejor
            estado posible.
          </li>

          <p>
            <strong>USO DE ÁREAS COMUNES</strong>
          </p>

          <li>
            Recordar que las áreas comunes pertenecen a todos, por lo que
            cualquier daño a la estructura del condominio que haya sido
            producido durante la mudanza o en cualquier otra situación tanto por
            trabajadores, decoradores, albañiles, cargadores, mascotas,
            familiares o visitantes, será responsabilidad del propietario.
          </li>
          <li>Favor de no dejar basura en los pasillos o en áreas comunes.</li>
          <li>
            Depositar o tirar residuos sólidos, orgánicos e inorgánicos (basura
            en general, colillas, papeles, etc.) en las áreas comunes (albercas,
            bar, pasillos, elevadores, etc.), así como, en los departamentos y
            áreas de uso exclusivo de otros Propietarios.
          </li>

          <li>
            Arrojar residuos líquidos o sustancias inflamables y en general todo
            tipo de objetos que por su tamaño o características puedan afectar
            desagües, tuberías ductos para la basura o provocar obstrucciones en
            los mismos.
          </li>
        </div>

        <Footer homeBtn={true} pageCount={6} totalPages={12} />
      </PagesLayout>
    </>
  );
};

export default page2;
