import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/compartido/Layout";
import Lista from "./components/lista/Lista";
import Detalles from "./components/nueva/Detalles";
import NoEncontrado from "./components/compartido/NoEncontrado";
import Modal from "./components/compartido/Modal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Lista/>} />
      <Route path="/lista" element={<Lista />}>
      <Route path="/lista/:id" element={
      <Modal>
        <Detalles />
      </Modal>} />
      </Route>
      <Route path="/nueva" element={<Detalles />} />
      <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  );
}

export default App;
