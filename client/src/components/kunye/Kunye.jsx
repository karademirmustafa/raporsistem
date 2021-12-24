import React, { useEffect,useState } from "react";
import "./kunye.css";
import KunyeService from "../../services/KunyeService"
// import { DataGrid } from '@material-ui/data-grid';
function Kunye() {
  const [kunyeler, setKunyeler] = useState([]);
 
  useEffect(() => {

    let kunyeService = new KunyeService();
    kunyeService.getAllKunye().then(result => setKunyeler(result.data));
  }, []);
  

  return (
    <div className="kunyeListesi">
        <div className="kunye">
      {kunyeler.map((kunye) => (
       
          <ul key={kunye.id} className="kunyeList">
            <li className="kunyeListItem">ID : {kunye.id}</li>
            <li className="kunyeListItem">İl Kodu : {kunye.ilKodu}</li>
            <li className="kunyeListItem">Şehir Name : {kunye.sehirName}</li>
            <li className="kunyeListItem">
              Temsilci Sayısı : {kunye.temsilciSayisi}
            </li>
            <li className="kunyeListItem">
              Fakülte Sayısı : {kunye.fakulteSayisi}
            </li>
            <li className="kunyeListItem">
              Yüksekokul Sayısı : {kunye.yuksekokulSayisi}
            </li>
            <li className="kunyeListItem">
              Meslek Yüksekokul Sayısı : {kunye.meslekYuksekOkulSayisi}
            </li>
            <li className="kunyeListItem">
              Bölüm Sayısı : {kunye.bolumSayisi}
            </li>
            <li className="kunyeListItem">
              Erkek Öğrenci Sayısı : {kunye.erkekOgrSayisi}
            </li>
            <li className="kunyeListItem">
              Toplam Öğrenci Sayısı: {kunye.toplamOgrSayisi}
            </li>
          </ul>
        
      ))}
      </div>
    </div>

  );
}

export default Kunye;
