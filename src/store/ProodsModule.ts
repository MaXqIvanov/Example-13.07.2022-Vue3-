import api from "@/plugins/axios";
import router from '@/router';

export default {
    state: {
        proods_all: [] as any[],
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
    },
    modules: {
    },
    namespaced: true,
  }
  