import React, { useEffect } from "react";
import TeskilatService from "../services/TeskilatService";
import {useParams} from "react-router-dom"

function Teskilat() {
  let teskilatService = new TeskilatService();

  const {teskilatId} = useParams();
  
  useEffect(() => {
    getAllTeskilat();
    getOneTeskilat();
  },[]);

  const getAllTeskilat = () => { teskilatService.getAllTeskilat().then((res) => console.log(res.data));}
  const getOneTeskilat = () => { teskilatService.getOneTeskilat(teskilatId).then((res) => console.log(res.data))}

  return <div></div>;
}

export default Teskilat;
