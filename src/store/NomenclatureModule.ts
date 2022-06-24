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

        // all modal window
        isCreateNomenclatureModal: false as boolean,

        // work with add nomenclature
        visibleAddPhoto: false as boolean,
        nomenclature_suggest: undefined as number | undefined,

        // work with not approved nomenclature
        notApprovedNomenclature: [] as any[],
        notApprovedNomenclatureCount: undefined as number | undefined,
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
      },
      changeIsCreateNomenclatureModal(state:any){
        state.isCreateNomenclatureModal = !state.isCreateNomenclatureModal;
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
        CreateNomenclature({
          commit, state
        }:any, payload:any){
          console.log("function createNomenclature");
          console.log(payload);
          api.post(`marketplace/nomenclature_suggest/`,{
            name: payload.name.trim(),
            height: payload.height,
            width: payload.width,
            long: payload.long,
            weight: payload.weight,
          }).then((response:any)=>{
            console.log(response);
            state.nomenclature_suggest = response.data.id;
            state.visibleAddPhoto = !state.visibleAddPhoto
          })

            // state.nomenclature_suggest = 16;
            // state.visibleAddPhoto = !state.visibleAddPhoto
        },
        addPhotoNomenclature({
          commit, state
        }:any, payload:any){
          api.post(`marketplace/nomenclature_photo_suggest/`, payload.formData).then((response:any)=>{
            console.log(response); 
          })
        },
        getNotApprovedNomenclatureCount({
          commit, state
        }:any, payload:any){
          api.get(`marketplace/nomenclature_suggest/get_count_not_approved/`).then((response:any)=>{
            state.notApprovedNomenclatureCount = response.data.count
            // state.notApprovedNomenclature = response.data
          })
        },
        // for Nomenclature_One
        getOneNomenclature({
          commit, state
        }:any, payload:any) {
          if(payload){
            if(state.choose_nomenclature !== payload){
              state.choose_nomenclature = payload;
              api.get(`marketplace/nomenclature/${payload}`).then((response:any)=>{
                state.nomenclature_one = response.data
              })
            }else{
              state.choose_nomenclature == payload;
            }
          }else{
            if(Object.keys(state.nomenclature_one).length === 0){
              state.choose_nomenclature = Number(router.currentRoute.value.params.id);
              api.get(`marketplace/nomenclature/${state.choose_nomenclature}`).then((response:any)=>{
                state.nomenclature_one = response.data
              })
            }
          }
        },
    },
    modules: {
    },
    namespaced: true,
  }
  