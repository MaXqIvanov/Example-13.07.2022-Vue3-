<template>
  <div class="cars">
    <div class="cars_wrapper">
        <CarsInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import CarsInfo from '@/components/cars/CarsInfo.vue';

export default defineComponent({
  name: 'Home',
  components: {
    CarsInfo,
  },
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
  },
  mounted() {
  },
});
</script>
<style lang="scss">
@import '../scss/Cars.scss';
</style>