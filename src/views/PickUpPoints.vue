<template>
  <div class="pickuppoints">
    <div class="pickuppoints_wrapper">
      <Pickup_pointNav />
      <Pickup_pointTable />
      <PaginationPoint />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import Pickup_pointTable from '@/components/pickuppoint/Pickup_pointTable.vue';
import Pickup_pointNav from '@/components/pickuppoint/Pickup_pointNav.vue';
import PaginationPoint from '@/components/pickuppoint/PaginationPoint.vue';

export default defineComponent({
  name: 'PickUpPoints',
  components: {
    Pickup_pointTable,
    Pickup_pointNav,
    PaginationPoint
},
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      getPoints : 'pickuppoints/getPoints'
    }),
  },
  mounted() {
    this.getPoints()
  },
});
</script>
<style lang="scss">
@import '../scss/PickUpPoints.scss';
</style>