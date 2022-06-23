<template>
  <div class="proods">
    <div class="proods_wrapper">
      <ProodNav />
      <ProodTable />
      <Pagination />
      <CreateproodModal v-if="isCreateProodModal"/>
      <ChangeProodModal v-if="visibleChangeProodModal"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import ProodTable from '@/components/prood/ProodTable.vue';
import ProodNav from '../components/prood/ProodNav.vue';
import Pagination from '@/components/prood/Pagination.vue';
import CreateproodModal from '@/components/prood/CreateproodModal.vue';
import ChangeProodModal from '@/components/prood/ChangeProodModal.vue';

export default defineComponent({
  name: 'Proods',
  components: {
    ProodTable,
    ProodNav,
    Pagination,
    CreateproodModal,
    ChangeProodModal
},
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      getProods: 'proods/getProods'
    }),
  },
  computed: mapState({
    isCreateProodModal: (state:any)=> state.proods.isCreateProodModal,
    visibleChangeProodModal: (state:any)=> state.proods.visibleChangeProodModal,
  }),
  mounted() {
    this.getProods(1)
  },
});
</script>
<style lang="scss">
@import '../scss/Proods.scss';
</style>