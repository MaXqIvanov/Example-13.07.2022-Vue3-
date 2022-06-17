<template>
  <div class="pickuppoints_map">
    <div class="pickuppoints_map_wrapper">
        maps
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'Pickup_pointMap',
  data() {
    return {
    }
  },
  components: {
  },
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
  },
  computed: mapState({
  }),
  mounted() {
  },
});
</script>
<style lang="scss" scoped>

.pickuppoints_map_wrapper{
    margin-top: 10px;
    height: 100%;
    width: 98%;
    max-width: 98% !important;
    min-height: 400px;
    margin-right: 2px;
    cursor: default;
    @media(max-width: 1300px){
      margin-right: 5px;
    }
}
.pickuppoints_map{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    
}
</style>