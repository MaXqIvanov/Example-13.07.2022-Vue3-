<template>
  <div class="prood_table">
    <div class="prood_table_wrapper">
        <div class="nomenclature_suggest_isempty" v-if="nomenclature_suggest_array.length === 0">
            <span>В данный момент вы ещё не предложили ни одну номенклатуру</span>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'SuggestNomenclature',
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
      nomenclature_suggest_array: (state:any)=> state.nomenclature.nomenclature_suggest_array
  }),
  mounted() {
  },
});
</script>
<style lang="scss" scoped>
.nomenclature_suggest_isempty{
    height: 100%;
    width: 100%;
    min-height: 79vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.prood_table{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    
}
.prood_table_wrapper{
    margin-top: 30px;
    height: 100%;
    width: 98%;
    max-width: 98% !important;
    min-height: 82vh;
    cursor: default;
}

</style>