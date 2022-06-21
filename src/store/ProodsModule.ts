import api from "@/plugins/axios";
import router from '@/router';
import store from '.';
import mapboxgl from "mapbox-gl";

export default {
    state: {
        proods_all: [] as any[],
        page_count: 1 as number,
        limit: 10 as number,
        current_page: 1 as number,
        // one_prood
        choise_prood: undefined as number | undefined,
        prood_one: {} as any,

        // works with map

        // all modal window
        isCreateProodModal: false as boolean,

        // prood users
        proods_user: [] as any[],
        user_nomenclature: [] as any[],
        isVisibleMyProod: false as boolean,

        // get partners for add proods
        user_partner: [] as any,
    },
    mutations: {
      changeIsCreateProodModal(state:any){
        state.isCreateProodModal = !state.isCreateProodModal
      },
      changeIsVisibleMyProod(state:any){
        console.log("works");
        state.isVisibleMyProod = !state.isVisibleMyProod;
      },
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
      },
      loadMap(state:any){
      let long:any = 30.3158;
      let lati:any = 59.95901;
      mapboxgl.accessToken =
        "pk.eyJ1Ijoia2VtcGVydmlwcyIsImEiOiJjbDRoYzg4cDAwMHgxM2J1YmU5cTJsNmZ4In0.LC5CLsMavfdKrMPj_JORuw";
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9",
        //center: [data.proods.prood_one._shop.longitude, data.proods.prood_one._shop.latitude],
        center: [long, lati],
        zoom: 8,
      });
      map.on('load', () => {
        map.flyTo({
          center: [state.prood_one._shop.longitude, state.prood_one._shop.latitude]
          });
      // TODO: Here we want to load a layer
      const popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat([state.prood_one._shop.longitude, state.prood_one._shop.latitude])
      .setHTML(`<h4>${state.prood_one._shop.short_name ? state.prood_one._shop.short_name : 'Наименование магазина '}</h4>`)

      new mapboxgl.Marker().setLngLat([state.prood_one._shop.longitude, state.prood_one._shop.latitude])
      .setPopup(popup)
      .addTo(map)
      .togglePopup();
      // TODO: Here we want to load/setup the popup
      // map.on("click", "usa-fill", function (e) {
      //   new mapboxgl.Popup()
      //     .setLngLat(e.lngLat)
      //     .setHTML('Hello World.')
      //     .addTo(map);
      // });
      // sidebar
      // https://docs.mapbox.com/mapbox-gl-js/example/offset-vanishing-point-with-padding/
      });
      }
    },
    actions: {
        getProods({
            commit, state
        }:any, payload:any) {
            // psz - count prood on page
          api.get(`marketplace/product_for_staff/?page=${state.current_page}&psz=${state.limit}`).then((response:any)=>{
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
          api.post(`marketplace/product_for_staff/`,{
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
          api.put(`marketplace/product_for_staff/${payload.id}`,{
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
          console.log(state.choise_prood);
          if(state.choise_prood !== payload){
            api.get(`marketplace/product_for_staff/${state.choise_prood}`).then((response:any)=>{
              state.prood_one = response.data;
            }).then(()=>{
              store.dispatch(`nomenclature/getOneNomenclature`, state.prood_one.nomenclature)
            })
          }
        },

        // for users prood 
        // info function for addCreatemodal 
        getUserProod({
          commit, state
        }:any, pyaload:any) {
          store.dispatch(`pickuppoints/getUserPoint`)
          api.get(`marketplace/nomenclature/?limit=50`).then((response:any)=>{
            state.user_nomenclature = response.data.results;
          })
          api.get(`marketplace/partner/`).then((response:any)=>{
            console.log(response);
            let company:any = localStorage.getItem('SR_settings') !== null && localStorage.getItem('SR_settings');
            company = {
              company: JSON.parse(company).company_id,
              short_name: JSON.parse(company).company_name,
              id: 999,
            }
            company = [company, ...response.data.results];
            state.user_partner = company;
            console.log(company);
          })
        },
        getCurrentUserProod({
          commit, state
        }:any, payload:any){
          let id:any = localStorage.getItem('SR_settings') !== null && localStorage.getItem('SR_settings');
          id =JSON.parse(id).company_id,
          api.get(`marketplace/product_for_staff/?page=${state.current_page}&psz=10&company=${id}`).then((response:any)=>{
            console.log(response);
            state.proods_all = response.data.results
            state.proods_user = response.data.results
            state.page_count = Math.ceil(response.data.count / state.limit) 
          }) 
        },
        createNewProod({
          commit, state
        }:any, payload:any) {
          api.post(`marketplace/product_for_staff/`,{
            company: payload.company_id,
            shop: payload.shop.id,
            nomenclature: payload.nomenclature.id,
            cost: payload.cost,
            count: payload.count,
          }).then((response:any)=>{
            console.log(response);
            // add change this for user_prood
          })
        }
    },
    modules: {
    },
    namespaced: true,
  }
  