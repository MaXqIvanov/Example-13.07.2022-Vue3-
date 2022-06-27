<template>
  <div class="cars">
    <div class="cars_wrapper">
        <CarsNav />
        <CarsList />
        
        <AddCarModal v-if="isVisibleAddCarModal"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import CarsList from '@/components/cars/CarsList.vue';
import CarsNav from '@/components/cars/CarsNav.vue';
import AddCarModal from '@/components/cars/AddCarModal.vue';

export default defineComponent({
  name: 'Cars',
  components: {
    CarsList,
    CarsNav,
    AddCarModal
},
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      getCars: 'cars/getCars'
    }),
  },
  computed: mapState({
    isVisibleAddCarModal: (state:any)=> state.cars.isVisibleAddCarModal
  }),
  mounted() {
    this.getCars()
  },
});
</script>
<style lang="scss">
@import '../scss/Cars.scss';
</style>