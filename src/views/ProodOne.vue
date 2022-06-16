<template>
  <div class="proodOne">
    <div class="proodOne_wrapper">
        {{prood_one.id}}
        {{nomenclature_one.id}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'ProodOne',
  components: {
},
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      getOneProod: 'proods/getOneProod'
    }),
  },
  computed: mapState({
    prood_one: (state:any)=> state.proods.prood_one,
    nomenclature_one: (state:any)=> state.nomenclature.nomenclature_one,
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
  height: 98%;
  width: 98%;
  min-height: 96vh;
}
</style>