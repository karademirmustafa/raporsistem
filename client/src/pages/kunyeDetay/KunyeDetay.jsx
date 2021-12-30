import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import KunyeService from "../../services/KunyeService";
function KunyeDetay() {
  let { kunyeId } = useParams();
  const [kunye, setKunye] = useState({});
  let kunyeService = new KunyeService();
  const navigate = useNavigate();

  
  useEffect(() => {
    kunyeService
      .getByKunyeId(kunyeId)
      .then((result) => setKunye(result.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="container">
      <div className="card-body">
        <form >
          <div className="form-group mb-2">
            <label className="form-label ">İl Kodu</label>
            <input
              placeholder="İl Kodu Giriniz.."
              value={kunye.ilKodu}
              className="form-control"
            />
            <label className="form-label">Şehir</label>
            <input
              placeholder="Şehir Giriniz.."
              value={kunye.sehirName}
              className="form-control"
            />
            <label className="form-label">Fakülte Sayısı</label>
            <input
              placeholder="Fakülte Sayısı Giriniz.."
             
              className="form-control"
            />
            <label className="form-label">Temsilci Sayisi</label>
            <input
              placeholder="Temsilci sayısı Giriniz.."
             
              className="form-control"
            />
            <label className="form-label">Yüksek Okul Sayısı</label>
            <input
              placeholder="Yüksek Okul Sayısı Giriniz.."
              value={kunye.yuksekokulSayisi}
              className="form-control"
            />
            <label className="form-label">
              Meslek Yüksekokul Sayısı Giriniz
            </label>
            <input
              placeholder="Meslek Yüksekokulu Sayısı Giriniz.."
              value={kunye.meslekYuksekOkulSayisi}
              className="form-control"
            />
            <label className="form-label">Bölüm Sayısı</label>
            <input
              placeholder="Bölüm Sayısı Giriniz.."
              value={kunye.bolumSayisi}
              className="form-control"
            />
            <label className="form-label">Erkek Öğrenci</label>
            <input
              placeholder="Erkek Öğrenci Sayısı Giriniz.."
              value={kunye.erkekOgrSayisi}
              className="form-control"
            />
            <label className="form-label">Toplam Öğrenci</label>
            <input
              placeholder="Toplam Öğrenci Sayısı Giriniz.."
              value={kunye.toplamOgrSayisi}
              className="form-control"
            />

            <button className="btn btn-primary mt-3" >Düzenle</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default KunyeDetay;
