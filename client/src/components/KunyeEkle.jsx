import React, { useState } from "react";
import KunyeService from "../services/KunyeService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
// import {useSelector } from "react-redux";
function KunyeEkle() {
  const [ilKodu, setIlKodu] = useState();
  const [sehirName, setSehirName] = useState();
  const [temsilciSayisi, setTemsilciSayisi] = useState();
  const [fakulteSayisi, setFakulteSayisi] = useState();
  const [yuksekokulSayisi, setYuksekokulSayisi] = useState();
  const [meslekYuksekOkulSayisi, setMeslekYuksekOkulSayisi] = useState();
  const [bolumSayisi, setBolumSayisi] = useState();
  const [erkekOgrSayisi, setErkekOgrSayisi] = useState();
  const [toplamOgrSayisi, setToplamOgrSayisi] = useState();
  const navigate = useNavigate();

  const { kunyeId } = useParams();

  let kunyeService = new KunyeService();
  const newKunye = {
    ilKodu,
    sehirName,
    temsilciSayisi,
    fakulteSayisi,
    yuksekokulSayisi,
    meslekYuksekOkulSayisi,
    bolumSayisi,
    erkekOgrSayisi,
    toplamOgrSayisi,
  };
  const handleSubmitandUpdate = (e) => {
    e.preventDefault();

    if (kunyeId) {
      kunyeService
        .updateKunye(kunyeId, newKunye)
        .then((response) => {
          navigate("/kunye?sort=ilKodu");
        })
        .catch((err) => console.log(err));
    } else {
      kunyeService
        .createKunye(newKunye)
        .then((res) => {
          alert(`${res.data.sehirName} şehri oluşturuldu`);
          navigate("/kunye?sort=ilKodu");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    kunyeService
      .getByKunyeId(kunyeId)
      .then((response) => {
        setIlKodu(response.data.ilKodu);
        setSehirName(response.data.sehirName);
        setTemsilciSayisi(response.data.temsilciSayisi);
        setFakulteSayisi(response.data.fakulteSayisi);
        setYuksekokulSayisi(response.data.yuksekokulSayisi);
        setMeslekYuksekOkulSayisi(response.data.meslekYuksekOkulSayisi);
        setBolumSayisi(response.data.bolumSayisi);
        setErkekOgrSayisi(response.data.erkekOgrSayisi);
        setToplamOgrSayisi(response.data.toplamOgrSayisi);
      })
      .catch((err) => console.log(err));
  }, []);

  const title = () => {
    if (kunyeId) {
      return <h2 className="text-center">Künye Güncelle</h2>;
    } else {
      return <h2 className="text-center">Künye Ekle</h2>;
    }
  };

  // const {kunyeItems} = useSelector(state=> state.kunye);
  return (
    <div className="container">
      <div className="card-body">
        {title()}
        <form>
          <div className="form-group mb-2">
            <label className="form-label ">İl Kodu</label>
            <input
              placeholder="İl Kodu Giriniz.."
              value={ilKodu}
              onChange={(e) => setIlKodu(e.target.value)}
              className="form-control"
            />
            <label className="form-label">Şehir</label>
            <input
              placeholder="Şehir Giriniz.."
              value={sehirName}
              onChange={(e) => setSehirName(e.target.value)}
              className="form-control"
            />
            <label className="form-label">Fakülte Sayısı</label>
            <input
              placeholder="Fakülte Sayısı Giriniz.."
              value={fakulteSayisi}
              onChange={(e) => setFakulteSayisi(e.target.value)}
              className="form-control"
            />
            <label className="form-label">Temsilci Sayisi</label>
            <input
              placeholder="Temsilci sayısı Giriniz.."
              value={temsilciSayisi}
              onChange={(e) => setTemsilciSayisi(e.target.value)}
              className="form-control"
            />
            <label className="form-label">Yüksek Okul Sayısı</label>
            <input
              placeholder="Yüksek Okul Sayısı Giriniz.."
              value={yuksekokulSayisi}
              onChange={(e) => setYuksekokulSayisi(e.target.value)}
              className="form-control"
            />
            <label className="form-label">
              Meslek Yüksekokul Sayısı Giriniz
            </label>
            <input
              placeholder="Meslek Yüksekokulu Sayısı Giriniz.."
              value={meslekYuksekOkulSayisi}
              onChange={(e) => setMeslekYuksekOkulSayisi(e.target.value)}
              className="form-control"
            />
            <label className="form-label">Bölüm Sayısı</label>
            <input
              placeholder="Bölüm Sayısı Giriniz.."
              value={bolumSayisi}
              onChange={(e) => setBolumSayisi(e.target.value)}
              className="form-control"
            />
            <label className="form-label">Erkek Öğrenci</label>
            <input
              placeholder="Erkek Öğrenci Sayısı Giriniz.."
              value={erkekOgrSayisi}
              onChange={(e) => setErkekOgrSayisi(e.target.value)}
              className="form-control"
            />
            <label className="form-label">Toplam Öğrenci</label>
            <input
              placeholder="Toplam Öğrenci Sayısı Giriniz.."
              value={toplamOgrSayisi}
              onChange={(e) => setToplamOgrSayisi(e.target.value)}
              className="form-control"
            />

            <button
              className="btn btn-primary mt-3"
              onClick={(e) => handleSubmitandUpdate(e)}
            >
              {title()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default KunyeEkle;

//   try {
//      await axios.post("/kunye", newKunye).then(()=> {alert("Kaydedildi.")}).catch((err) => {
//       alert(err.response.data.error);
//     });

//   } catch (err) {
//     console.log(err);
//   }
