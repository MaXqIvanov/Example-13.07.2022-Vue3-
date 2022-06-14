import api from "@/plugins/axios";
import router from '@/router';

export default {
    state: {
        point_all: [] as any [],

        // one point
        choise_point: undefined as number | undefined,
        point_one: {} as any,
    },
    mutations: {
    },
    actions: {
        getPoints({
            commit, state
        }:any) {
          api.get('').then((response:any)=>{
              console.log(response);
              if(response.status === 200) {
                state.point_all = response.data.results
              }
          })
        },
        createPoint({
            commit, state
        }:any) {
            api.post(``).then((response:any)=>{
                console.log(response);
            })
        },
        
        // point_one
        getOnePoint({
            commit, state
        }:any, payload:any) {
            state.choise_point = payload;
            api.get(``).then((response:any)=>{
                console.log(response);
            })
        },
        changePoint({
            commit, state
        }:any, payload:any) {
            api.put(``).then((response:any)=>{
                console.log(response);
            })
        },
        deletePoint({
            commit, state
        }:any) {
            api.delete(``).then((response:any)=>{
                console.log(response);
            })
        }
    },
    modules: {
    },
    namespaced: true,
  }
  