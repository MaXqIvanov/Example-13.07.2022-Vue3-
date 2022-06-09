import api from "@/plugins/axios";
import router from '@/router';

export default {
    state: {
        all_company: [] as any [],
        choose_company: undefined as number | undefined, 
    },
    mutations: {
    },
    actions: {
        getCompanies({
            commit, state
        }:any) {
          api.get('marketplace/company/').then((response:any)=>{
              if(response.status === 200) {
                console.log(response.data.results);
                state.all_company = response.data.results
              }
          })
        },
        chooseCompany({
            commit, state
        }:any, payload:any) {
            state.choose_company = payload;
            console.log(state.choose_company);
            // router.push(`/company/${payload}`)
        },
        getOneCompany({
            commit, state
        }:any, payload: any) {
            api.get('')
        },
        createCompany({
            commit, state
        }:any, payload:any) {
            api.post('accounts/auth/',{
                email: `${payload.email}`,
                password: `${payload.password}`,
            })
            .then((response:any)=>{
              if(response.status === 200){
              } 
            })
        },

        // test function and check

        // addNewCompany({
        //     commit, state
        // }:any, payload:any){
        //     console.log(payload);
        //     api.post('http://dev1.itpw.ru:8005/marketplace/company/',{
        //         full_name: payload.full_name,
        //         short_name: payload.short_name,
        //         inn: payload.inn,
        //         img: payload.img,
        //         description: payload.description
        //     }).then((response:any)=>{
        //         console.log(response);
        //     })
        // },
    },
    modules: {
    },
    namespaced: true,
  }
  