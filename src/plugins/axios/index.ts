import axios from "axios";
import router from "@/router"
import Cookies from 'js-cookie'
import UserModule from "@/store/UserModule";

const api  = axios.create({
    //baseURL : "http://dev1.itpw.ru:8005/",
    baseURL : "http://dev1.itpw.ru:8005/",
    headers : {
        'Authorization': Cookies.get('token') ? "Bearer " + Cookies.get('token') : '',
        //'Authorization': localStorage.getItem('token') ? "Bearer " + localStorage.getItem('token') : '',
    }
})


api.interceptors.response.use(undefined, (error) => {
    if (error.response && error.response.status === 401) {
        router.push({path:'auth'})
    }
    else{
        return error
    }

});
export default api