import React, { useEffect, useState } from "react";
import KunyeService from "../../services/KunyeService";
import { Link } from "react-router-dom";

function Kunye() {
  const [kunyeler, setKunyeler] = useState([]);

  useEffect(() => {
    let kunyeService = new KunyeService();
    kunyeService.getAllKunye().then((result) => setKunyeler(result.data));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center"> Künye Listesi</h2>
      <Link to="/kunyeekle" className="btn btn-primary mb-5">
        Künye Ekle
      </Link>
      <div className="kunye">
        <table className="table table-bordered table-striped">
          <thead>
            <th>ID</th>
            <th>İl Kodu</th>
            <th>Şehir Name</th>
            <th>Temsilci Sayısı</th>
            <th>Fakülte Sayısı</th>
            <th>Yüksekokul Sayısı</th>
            <th>Meslek Yüksekokul Sayısı</th>
            <th>Bölüm Sayısı</th>
            <th>Erkek Öğrenci Sayısı</th>
            <th>Toplam Öğrenci Sayısı</th>
          </thead>
          <tbody>
            {kunyeler.map((kunye) => (
              <tr key={kunye.id} className="kunyeList">
               <td className="kunyeListItem"> <Link to={`/kunye/${kunye.id}`} className="link">{kunye.id}</Link></td>
             <td className="kunyeListItem"><Link to={`/kunye?ilKodu=${kunye.ilKodu}`}>{kunye.ilKodu}</Link></td>
              <td className="kunyeListItem"> <Link to={`/kunye?sehirname=${kunye.sehirName}`}>{kunye.sehirName}</Link></td>
                <td className="kunyeListItem">{kunye.temsilciSayisi}</td>
                <td className="kunyeListItem">{kunye.fakulteSayisi}</td>
                <td className="kunyeListItem">{kunye.yuksekokulSayisi}</td>
                <td className="kunyeListItem">
                  {kunye.meslekYuksekOkulSayisi}
                </td>
                <td className="kunyeListItem">{kunye.bolumSayisi}</td>
                <td className="kunyeListItem">{kunye.erkekOgrSayisi}</td>
                <td className="kunyeListItem">{kunye.toplamOgrSayisi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Kunye;
