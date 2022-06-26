<template>
  <div class="cars">
    <div class="cars_wrapper">
        <CarsNav />
        <CarsList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import CarsList from '@/components/cars/CarsList.vue';
import CarsNav from '@/components/cars/CarsNav.vue';

export default defineComponent({
  name: 'Cars',
  components: {
    CarsList,
    CarsNav,
  },
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      getCars: 'cars/getCars'
    }),
  },
  mounted() {
    this.getCars()
  },
});
</script>
<style lang="scss">
@import '../scss/Cars.scss';
</style>