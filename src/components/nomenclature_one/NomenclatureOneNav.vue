<template>
  <div class="nomenclature_nav bg-dark">
    <div class="nomenclature_nav_wrapper">
        <div v-if="nomenclature_one" class="prood_nav_title">{{nomenclature_one?.name}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'NomenclatureOneNav',
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
    nomenclature_one: (state:any)=> state.nomenclature.nomenclature_one
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
.nomenclature_nav{
    height: 100%;
    border-width: 100%;
    display: flex;
    justify-content: center;
}
.nomenclature_nav_wrapper{
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