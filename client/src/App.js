import React from "react";
import "./app.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Kunye from "./components/Kunye";
import KunyeEkle from "./components/KunyeEkle";
import Teskilat from "./components/teskilat";

function App() {
  return (
    <Routes>
      navbar
      <Route index element={<Home />} />
      <Route path="kunye" element={<Kunye />} />
      <Route path="kunyeEkle" element={<KunyeEkle />} />
      <Route path="kunye/:kunyeId" element={<KunyeEkle />} />
      <Route path="kunye/kunyeDuzenle/:kunyeId" element={<KunyeEkle />} />
      <Route path="teskilat" element={<Teskilat/>} />
      <Route path="teskilat/:teskilatId" element={<Teskilat/>} />
     
    </Routes>
  );
}

export default App;
