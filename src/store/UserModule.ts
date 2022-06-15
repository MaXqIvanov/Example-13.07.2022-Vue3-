import axios, {HeadersDefaults} from 'axios';
import api from "@/plugins/axios";
import Cookies from 'js-cookie'
import router from '@/router'

interface CommonHeaderProperties extends HeadersDefaults {
    Authorization: string;
  }

export default {
  state: {
    //   auth
    userInfo: [] as any[],
    userAuth: false as boolean,
    user_profile: [] as any,
    // end auth

    // all users
    users_all: [] as any [],
    // end all users

    // one user
    user_one: {} as any,
    choise_user: undefined as number | undefined,
    // end one user
  },
  mutations: {
      userLogOut(state:any, data:any) {
        //localStorage.removeItem('token')
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
            else{
                alert('Неверный логин или пароль')
            }
          })
          .then(()=>router.push('/'))
      },
      user_registration({
        commit, state
      }:any, payload:any) {
    
        api.post('accounts/auth/email_registration/', {
            name: `${payload.name}`,
            email: `${payload.email}`,
            password: `${payload.password}`,
        })
        .then((response:any)=>{
            console.log("this is response");
            console.log(response);
            if(response.status === 200 || response.status === 201) {
                alert(response.data.detail)
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
        // if(localStorage.getItem('token')){
        //     state.userAuth = true;
        // }
      },

    //   works with all users
      getUsers({
          commit, state
      }:any, payload:any) {
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
