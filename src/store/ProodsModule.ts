import api from "@/plugins/axios";
import router from '@/router';

export default {
    state: {
        proods_all: [] as any[],

        // one_prood
        choise_prood: undefined as number | undefined,
        prood_one: {} as any
    },
    mutations: {
    },
    actions: {
        getProods({
            commit, state
        }:any, payload:any) {
            // psz - count prood on page
          api.get(`marketplace/product/?psz=10`).then((response:any)=>{
            console.log(response);
            if(response.status === 200) {
                state.proods_all = response.data.results
            }
          })
        },
        addProod({
          commit, state
        }:any, payload:any) {
          api.post(`marketplace/product/`,{
            shop: 1,
            nomenclature: 1,
            cost: 123,
            count: 1,
          }).then((response:any)=>{
            console.log(response);
          })
        },
        addProodExcel({
          commit, state
        }:any, payload:any) {
          api.post(``,{

          }).then((response:any)=>{
            console.log(response);
          })
        },
        changeProod({
          commit, state
        }:any, payload:any) {
          api.put(`marketplace/product/${payload.id}`,{
            // change this when already back
            nomenclature: 1,
            cost: 550
          }).then((response:any)=>{
            console.log(response);
          })
        },
        // for ProodOne
        getOneProod({
          commit, state
        }:any, payload:any) {
          state.choise_prood = payload;
          api.get(`marketplace/product/${payload}`).then((response:any)=>{
            console.log(response);
          })
        }
    },
    modules: {
    },
    namespaced: true,
  }
  