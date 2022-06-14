<template>
  <div class="nomenclature_table">
    <div class="nomenclature_table_wrapper">
        <div class="one_nomenclature" v-for="nomenclature in nomenclature_all" :key="nomenclature.id">
            <div>{{ nomenclature.id }}</div>
            <div>{{ nomenclature.name }}</div>
            <div>{{ nomenclature.middle_cost }}</div>
            <div>
              <div>{{ nomenclature.height }}</div>
              <div>{{ nomenclature.width }}</div>
              <div>{{ nomenclature.long }}</div>
              <div style="{backgroundImage: `url(nomenclature.images[0])`}"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'NomenclatureTable',
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
      nomenclature_all: (state:any)=> state.nomenclature.nomenclature_all,
  }),
  mounted() {
  },
});
</script>
<style lang="scss" scoped>
.one_nomenclature{
  border: 1px solid black;
  height: 250px;
  width: 250px;
}
.nomenclature_table{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    
}
.nomenclature_table_wrapper{
    margin-top: 15px;
    height: 100%;
    width: 98%;
    max-width: 98% !important;
    min-height: 80vh;
    border: 1px solid black;
}

</style>