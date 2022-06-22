<template>
  <div class="nomenclature">
    <div class="nomenclature_wrapper">
        <NomenclatureNav />
        <!-- <NomenclatureAll /> -->
        <NomenclatureTable />
        <PaginationNom />
        <CreatenomenclatureModal v-if="isCreateNomenclatureModal"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import NomenclatureNav from '../components/nomenclature/NomenclatureNav.vue';
import NomenclatureAll from '@/components/nomenclature/NomenclatureAll.vue';
import NomenclatureTable from '@/components/nomenclature/NomenclatureTable.vue';
import PaginationNom from '@/components/nomenclature/PaginationNom.vue';
import CreatenomenclatureModal from '@/components/nomenclature/CreatenomenclatureModal.vue';

export default defineComponent({
  name: 'Nomenclature',
  components: {
    NomenclatureNav,
    NomenclatureAll,
    NomenclatureTable,
    PaginationNom,
    CreatenomenclatureModal
},
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
        getNomenclature: 'nomenclature/getNomenclature'
    }),
  },
  computed: mapState({
    isCreateNomenclatureModal: (state:any)=> state.nomenclature.isCreateNomenclatureModal,
  }),
  mounted() {
      this.getNomenclature();
  },
});
</script>
<style lang="scss">
@import '../scss/Nomenclature.scss';
</style>