<template>
  <div class="pickuppoints">
    <div class="pickuppoints_wrapper">
      <Pickup_pointNav />
      <Pickup_pointTable />
      <PaginationPoint />
      <CreatepointModal v-if="addPointModal"/>
      <ChangePointModal v-if="visibleChangeModal"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import Pickup_pointTable from '@/components/pickuppoint/Pickup_pointTable.vue';
import Pickup_pointNav from '@/components/pickuppoint/Pickup_pointNav.vue';
import PaginationPoint from '@/components/pickuppoint/PaginationPoint.vue';
import CreatepointModal from '@/components/pickuppoint/CreatepointModal.vue';
import ChangePointModal from '@/components/pickuppoint/ChangePointModal.vue';

export default defineComponent({
  name: 'PickUpPoints',
  components: {
    Pickup_pointTable,
    Pickup_pointNav,
    PaginationPoint,
    CreatepointModal,
    ChangePointModal,
},
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      getPoints : 'pickuppoints/getPoints'
    }),
  },
  computed: mapState({
    addPointModal: (state:any)=> state.pickuppoints.addPointModal,
    visibleChangeModal: (state:any)=> state.pickuppoints.visibleChangeModal,
  }),
  mounted() {
    this.getPoints()
  },
});
</script>
<style lang="scss">
@import '../scss/PickUpPoints.scss';
</style>