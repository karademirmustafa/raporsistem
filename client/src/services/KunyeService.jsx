import axios from "axios";

export default class KunyeService{

getAllKunye(params)  {

    // if(page && sort){
    //     return axios.get(`/kunye`,{params:{page,sort}});
    // }else if (page) {
    //     return axios.get(`/kunye?page=${page}`)
    // }else if(sort)
    // return axios.get(`/kunye?sort=${sort}`)
    // else
    // return axios.get(`/kunye?sort=ilKodu`)
  return axios.get(`/kunye`,{params})
  
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

updateKunye(kunyeId,kunye){
    return axios.put(`/kunye/${kunyeId}`,kunye);

}

deleteKunye(kunyeId){
    return axios.delete(`/kunye/${kunyeId}`);
}

}


