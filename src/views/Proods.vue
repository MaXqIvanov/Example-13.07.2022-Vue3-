<template>
  <div class="proods">
    <div class="proods_wrapper">
      <ProodNav />
      <ProodTable />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import ProodTable from '@/components/prood/ProodTable.vue';
import ProodNav from '../components/prood/ProodNav.vue';

export default defineComponent({
  name: 'Proods',
  components: {
    ProodTable,
    ProodNav
},
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      getProods: 'proods/getProods'
    }),
  },
  mounted() {
    this.getProods()
  },
});
</script>
<style lang="scss">
@import '../scss/Proods.scss';
</style>