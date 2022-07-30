<template>
  <div class="about-company">
    <div class="about-company_wrapper">
        <CompanyInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import CompanyInfo from '../components/about-company/CompanyInfo.vue';

export default defineComponent({
  name: 'AboutCompany',
  components: {
    CompanyInfo
},
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      getOneCompany: 'company/getOneCompany'
    }),
  },
  mounted() {
    this.getOneCompany()
  },
});
</script>
<style lang="scss">
@import '../scss/AboutCompany.scss';
</style>