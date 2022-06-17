<template>
  <div class="proodOne">
    <div class="proodOne_wrapper">
        <ProodOneNav />
        <ProodOneInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import ProodOneInfo from '../components/prood_one/ProodOne-Info.vue';
import ProodOneNav from '../components/prood_one/ProodOneNav.vue';

export default defineComponent({
  name: 'ProodOne',
  components: {
    ProodOneInfo,
    ProodOneNav,
},
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      getOneProod: 'proods/getOneProod'
    }),
  },
  computed: mapState({
  }),
  mounted() {
    this.getOneProod()
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