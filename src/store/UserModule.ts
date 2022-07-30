import axios, {HeadersDefaults} from 'axios';
import api from "@/plugins/axios";
import Cookies from 'js-cookie'
import router from '@/router'
import store from '.';

interface CommonHeaderProperties extends HeadersDefaults {
    Authorization: string;
  }

export default {
  state: {
    // all users
    users_all: [] as any [],
    active_user: undefined as number | undefined,
    // end all users

    // one user
    user_one: {} as any,
    choise_user: undefined as number | undefined,
    // end one user

    // user_profile
    user_profile: [] as any,
    //   auth
    userInfo: [] as any[],
    userAuth: false as boolean,
    // end auth
  },
  mutations: {
      userLogOut(state:any, data:any) {
        Cookies.remove('token')
        state.userAuth = false
      }
  },
  actions: {
      getProfile({
          commit, state
      }:any) {
        api.get('accounts/profile/profile/').then((response:any)=>{
            state.user_profile = response.data
        })
        let history:any = localStorage.getItem('SR_settings') !== null && localStorage.getItem('SR_settings')
        if(history){
            store.dispatch(`company/getOneCompany`)
        }
      },
      createProfile({
          commit, state
      }:any, payload:any) {
          api.post('accounts/auth/email_login/',{
              email: `${payload.email}`,
              password: `${payload.password}`,
          })
          .then((response:any)=>{
            if(response?.status === 200){
                state.userInfo = response.data
                //Cookies.set('token', `${response.data.token}`, { secure: true, path: '/', expires: 45 }) for ssl sertificate
                Cookies.set('token', `${response.data.token}`, { path: '/', expires: 45 })
                api.defaults.headers = {
                    Authorization: `Bearer ${response.data.token}`
                  } as CommonHeaderProperties;
                state.userAuth = true;
                state.user_profile = response.data;
            }
            else if(response?.response?.status === 400){
                alert(response.response.data.detail)
            }
            else{
                alert('произошла ошибка, повторите запрос позже')
            }
          })
          .then(()=>router.push('/'))
      },
      user_registration({
        commit, state
      }:any, payload:any) {
        api.post('http://dev1.itpw.ru:8005/accounts/auth/email_registration/', {
            name: `${payload.name}`,
            email: `${payload.email}`,
            password: `${payload.password}`,
        })
        .then((response:any)=>{
            if(response.status === 200 || response.status === 201) {
                alert(response.data.detail)
            }
            if(response.response.status === 400) {
                alert(response.response.data.detail)
            }
            else{
                alert('Произошла ошибка, попробуйте повторить запрос позже')
            }
            })
        },
      checkAuth({
          commit, state
      }:any, payload:any) {
          if(Cookies.get('token')){
              state.userAuth = true;
          }
      },

    //   works with all users
      getUsers({
          commit, state
      }:any, payload:any) {
            //   delete this functional in bottom
            state.users_all = [{
                id: 1,
                name: "Макс",
                img: "https://avatars.githubusercontent.com/u/100379657?s=400&u=f5466ed5a05c8cc705c275e95e3c82952e6a2cb8&v=4",
                admin: false,
                car: false,
                point: false,
                nomenclature: false,
            },
            {
                id: 2,
                name: "Гена",
                img: "https://www.inoreader.com/cdn/profile_social_picture/1006036911/google_1000/a4c4d10d3e4f072e6c5ebc1ae9fd5904b2c5525bdb4bafd9a2ea407a42bcaf85925669e2e87d0d374a3b0c681783a3c10738df12d773dae6e3bec622fafac6368114d4e32795e07e43c3089e64cf05db3149b586687bbbcab4860776d6ecba294b2023dc",
                admin: false,
                car: false,
                point: false,
                nomenclature: false,
            },
            {
                id: 3,
                name: "Ярослав",
                img: "https://matthiasbeier.com/wp-content/uploads/2018/02/5-raul-richter.jpg",
                admin: false,
                car: false,
                point: false,
                nomenclature: false,
            }]
          api.get(``).then((response:any)=>{
            state.users_all = response.data.results
          })
      },
      addUser({
          commit, state
      }:any, payload:any) {
          api.post(``,{

          }).then((response:any)=>{
              console.log(response);
          })
      },
      changeUser({
          commit, state
      }:any, payload:any) {
        api.put(``,{

        }).then((response:any)=>{
            console.log(response);
        })
      },
      deleteUser({
          commit, state
      }:any, payload:any){
          api.delete(``).then((response:any)=>{
              console.log(response);
          })
      },
    // works with one user
      getOneUser({
          commit, state
      }:any, payload:any) {
          state.choise_user = payload,
          api.get(``).then((response:any)=>{
            console.log(response);
            state.user_one = response.data.results
          })
      },

    //   other don't important function
    changeNameProfileUser({
        commit, state
    }:any, payload:any){
        api.put('accounts/profile/change_name/',{
            name: `${payload.name}`
        }).then((response:any)=>{
            console.log(response);
            state.userInfo = response.data
        })
    }
  },
  modules: {
  },
  namespaced: true,
}
