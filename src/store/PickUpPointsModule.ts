import api from "@/plugins/axios";
import router from '@/router';
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import store from '.';

export default {
    state: {
        point_all: [] as any [],
        page_count_point: 1 as number,
        limit: 10 as number,
        current_page_point: 1 as number,
        // one point
        choose_point: undefined as number | undefined,
        point_one: {} as any,
        onePointMap: {} as any,
        // work with map
        visibleMap: false as boolean,
        map: {} as any,
        currentMap: undefined as number | undefined,
        //current address from map in page createpointModal.vue
        address: {} as any,
        // create map
        mapCreatePoint: {} as any,
        // all modal window
        addPointModal: false as boolean,

        // currentpoint user
        isVisibleMyPoint: false as boolean,
        point_user: [] as any[],

        // works with partners
        getCountPartners: undefined as number | undefined,
        allPartners: [] as any[],

        // change info for point
        changeMap: {} as any,
        newAddress: {} as any,
        visibleChangeModal: false as boolean,
    },
    mutations: {
        changeIsVisibleMyPoint(state:any, payload:any){
          console.log("works");
          state.point_one = {};
          state.choose_point = undefined;
          state.isVisibleMyPoint = payload;
        },
        changeCurrentPage(state:any, page: number){
          if(page > state.page_count){
            page = state.page_count
          }
          if(page <= 1){
            page = 1
          }
          state.current_page_point = page;
          if(state.isVisibleMyPoint === false){
            store.dispatch('pickuppoints/getPoints')
          }
          else{
            store.dispatch('pickuppoints/getUserPoint')
          }
        },
        changeCreateModal(state:any){
          state.address = {};
          state.addPointModal = !state.addPointModal;
        },
        changeChangeModal(state:any){
          state.newAddress = {};
          state.visibleChangeModal = !state.visibleChangeModal;
        },
        loadMapChangeModal(state:any){
          let long:any = 30.3158;
          let lati:any = 59.95901;
          mapboxgl.accessToken =
            "pk.eyJ1Ijoia2VtcGVydmlwcyIsImEiOiJjbDRoYzg4cDAwMHgxM2J1YmU5cTJsNmZ4In0.LC5CLsMavfdKrMPj_JORuw";
          state.changeMap = new mapboxgl.Map({
            container: "createPoint_map",
            style: "mapbox://styles/mapbox/streets-v9",
            center: [long, lati],
            zoom: 8,
          });
          state.changeMap.on('load', () => {
          // TODO: Here we want to load a layer
          })
            const geocoder = new MapboxGeocoder({
            accessToken: "pk.eyJ1Ijoia2VtcGVydmlwcyIsImEiOiJjbDRoYzg4cDAwMHgxM2J1YmU5cTJsNmZ4In0.LC5CLsMavfdKrMPj_JORuw",
            mapboxgl: mapboxgl,
            placeholder: 'Введите адрес вашей точки выдачи...',
            reverseGeocode: true,
            countries: 'ru',
            language: 'ru',
            })
            state.changeMap.addControl(geocoder)
            geocoder.on('result', (e:any) => {
              //console.log(JSON.stringify(e.result));
              let city: any;
              try {
                city = e.result.context[2].text_ru 
              } catch (error) {
                
              }              
              let newInfo = {
                _city: city,
                longitude: e.result.center[0],
                latitude: e.result.center[1],
                address: e.result.place_name
              }
              state.newAddress = newInfo;
            });
            state.changeMap.addControl(new mapboxgl.NavigationControl());
            const marker:any = new mapboxgl.Marker().setLngLat([state.point_one.longitude, state.point_one.latitude])
            .addTo(state.changeMap)
          window.setTimeout(()=>state.changeMap.resize(), 500);
        },
        loadMapCreateModal(state:any){
          let long:any = 30.3158;
          let lati:any = 59.95901;
          mapboxgl.accessToken =
            "pk.eyJ1Ijoia2VtcGVydmlwcyIsImEiOiJjbDRoYzg4cDAwMHgxM2J1YmU5cTJsNmZ4In0.LC5CLsMavfdKrMPj_JORuw";
          state.mapCreatePoint = new mapboxgl.Map({
            container: "createPoint_map",
            style: "mapbox://styles/mapbox/streets-v9",
            center: [long, lati],
            zoom: 8,
          });
          state.mapCreatePoint.on('load', () => {
          // TODO: Here we want to load a layer
          })
            const geocoder = new MapboxGeocoder({
            accessToken: "pk.eyJ1Ijoia2VtcGVydmlwcyIsImEiOiJjbDRoYzg4cDAwMHgxM2J1YmU5cTJsNmZ4In0.LC5CLsMavfdKrMPj_JORuw",
            mapboxgl: mapboxgl,
            placeholder: 'Введите адрес вашей точки выдачи...',
            reverseGeocode: true,
            countries: 'ru',
            language: 'ru',
            })
            state.mapCreatePoint.addControl(geocoder)
            geocoder.on('result', (e:any) => {
              //console.log(JSON.stringify(e.result));
              let city: any;
              try {
                city = e.result.context[2].text_ru 
              } catch (error) {
                
              }
              console.log("this is result");
              console.log(city);
              
              let newInfo = {
                _city: city,
                longitude: e.result.center[0],
                latitude: e.result.center[1],
                address: e.result.place_name
              }
              state.address = newInfo;
            });
            state.mapCreatePoint.addControl(new mapboxgl.NavigationControl());
          window.setTimeout(()=>state.mapCreatePoint.resize(), 500);
        },
          // works with map
        changeDisplayWindow(state:any){
          state.visibleMap = !state.visibleMap
        },
        loadMap(state:any){
          let long:any = 30.3158;
          let lati:any = 59.95901;
          mapboxgl.accessToken =
            "pk.eyJ1Ijoia2VtcGVydmlwcyIsImEiOiJjbDRoYzg4cDAwMHgxM2J1YmU5cTJsNmZ4In0.LC5CLsMavfdKrMPj_JORuw";
          state.map = new mapboxgl.Map({
            container: "point_map",
            style: "mapbox://styles/mapbox/streets-v9",
            center: [long, lati],
            zoom: 8,
            //trackResize: true,
          });
          state.map.on('load', () => {
            state.map.flyTo({
              center: [state.point_all[0].longitude, state.point_all[0].latitude]
              });
          // TODO: Here we want to load a layer
          state.point_all.map((elem:any, index:any)=>{
            const popup:any = new mapboxgl.Popup({ closeOnClick: true, anchor: 'left', })
            .setLngLat([elem.longitude, elem.latitude])
            .setHTML(`<div class="popup_size">
            <h5>${elem._company ? elem._company : 'Наименование магазина '}</h5>
            <span>город: ${elem?._city}</span>
            <br>
            <span>адрес: ${elem?.address}</span>
            <br>
            <span>${elem?.description}</span>
            </div>`)
            const marker:any = new mapboxgl.Marker().setLngLat([elem.longitude, elem.latitude])
            .setPopup(popup)
            .addTo(state.map)
            
            marker.getElement().addEventListener('click', (e:any) => {
              state.map.flyTo({
                center: [elem.longitude, elem.latitude],
                speed: 0.2,
              })
            });
          })
          });
          state.map.addControl(new mapboxgl.NavigationControl());
          window.setTimeout(()=>state.map.resize(), 500);
          },
          flyToNewPoint(state:any, data:any){  
            state.map.flyTo({
              center: [data.longitude, data.latitude],
              speed: 0.2,
            })
            // state.currentMap = data.id;
            // state.choose_point = data.id;
            const popups = document.getElementsByClassName('mapboxgl-popup');
            if ( popups.length ) {
                popups[0].remove();
            }
            let popup:any = new mapboxgl.Popup({ closeOnClick: true, anchor: 'left', })
            .setLngLat([data.longitude, data.latitude])
            .setHTML(`<div class="popup_size">
            <h5>${data._company ? data._company : 'Наименование магазина '}</h5>
            <span>город: ${data?._city}</span>
            <br
            <span>адрес: ${data?.address}</span>
            <br>
            <span>${data?.description}</span>
            </div>`)
            .addTo(state.map)
          },




          // methods for one point 
          loadOnePointMap(state:any){
            let long:any = 30.3158;
            let lati:any = 59.95901;
            mapboxgl.accessToken =
              "pk.eyJ1Ijoia2VtcGVydmlwcyIsImEiOiJjbDRoYzg4cDAwMHgxM2J1YmU5cTJsNmZ4In0.LC5CLsMavfdKrMPj_JORuw";
            state.onePointMap = new mapboxgl.Map({
              container: "onePoint_map",
              style: "mapbox://styles/mapbox/streets-v9",
              center: [long, lati],
              zoom: 8,
              //trackResize: true,
            });
            state.onePointMap.on('load', () => {
              state.onePointMap.flyTo({
                center: [state.point_one.longitude, state.point_one.latitude]
                });
            // TODO: Here we want to load a layer
              const popup:any = new mapboxgl.Popup({ closeOnClick: true, anchor: 'left', })
              .setLngLat([state.point_one.longitude, state.point_one.latitude])
              .setHTML(`<div class="popup_size">
              <h5>${state.point_one._company ? state.point_one._company : 'Наименование магазина '}</h5>
              <span>город: ${state.point_one?._city}</span>
              <br>
              <span>адрес: ${state.point_one?.address}</span>
              <br>
              <span>${state.point_one?.description}</span>
              </div>`)
              const marker:any = new mapboxgl.Marker().setLngLat([state.point_one.longitude, state.point_one.latitude])
              .setPopup(popup)
              .addTo(state.onePointMap)
              
              marker.getElement().addEventListener('click', (e:any) => {
                state.onePointMap.flyTo({
                  center: [state.point_one.longitude, state.point_one.latitude],
                  speed: 0.2,
                })
              });
            });
            state.onePointMap.addControl(new mapboxgl.NavigationControl());
            window.setTimeout(()=>state.onePointMap.resize(), 500);
          }
    },
    actions: {
        getPoints({
            commit, state
        }:any) {
          
          let params = router.currentRoute.value.query.settings ? router.currentRoute.value.query.settings : '';
          console.log(params);
          if(params === "my"){
            state.isVisibleMyPoint = true;
            store.dispatch('pickuppoints/getUserPoint')
          }else{
            api.get(`marketplace/shop_for_staff/?page=${state.current_page_point}&psz=${state.limit}`).then((response:any)=>{
              console.log(response);
              if(response.status === 200) {
                state.point_all = response.data.results
                state.page_count_point = Math.ceil(response.data.count / state.limit) 
                state.point_user = [];
                state.isVisibleMyPoint = false;
              }
            })
          }
        },
        createPoint({
            commit, state
        }:any, payload:any) {
            //let confirmDo = confirm("вы уверены что хотите добавить данную точку ?")
            let history:any = localStorage.getItem('SR_settings') !== null && localStorage.getItem('SR_settings')
            let city: any;
            api.get(`marketplace/city/?search=${state.address._city}`).then((response:any)=>{
              console.log(response.data.results[0].id);
              city = response.data.results[0].id
            })
            .finally(()=>{
              if(history){
                api.post(`marketplace/shop_for_staff/`,{
                 city: Number(city),
                 company: JSON.parse(history).company_id,
                 address: state.address.address,
                 longitude: state.address.longitude,
                 latitude:  state.address.latitude,
                 description: payload.description,
               }).then((response:any)=>{
                  //  this is need to add dinamic render data in array mypoint or allpoint ?
                  state.point_all = [ response.data, ...state.point_all]
                  state.addPointModal = false;
               })
              }
            })
  
        },
        
        // point_one
        getOnePoint({
            commit, state
        }:any, payload:any) {
              let number: number;
              if(payload){   
                number = payload.id
              }else{
                let urlParams = new URLSearchParams(window.location.search);
                number = Number(router.currentRoute.value.params.id);
              }             
              if(state.choose_point !== number){
                state.choose_point = number;
                state.currentMap = number;  
                api.get(`marketplace/shop_for_staff/${state.choose_point}`).then((response:any)=>{
                  console.log(response);
                  state.point_one = response.data;
                }).then(()=>{
                  api.get(`marketplace/company_for_staff/${state.point_one.company}`).then((response:any)=>{
                    let img = response.data.img;
                    state.point_one = {...state.point_one, img}
                  })
                })
              }
        },
        changePoint({
            commit, state
        }:any, payload:any) {
          console.log("work function changePoint");
          console.log(state.point_one.id);
          let city: any;
            api.get(`marketplace/city/?search=${state.newAddress._city}`).then((response:any)=>{
              console.log(response.data.results[0].id);
              city = response.data.results[0].id
            }).finally(()=>{
              api.put(`marketplace/shop_for_staff/${state.point_one.id}/`,{
                company: state.point_one.company,
                city: Number(city) ? Number(city) : state.point_one.city,
                address: state.newAddress.address ? state.newAddress.address : state.point_one.address,
                longitude: state.newAddress.address ? state.newAddress.longitude : state.point_one.longitude,
                latitude:  state.newAddress.address ? state.newAddress.latitude : state.point_one.latitude,
                description: payload.description,
              }).then((response:any)=>{

               let indexArray:any;
               state.point_all.map((elem:any, index:any)=> {if(elem.id === state.point_one.id){
                 return indexArray = index
               }} )
               state.point_all[indexArray] = response.data;
               state.point_one = response.data;
               state.visibleChangeModal = !state.visibleChangeModal;
                  //console.log(response.data);
              })
            })
        },
        deletePoint({
            commit, state
        }:any, payload:any) {
          let confirm_todo = confirm('вы уверены что хотите удалить данную точку выдачи')
          if(confirm_todo){
            api.delete(`marketplace/shop_for_staff/${payload.id}/`).then((response:any)=>{
              state.point_all = state.point_all.filter((elem:any)=> elem.id !== payload.id)
              if(state.point_one.id === payload.id){
                state.point_one = {}
              }
            })
          }
        },
        addPartners({
          commit, state
        }:any, payload: any) {
          let addPartnersConfirm = confirm('Вы уверены что хотите добавить пользователя с данной точкой в партнёры')
          if(addPartnersConfirm){
            api.post(`marketplace/partner/`,{
              shop: state.point_one.id,
              company: state.point_one.company
            }).then((response:any)=>{
              console.log(response);
              if(response.status = 400){
                alert(response.response.data.detail)
              }else{
                alert("заявка успешно отправлена")
              // state.getCountPartners = state.getCountPartners + 1;
              }
            })
          }
        },
        getStatusPartners({
          commit, state
        }:any, payload:any) {
          let user_company:any = localStorage.getItem('SR_settings') !== null && localStorage.getItem('SR_settings')
          //?company=${JSON.parse(user_company).company_id}
          // невозможно получить список партнёров для компании - которые ждут апрува
          api.get(`marketplace/partner/?accepted=0&declined=0&company=${JSON.parse(user_company).company_id}`).then((response:any)=>{
            console.log(response);
            state.getCountPartners = response.data.count;
            state.allPartners = response.data.results
          })
        },
        // works with maps

        // works with point current user
        getUserPoint({
          commit, state
        }:any, payload:any) {
          //state.current_page_point = 1;
          let user_company:any = localStorage.getItem('SR_settings') !== null && localStorage.getItem('SR_settings')
          api.get(`marketplace/shop_for_staff/?company=${JSON.parse(user_company).company_id}&page=${state.current_page_point}&psz=${state.limit}`).then((response:any)=>{
            console.log(response);            
            state.point_user = response.data.results
            state.point_all = response.data.results
            state.page_count_point = Math.ceil(response.data.count / state.limit) 
          })
        }
    },
    modules: {
    },
    namespaced: true,
  }
  