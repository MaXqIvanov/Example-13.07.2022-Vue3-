import api from "@/plugins/axios";
import router from '@/router';
import store from '.';

export default {
    state: {
        proods_all: [] as any[],
        page_count: 1 as number,
        limit: 10 as number,
        current_page: 1 as number,
        // one_prood
        choise_prood: undefined as number | undefined,
        prood_one: {} as any
    },
    mutations: {
      changeCurrentPage(state:any, page: number){
        if(page < 1){
          page = 1
        }
        if(page > state.page_count){
          page = state.page_count
        }
        if(page !== state.current_page){
          state.current_page = page;
          api.get(`marketplace/product/?page=${page}&psz=${state.limit}`).then((response:any)=>{
            console.log(response);
            if(response.status === 200) {
                state.proods_all = response.data.results
            }
          })
        }
      }
    },
    actions: {
        getProods({
            commit, state
        }:any, payload:any) {
            // psz - count prood on page
          api.get(`marketplace/product/?page=${state.current_page}&psz=${state.limit}`).then((response:any)=>{
            console.log(response);
            if(response.status === 200) {
                state.proods_all = response.data.results
                state.page_count = Math.ceil(response.data.count / state.limit) 
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
        // for Prood One
        getOneProod({
          commit, state
        }:any, payload:any) {
          if(payload){
            state.choise_prood = payload.id;     
          }else{
            let urlParams = new URLSearchParams(window.location.search);
            state.choise_prood = Number(router.currentRoute.value.params.id);
          }
          api.get(`marketplace/product/${state.choise_prood}`).then((response:any)=>{
            state.prood_one = response.data;
          }).then(()=>{
            store.dispatch(`nomenclature/getOneNomenclature`, state.prood_one.nomenclature)
          })
        }
    },
    modules: {
    },
    namespaced: true,
  }
  