<template>
  <div class="nomenclatureOne">
    <div class="nomenclatureOne_wrapper">
        1_nomenclature
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'NomenclatureOne',
  components: {
},
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
  },
  mounted() {
  },
});
</script>
<style lang="scss" scoped>
</style>