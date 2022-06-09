<template>
  <div class="about-company">
    <div class="about-company_wrapper">
        О компании
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'AboutCompany',
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
<style lang="scss">
@import '../scss/AboutCompany.scss';
</style>