<template>
  <div class="prood_nav bg-dark">
    <div class="prood_nav_wrapper">
        <div v-if="nomenclature_one" class="prood_nav_title">{{nomenclature_one?.name}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'ProodOneNav',
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
    prood_one: (state:any)=> state.proods.prood_one,
    nomenclature_one: (state:any)=> state.nomenclature.nomenclature_one,
  }),
  mounted() {
  },
});
</script>
<style lang="scss" scoped>

.prood_nav_title{
    font-size: large;
    overflow-x: hidden;
    @media(max-width: 1200px){
        font-size: medium;
    }
    @media(max-width: 630px){
        font-size: small;
    }
}
.prood_nav{
    height: 100%;
    border-width: 100%;
    display: flex;
    justify-content: center;
}
.prood_nav_wrapper{
    height: 50px;
    width: 97%;
    color: white;
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    justify-content: space-between;
    font-size: x-large;
}
</style>