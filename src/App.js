import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/index";
import Carrito from "./pages/carrito";
import Actividades from "./pages/actividades";
import Actividades2 from "./pages/actividades/page2";
import ComidaBebida from "./pages/comida-bebida";
import ComidaBebida2 from "./pages/comida-bebida/page2";
import Visitar from "./pages/visitar";
import Visitar2 from "./pages/visitar/page2";
import Visitar3 from "./pages/visitar/page3";
import Despensa from "./pages/despensa";
import Despensa2 from "./pages/despensa/page2";
import Telefonos from "./pages/telefonos";
import Mas from "./pages/mas";
import Mas2 from "./pages/mas/page2";
import Reglamento from "./pages/reglamento";
import Reglamento2 from "./pages/reglamento/page2";
import Reglamento3 from "./pages/reglamento/page3";
import Reglamento4 from "./pages/reglamento/page4";
import Reglamento5 from "./pages/reglamento/page5";
import Reglamento6 from "./pages/reglamento/page6";
import Reglamento7 from "./pages/reglamento/page7";
import Reglamento8 from "./pages/reglamento/page8";
import Reglamento9 from "./pages/reglamento/page9";
import Reglamento10 from "./pages/reglamento/page10";
import Reglamento11 from "./pages/reglamento/page11";
import Reglamento12 from "./pages/reglamento/page12";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/actividades/page2" element={<Actividades2 />} />
          <Route path="/comida-bebida" element={<ComidaBebida />} />
          <Route path="/comida-bebida/page2" element={<ComidaBebida2 />} />
          <Route path="/visitar" element={<Visitar />} />
          <Route path="/visitar/page2" element={<Visitar2 />} />
          <Route path="/visitar/page3" element={<Visitar3 />} />
          <Route path="/despensa" element={<Despensa />} />
          <Route path="/despensa/page2" element={<Despensa2 />} />
          <Route path="/telefonos" element={<Telefonos />} />
          <Route path="/mas" element={<Mas />} />
          <Route path="/mas/page2" element={<Mas2 />} />
          <Route path="/reglamento" element={<Reglamento />} />
          <Route path="/reglamento/page2" element={<Reglamento2 />} />
          <Route path="/reglamento/page3" element={<Reglamento3 />} />
          <Route path="/reglamento/page4" element={<Reglamento4 />} />
          <Route path="/reglamento/page5" element={<Reglamento5 />} />
          <Route path="/reglamento/page6" element={<Reglamento6 />} />
          <Route path="/reglamento/page7" element={<Reglamento7 />} />
          <Route path="/reglamento/page8" element={<Reglamento8 />} />
          <Route path="/reglamento/page9" element={<Reglamento9 />} />
          <Route path="/reglamento/page10" element={<Reglamento10 />} />
          <Route path="/reglamento/page11" element={<Reglamento11 />} />
          <Route path="/reglamento/page12" element={<Reglamento12 />} />
        </Routes>
      </Router>

      <h1>Hola</h1>
    </>
  );
}

export default App;
