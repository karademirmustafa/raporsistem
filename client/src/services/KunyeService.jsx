import axios from "axios";

export default class KunyeService{

getAllKunye()  {

    return axios.get("/kunye");
}

createKunye(kunye) {
    return axios.post("/kunye",kunye);
}

getByKunyeId(kunyeId){
    return axios.get("/kunye/"+kunyeId);
}
getBySehirName(sehirName) {
    return axios.get("/kunye?sehirName="+sehirName);
}
}


