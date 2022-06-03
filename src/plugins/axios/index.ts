import axios from "axios";
import router from "@/router"
import Cookies from 'js-cookie'

const api  = axios.create({
    baseURL : "http://dev1.itpw.ru:8005/",
    // baseURL : "http://127.0.0.1:8000/",
    headers : {
        'Authorization': Cookies.get('token') ? "Bearer " + Cookies.get('token') : '',
    }
})


api.interceptors.response.use(undefined, (error) => {
    if (error.response && error.response.status === 401) {
        router.push({path:'auth'})
    }

});
export default api