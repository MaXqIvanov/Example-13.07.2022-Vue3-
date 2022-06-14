import { createStore } from 'vuex'
import CarsModule from './CarsModule'
import ProodsModule from './ProodsModule'
import CompanyModule from './CompanyModule'
import UserModule from './UserModule'
import PickUpPointsModule from './PickUpPointsModule'
import NomenclatureModule from './NomenclatureModule'

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
    company: CompanyModule,
    pickuppoints: PickUpPointsModule,
    nomenclature: NomenclatureModule,
  }
})
