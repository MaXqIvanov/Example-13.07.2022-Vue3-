<template>
  <div class="nomenclatureOne">
    <div class="nomenclatureOne_wrapper">
        <NomenclatureOneNav />
        <NomenclatureOneInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import NomenclatureOneNav from '@/components/nomenclature_one/NomenclatureOneNav.vue';
import NomenclatureOneInfo from '@/components/nomenclature_one/NomenclatureOneInfo.vue';

export default defineComponent({
  name: 'NomenclatureOne',
  components: {
    NomenclatureOneNav,
    NomenclatureOneInfo
},
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      getOneNomenclature: 'nomenclature/getOneNomenclature',
    }),
  },
  mounted() {
    this.getOneNomenclature()
  },
});
</script>
<style lang="scss" scoped>
</style>