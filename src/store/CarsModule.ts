import api from "@/plugins/axios";
import router from '@/router';

export default {
  state: {
      cars_all: [] as any[],
      type_car: [] as any[],

      // work with modal window
      isVisibleAddCarModal: false,
      // one car
      choise_car: undefined as number | undefined,
      car_one: {} as any
  },
  mutations: {
    changeIsVisibleAddCarModal(state:any,){
      state.isVisibleAddCarModal = !state.isVisibleAddCarModal
    }
  },
  actions: {
    getCars({
      commit, state
    }:any, payload:any) {
    api.get(`marketplace/car/`).then((response:any)=>{
      console.log(response);
      if(response.status === 200) {
          state.cars_all = response.data.results
      }
    })
    },
    getCarsType({
      commit, state
    }:any, payload:any) {
      if(Object.keys(state.type_car).length == 0)
      api.get(`marketplace/car-type/`).then((response:any)=>{
        console.log(response);
        state.type_car = response.data.results
      })
    },
    addCar({
      commit, state
    }:any, payload:any) {
      // don't work add car - post method not allowed
      console.log(payload);
      api.post(`marketplace/car/`,{
        name: payload.name,
        type: payload.type.id,
        number: payload.number,
        model: payload.model,
        color: payload.color,
      }).then((response:any)=>{
        console.log(response);
      })
    },
    deleteCar({
      commit, state
    }:any, payload:any) {
      api.delete(`marketplace/car/${payload.id}`).then((response:any)=>{
        console.log(response);
      })
    },
    // one car
    getOneCar({
      commit, state
    }:any, payload:any) {
      state.choise_car = payload
      api.get(`marketplace/car/${payload}`).then((response:any)=>{
        console.log(response);
        state.car_one = response.data.results
      })
    },
    changeCar({
      commit, state
    }:any, payload:any) {
      api.put(`marketplace/car/${payload.id}`,{
        name: "name (Update)",
        description: 'just description',
        color: 'Синий',
        model: 'Грузовой'
      }).then((response:any)=>{
        console.log(response);
      })
    },
    
    // works with user cars
    getUserCars({
      commit, state
    }:any, payload:any){
      api.get(``)
    }
  },
  modules: {
  },
  namespaced: true,
}
