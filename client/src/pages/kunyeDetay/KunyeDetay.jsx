import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import KunyeService from "../../services/KunyeService";
function KunyeDetay() {
  let { kunyeId } = useParams();
  const [kunye, setKunye] = useState({});


  useEffect(() => {
    let kunyeService = new KunyeService();
    kunyeService.getByKunyeId(kunyeId).then((result) => setKunye(result.data)).catch(err=> console.log(err));
}, []);

  return <div>id şehir is : {kunye.sehirName}</div>;
}

export default KunyeDetay;
