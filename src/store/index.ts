import { createStore } from 'vuex'
import CarsModule from './CarsModule'
import ProodsModule from './ProodsModule'
import StoresModule from './StoresModule'
import UserModule from './UserModule'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: UserModule,
    cars: CarsModule,
    proods: ProodsModule,
    stores: StoresModule,
  }
})
