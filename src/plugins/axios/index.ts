import axios from "axios";
import router from "@/router"
import Cookies from 'js-cookie'

const api  = axios.create({
    //baseURL : "http://dev1.itpw.ru:8005/",
    baseURL : "https://5d0d9965-b589-498f-a2ed-0d1348e473f6.mock.pstmn.io",
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