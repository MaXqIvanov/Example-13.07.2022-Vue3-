<template>
  <div class="proodOne">
    <div class="proodOne_wrapper">
        <PointOneNav />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import PointOneNav from '../components/pickuppoint_one/PointOneNav.vue';

export default defineComponent({
  name: 'ProodOne',
  components: {
    PointOneNav,
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