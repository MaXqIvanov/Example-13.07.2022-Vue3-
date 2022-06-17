import api from "@/plugins/axios";
import router from '@/router';

export default {
    state: {
        nomenclature_all: [] as any [],
        page_count_nomenclature: 1 as number,
        limit: 10 as number,
        current_page_nomenclature: 1 as number,
        // one_nomenclature
        choose_nomenclature: undefined as number | undefined,
        nomenclature_one: {} as any,
    },
    mutations: {
      changeCurrentPage(state:any, page: number){
        if(page < 1){
          page = 1
        }
        if(page > state.page_count_nomenclature){
          page = state.page_count_nomenclature
        }
        if(page !== state.current_page){
          state.current_page_nomenclature = page;
          api.get(`marketplace/nomenclature/?page=${page}&psz=${state.limit}`).then((response:any)=>{
            console.log(response);
            if(response.status === 200) {
                state.nomenclature_all = response.data.results
            }
          })
        }
      }
    },
    actions: {
        getNomenclature({
            commit, state
        }:any, payload:any) {
            // psz - count prood on page
          api.get(`marketplace/nomenclature/?page=${state.current_page_nomenclature}&psz=${state.limit}`).then((response:any)=>{
            console.log(response);
            if(response.status === 200) {
                state.nomenclature_all = response.data.results
                state.page_count_nomenclature = Math.ceil(response.data.count / state.limit) 
            }
          })
        },

        // for Nomenclature_One
        getOneNomenclature({
          commit, state
        }:any, payload:any) {
          if(state.choose_nomenclature !== payload){
            state.choose_nomenclature = payload;
            api.get(`marketplace/nomenclature/${payload}`).then((response:any)=>{
              state.nomenclature_one = response.data
            })
          }else{
            state.choose_nomenclature == payload;
          }
        }
    },
    modules: {
    },
    namespaced: true,
  }
  