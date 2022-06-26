<template>
    <div class="block_CarsList">
      <div class="block_CarsList_wrapper">
        <div class="add_car">
          <div class="add_car_wrapper">
            <div title="добавить машину" class="add_car_img"></div>
          </div>
        </div>
        <div v-for="car in cars_all" :key="car.id" class="cars_list">
          <div class="card_car">
            <div class="card_car_wrapper">
              <div class="car_name">{{ car.name }}</div>
            </div>
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
    }),
    ...mapActions({
    }),
  },
  computed: mapState({
    cars_all: (state:any)=> state.cars.cars_all
  }),
  mounted() {}
});
</script>
<style lang="scss" scoped>
.add_car_img{
    cursor: pointer;
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
}
.card_car_wrapper{
  height: 350px;
  width: 300px;
  box-shadow: 0px 0px 5px rgb(174, 174, 174);
  min-width: 300px;
  border-radius: 5px;
  padding: 10px;
}
.card_car{
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.block_CarsList{
    margin-top: 30px;
    margin-bottom: 10px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.block_CarsList_wrapper{
    width: 90%;
    height: 100%;
    min-height: 80vh;
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    column-gap: 1.33%;

    @media(max-width: 1660px){
      grid-template-columns: 32% 32% 32%;
      column-gap: 2%;
      row-gap: 20px;
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
