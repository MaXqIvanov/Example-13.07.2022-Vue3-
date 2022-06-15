<template>
  <div class="nomenclature">
    <div class="nomenclature_wrapper">
        <NomenclatureNav />
        <!-- <NomenclatureAll /> -->
        <NomenclatureTable />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import NomenclatureNav from '../components/nomenclature/NomenclatureNav.vue';
import NomenclatureAll from '@/components/nomenclature/NomenclatureAll.vue';
import NomenclatureTable from '@/components/nomenclature/NomenclatureTable.vue';

export default defineComponent({
  name: 'Nomenclature',
  components: {
    NomenclatureNav,
    NomenclatureAll,
    NomenclatureTable
},
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
        getNomenclature: 'nomenclature/getNomenclature'
    }),
  },
  mounted() {
      this.getNomenclature();
  },
});
</script>
<style lang="scss">
@import '../scss/Nomenclature.scss';
</style>