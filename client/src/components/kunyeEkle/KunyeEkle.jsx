import React, { useState } from "react";
import "./kunyeEkle.css";
import axios from "axios";
function KunyeEkle({ kunye }) {
  const [newKunye, setNewKunye] = useState();
  const [ilKodu, setIlKodu] = useState();
  const [sehirName, setSehirName] = useState("");
  const [temsilciSayisi, setTemsilciSayisi] = useState();
  const [fakulteSayisi, setFakulteSayisi] = useState();
  const [yuksekokulSayisi, setYuksekokulSayisi] = useState();
  const [meslekYuksekOkulSayisi, setMeslekYuksekOkulSayisi] = useState();
  const [bolumSayisi, setBolumSayisi] = useState();
  const [erkekOgrSayisi, setErkekOgrSayisi] = useState();
  const [toplamOgrSayisi, setToplamOgrSayisi] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    try {
      const res = await axios.post("/kunye", newKunye);
      setNewKunye([...kunye, res.data]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="kunyeEkle">
      <div className="kunyeFormContainer">
        <form className="kunyeForm" onSubmit={handleSubmit}>
          <label>İl Kodu</label>
          <input
            placeholder="İl Kodu Giriniz.."
            onChange={(e) => setIlKodu(e.target.value)}
          />
          <label>Şehir</label>
          <input
            placeholder="Şehir Giriniz.."
            onChange={(e) => setSehirName(e.target.value)}
          />
          <label>Fakülte Sayısı</label>
          <input
            placeholder="Fakülte Sayısı Giriniz.."
            onChange={(e) => setFakulteSayisi(e.target.value)}
          />
          <label>Temsilci Sayisi</label>
          <input
            placeholder="Temsilci sayısı Giriniz.."
            onChange={(e) => setTemsilciSayisi(e.target.value)}
          />
          <label>Yüksek Okul Sayısı</label>
          <input
            placeholder="Yüksek Okul Sayısı Giriniz.."
            onChange={(e) => setYuksekokulSayisi(e.target.value)}
          />
          <label>Meslek Yüksekokul Sayısı Giriniz</label>
          <input
            placeholder="Meslek Yüksekokulu Sayısı Giriniz.."
            onChange={(e) => setMeslekYuksekOkulSayisi(e.target.value)}
          />
          <label>Bölüm Sayısı</label>
          <input
            placeholder="Bölüm Sayısı Giriniz.."
            onChange={(e) => setBolumSayisi(e.target.value)}
          />
          <label>Erkek Öğrenci</label>
          <input
            placeholder="Erkek Öğrenci Sayısı Giriniz.."
            onChange={(e) => setErkekOgrSayisi(e.target.value)}
          />
          <label>Toplam Öğrenci</label>
          <input
            placeholder="Toplam Öğrenci Sayısı Giriniz.."
            onChange={(e) => setToplamOgrSayisi(e.target.value)}
          />

          <button class="kunyeFormButton" type="submit">
            Ekle
          </button>
        </form>
      </div>
    </div>
  );
}

export default KunyeEkle;
