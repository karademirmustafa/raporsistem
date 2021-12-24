import React from "react";
import Kunye from "../../components/kunye/Kunye";
import "./home.css";

import { Link } from "react-router-dom";

function Home() {
  

  // const handleDelete = async () => {
  //   try {
  //     const res = await axios.delete("/:kunyeId")
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
