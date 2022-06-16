<template>
  <div class="proods">
    <div class="proods_wrapper">
      <ProodNav />
      <ProodTable />
      <Pagination />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import ProodTable from '@/components/prood/ProodTable.vue';
import ProodNav from '../components/prood/ProodNav.vue';
import Pagination from '@/components/prood/Pagination.vue';

export default defineComponent({
  name: 'Proods',
  components: {
    ProodTable,
    ProodNav,
    Pagination
},
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      getProods: 'proods/getProods'
    }),
  },
  mounted() {
    this.getProods(2)
  },
});
</script>
<style lang="scss">
@import '../scss/Proods.scss';
</style>