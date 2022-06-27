<template>
    <div class="block_CarsList">
      <div class="block_CarsList_wrapper">
        <div class="check_type">
          <div class="form-check form-switch">
            <input @change="changeVisibleTypeCar" class="form-check-input" type="checkbox" role="switch" id="visibleTypeCar">
            <label class="form-check-label" for="visibleTypeCar">показать типы машин</label>
          </div>
        </div>
        <div class="add_car">
          <div title="добавить машину" v-if="!visibleTypeCar" @click="changeIsVisibleAddCarModal" class="add_car_wrapper">
            <div class="add_car_img"></div>
          </div>
          <div title="добавить новый тип" v-else @click="changeIsVisibleAddTypeModal" class="add_car_wrapper">
            <div class="add_car_img"></div>
          </div>
        </div>
        <div v-for="car in cars_all" :key="car.id" class="cars_list">
          <div v-if="Object.keys(cars_all).length > 0" class="card_car">
            <div v-if="!visibleTypeCar" class="card_car_wrapper">
              <div class="car_name">{{ car.name }}</div>
              <div :style="{backgroundImage: `url(${car._type.img})`}" class="car_image"></div>
              <div class="car_name">модель : {{ car.model }}</div>
              <div class="car_name">номер : {{ car.number }}</div>
              <div class="car_name">цвет : {{ car.color }}</div>
              <div class="car_name">цена за час макс : {{ car.cost_per_hour_max }}</div>
              <div class="car_name">цена за час мин : {{ car.cost_per_hour_min }}</div>
              <div class="car_name">описание : {{ car.description }}</div>
            </div>
            <div class="card_car_wrapper" v-else>
              <div class="car_name mt-1">{{ car.name }}</div>
              <div :style="{backgroundImage: `url(${car.img})`}" class="car_image"></div>
              <div class="car_name">высота : {{ car.height }}</div>
              <div class="car_name">ширина : {{ car.width }}</div>
              <div class="car_name">длина : {{ car.long }}</div>
              <div class="car_name">макс. вес : {{ car.max_weight }}</div>
              <div class="car_name">коэффициент загрузки : {{ car.load_capacity }}</div>
            </div>
          </div>
          <div class="cars_empty" v-else>
            <span>в данный момент ваш список машин пуст</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
export default defineComponent({
  name: 'CarsList',
  components: {
  },
  data() {
  },
  methods: {  
    ...mapMutations({
      changeIsVisibleAddCarModal: 'cars/changeIsVisibleAddCarModal',
      changeVisibleTypeCar: 'cars/changeVisibleTypeCar',
      changeIsVisibleAddTypeModal: 'cars/changeIsVisibleAddTypeModal',
    }),
    ...mapActions({
    }),
  },
  computed: mapState({
    cars_all: (state:any)=> state.cars.cars_all,
    visibleTypeCar: (state:any)=> state.cars.visibleTypeCar,
  }),
  mounted() {}
});
</script>
<style lang="scss" scoped>
.check_type{
  position: absolute;
  top: -28px;
  right: 25px;
}
.cars_empty{
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  span{
    height: fit-content;
    width: fit-content;
  }
}
.car_image{
  background-repeat: no-repeat;
  background-size: contain;
  height: 150px;
}
.add_car_img{
    height: 150px;
    width: 150px;
    background-image: url('../../assets/cars/add_anything_car.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.4;

    &:hover{
        opacity: 0.55;
    }
}
.add_car{
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.add_car_wrapper{
  height: 350px;
  width: 300px;
  box-shadow: 0px 0px 5px rgb(174, 174, 174);
  min-width: 300px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.card_car_wrapper{
  height: 350px;
  width: 300px;
  box-shadow: 0px 0px 5px rgb(174, 174, 174);
  min-width: 300px;
  border-radius: 5px;
  padding: 10px;
  overflow-y: scroll;
}
.card_car{
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.block_CarsList{
    margin-top: 35px;
    margin-bottom: 10px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.block_CarsList_wrapper{
    width: 90%;
    height: 100%;
    min-height: 80vh;
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    column-gap: 1.33%;
    row-gap: 30px;
    @media(max-width: 1660px){
      grid-template-columns: 32% 32% 32%;
      column-gap: 2%;
    }
    @media(max-width: 1300px){
      grid-template-columns: 48% 48%;
      column-gap: 4%;
    }
    @media(max-width: 800px){
      grid-template-columns: 100%;
    }
}

</style>
