import api from "@/plugins/axios";
import router from '@/router';

export default {
    state: {
        point_all: [] as any [],
        page_count_point: 1 as number,
        limit: 10 as number,
        current_page_point: 1 as number,
        // one point
        choose_point: undefined as number | undefined,
        point_one: {} as any,

        // work with map
        visibleMap: false,
    },
    mutations: {
        changeCurrentPage(state:any, page: number){
            if(page < 1){
              page = 1
            }
            if(page > state.page_count_point){
              page = state.page_count_point
            }
            if(page !== state.current_page_point){
              state.current_page_point = page;
              api.get(`marketplace/shop/?page=${page}&psz=${state.limit}`).then((response:any)=>{
                console.log(response);
                if(response.status === 200) {
                    state.point_all = response.data.results
                }
              })
            }
          },

          // works with map
        changeDisplayWindow(state:any){
          state.visibleMap = !state.visibleMap
        }
    },
    actions: {
        getPoints({
            commit, state
        }:any) {
          api.get(`marketplace/shop/?page=${state.current_page_point}&psz=${state.limit}`).then((response:any)=>{
              console.log(response);
              if(response.status === 200) {
                state.point_all = response.data.results
                state.page_count_point = Math.ceil(response.data.count / state.limit) 
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
              if(payload){
                state.choose_point = payload.id;     
              }else{
                let urlParams = new URLSearchParams(window.location.search);
                state.choose_point = Number(router.currentRoute.value.params.id);
              }
              if(state.choose_point !== payload){
                api.get(`marketplace/shop/${state.choose_point}`).then((response:any)=>{
                  state.point_one = response.data;
                })
              }
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

        // works with maps
    },
    modules: {
    },
    namespaced: true,
  }
  