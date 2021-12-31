import axios from "axios";

export default class TeskilatService{

    getAllTeskilat() { 
       return  axios.get("/teskilat");
    }

    getOneTeskilat(teskilatId) {

        return axios.get(`/teskilat/${teskilatId}`);
    }

}



