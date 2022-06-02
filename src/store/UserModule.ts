import api from "@/plugins/axios";
import Cookies from 'js-cookie'
import router from '@/router'

export default {
  state: {
      userInfo: [] as any,
      formStageHolder: false,
      userAuth: false,
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
            console.log(response);
        })
      },
      createProfile({
          commit, state
      }:any, payload:any) {
          state.formStageHolder === false ? 
          api.post('accounts/auth/phone_auth/',{
              phone: `${payload.phone}`
          })
          .then((response:any)=>{
              console.log(response);
              state.formStageHolder = true
          })
          : 
          api.post('accounts/auth/phone_auth/',{
            //   change this - payload code need string
              phone: `${payload.phone}`,
              otc: `${payload.code}`,
          })
          .then((response:any)=>{
              console.log(response);
              state.user = response.data.user
              Cookies.set('token', `${response.data.token}`, { secure: true, path: '/', expires: 30 })
              router.push('/')
              state.userAuth = !state.iserAuth;
          })
          .finally(()=>{
              state.formStageHolder = false;
          })
      },
      checkAuth({
          commit, state
      }:any, payload:any) {
          if(Cookies.get('token')){
              state.userAuth = !state.userAuth;
          }
      },
  },
  modules: {
  },
  namespaced: true,
}
