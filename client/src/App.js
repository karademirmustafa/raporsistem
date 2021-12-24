import React from "react";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Kunye from "./components/kunye/Kunye";
import KunyeEkle from "./components/kunyeEkle/KunyeEkle";

function App() {
  //Tüm veriyi çağırma

  //ekleme

  // const handleUpdateSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.put("/kunye/:kunyeId")
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <Router>
      navbar
      <Routes>
  
     <Route index  element={<Home/>}/>
     <Route path="kunye" element={<Kunye/>}/>
     <Route path="kunyeEkle" element={<KunyeEkle/>}/>
    
      
      </Routes>
    </Router>
  );
}

export default App;
