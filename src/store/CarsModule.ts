import api from "@/plugins/axios";
import router from '@/router';

export default {
  state: {
      cars_all: [] as any[],

      // one car
      choise_car: undefined as number | undefined,
      car_one: {} as any
  },
  mutations: {
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

    addCar({
      commit, state
    }:any, pyaload:any) {
      api.post(`marketplace/car/`,{
        name: "name",
        type: 1,
        number: "123aa",
        model: "Грузовой",
        color: "Синий"
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
    }
  },
  modules: {
  },
  namespaced: true,
}
