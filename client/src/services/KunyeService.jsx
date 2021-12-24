import axios from "axios";

export default class KunyeService{

getAllKunye()  {

    return axios.get("/kunye");
}

createKunye(kunye) {
    return axios.post("/kunye",kunye);
}

}


