import api from "@/plugins/axios";
import router from '@/router';
import mapboxgl from "mapbox-gl";

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
        visibleMap: false as boolean,
        map: {},
        currentMap: undefined as number | undefined,
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
          window.setTimeout(()=>state.map.resize(), 500);
          },
          flyToNewPoint(state:any, data:any){  
            state.map.flyTo({
              center: [data.longitude, data.latitude],
              speed: 0.2,
            })
            state.currentMap = data.id
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
  