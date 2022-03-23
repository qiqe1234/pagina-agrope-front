import axios from "axios";
const url="http://ApiAgropecuariaJovenesSalto.somee.com";

const getPost=()=>{
    let url2=url;
    url2+=`/api/Post`
    return axios.get(url2)
}

export default{
    getPost:getPost
}