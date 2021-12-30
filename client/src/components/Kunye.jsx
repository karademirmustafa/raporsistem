import React, { useEffect, useState } from "react";
import KunyeService from "../services/KunyeService";
import { Link, useSearchParams } from "react-router-dom";
// import {useDispatch} from "react-redux";
// import KunyeEkle from "./KunyeEkle"
// import {addToKunye} from "../../store/actions/kunyeActions"
function Kunye() {
  const [kunyeler, setKunyeler] = useState([]);
  const [searchParams] = useSearchParams();

  // const dispatch = useDispatch();

  // const handleAddToKunye = (kunye) => {
  //   dispatch(addToKunye(kunye));
  //   //react toasify bildirim vs. için
  // }
  let kunyeService = new KunyeService();
  useEffect(() => {
    getAllKunye();
  }, []);

  const getAllKunye = () => {
    const params = {};
    for (const [key, value] of searchParams.entries()) params[key] = value;
    kunyeService
      .getAllKunye(params)
      .then((result) => setKunyeler(result.data.content));
  };

  const deleteKunye = (kunyeId,kunyeSehir) => {
    kunyeService
      .deleteKunye(kunyeId)
      .then((res) => {
        alert(`${kunyeSehir} şehrinin künyesi silinmiştir.`);
        getAllKunye();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <h2 className="text-center"> Künye Listesi</h2>
      <Link to="/kunyeekle" className="btn btn-primary mb-5">
        Künye Ekle
      </Link>
      <div className="kunye">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
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
              <th>Aksiyonlar</th>
            </tr>
          </thead>
          <tbody>
            {kunyeler.map((kunye) => (
              <tr key={kunye.id} className="kunyeList">
                <td className="kunyeListItem">
                  <Link to={`/kunye/${kunye.id}`} className="link">
                    {kunye.id}
                  </Link>
                </td>
                <td className="kunyeListItem">
                  <Link to={`/kunye?ilKodu=${kunye.ilKodu}`}>
                    {kunye.ilKodu}
                  </Link>
                </td>
                <td className="kunyeListItem">
                  <Link to={`/kunye?sehirName=${kunye.sehirName}`}>
                    {kunye.sehirName}
                  </Link>
                </td>
                <td className="kunyeListItem">{kunye.temsilciSayisi}</td>
                <td className="kunyeListItem">{kunye.fakulteSayisi}</td>
                <td className="kunyeListItem">{kunye.yuksekokulSayisi}</td>
                <td className="kunyeListItem">
                  {kunye.meslekYuksekOkulSayisi}
                </td>
                <td className="kunyeListItem">{kunye.bolumSayisi}</td>
                <td className="kunyeListItem">{kunye.erkekOgrSayisi}</td>
                <td className="kunyeListItem">{kunye.toplamOgrSayisi}</td>
                <td>
                  <Link className="btn btn-info mb-3" to={`/kunye/${kunye.id}`}>
                    Düzenle
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteKunye(kunye.id,kunye.sehirName)}
                  >
                    {" "}
                    Delete
                  </button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Kunye;
