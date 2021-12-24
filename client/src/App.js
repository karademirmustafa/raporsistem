import React from "react";
import "./app.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Kunye from "./components/kunye/Kunye";
import KunyeEkle from "./components/kunyeEkle/KunyeEkle";
import KunyeDetay from "./pages/kunyeDetay/KunyeDetay";
function App() {
  return (
    <Routes>
      navbar
      <Route index element={<Home />} />
      <Route path="kunye" element={<Kunye />} />
      <Route path="kunyeEkle" element={<KunyeEkle />} />
      <Route path="kunye/:kunyeId" element={<KunyeDetay />} />
      
    </Routes>
  );
}

export default App;
