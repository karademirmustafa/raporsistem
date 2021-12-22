import React, { useEffect, useState } from 'react'
import Kunye from '../../components/kunye/Kunye';
import "./home.css";
import axios from "axios"
import KunyeEkle from '../../components/kunyeEkle/KunyeEkle';
import {Link} from "react-router-dom"
function Home() {
    const [kunye, setKunye] = useState([]);
    
    useEffect(() => {
      const getKunye = async () => {
        try {
          const result = await axios.get("/kunye");
          setKunye(result.data);
        } catch (err) {
          console.error(err);
        }
      };
      getKunye();
    }, []);
  
    return (
       

        <div className="home">
         <Link to="/kunyeEkle"> Künye Ekle ADD  </Link> 
         <br></br>
         <Link to="/kunye" > Kunye bak</Link>
            <Kunye kunye={kunye}/>
        <KunyeEkle kunye={kunye}/>
          
        </div>
        
    )
}

export default Home
