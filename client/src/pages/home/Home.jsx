import React from "react";
import Kunye from "../../components/kunye/Kunye";


import { Link } from "react-router-dom";


function Home() {
  

  return (
    <div className="home">
      <Link to="/kunyeEkle"> Künye Ekle ADD </Link>
      <br></br>
      <Link to="/kunye"> Kunye bak</Link>

      
      <Kunye/>

    
    </div>
  );
}

export default Home;
