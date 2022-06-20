<template>
  <div class="proodOne">
    <div class="proodOne_wrapper">
        <PointOneNav />
        <PointOneInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import PointOneNav from '../components/pickuppoint_one/PointOneNav.vue';
import PointOneInfo from '@/components/pickuppoint_one/PointOneInfo.vue';

export default defineComponent({
  name: 'PickUpPointOne',
  components: {
    PointOneNav,
    PointOneInfo
},
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      getOnePoint: 'pickuppoints/getOnePoint'
    }),
  },
  computed: mapState({
  }),
  mounted() {
    this.getOnePoint()
  },
});
</script>
<style lang="scss" scoped>
.proodOne{
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.proodOne_wrapper{
  height: 100%;
  width: 100%;
  min-height: 100vh;
}
</style>
<style lang="scss">
.mapboxgl-popup{
  min-width: 300px !important;
}
</style>