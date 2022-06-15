<template>
  <div class="company">
    <div class="company_wrapper" :class="{company_wrapper_collapse: collapsed}">
      <div v-for="(elem) in all_company" :key="elem.id" class="all_company">
        <UserCompany :company="elem"/>
      </div>
      <div class="all_company"><CreateCompany /></div>
    </div>
  </div>
</template>

<script lang="ts">
import CreateCompany from '@/components/company/CreateCompany.vue';
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import UserCompany from '../components/company/UserCompany.vue';
import { sidebarWidth, collapsed } from '@/components/sidebar/state'

export default defineComponent({
  name: 'Company',
  components: {
    CreateCompany,
    UserCompany
},
 setup() {
    return { sidebarWidth, collapsed }
  },
  data() {
    return {
    }
  },
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      getCompanies: 'company/getCompanies'
    }),

  },
  computed: mapState({
    all_company: (state:any)=> state.company.all_company,
  }),
  mounted() {
    this.getCompanies()
  },
});
</script>
<style lang="scss">
@import '../scss/Company.scss';
.company{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.company_wrapper{
    margin-top: 20px;
    margin-bottom: 20px;
    height: fit-content;
    width: 98%;
    min-height: 80vh;
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    column-gap: 1.33339%;
    row-gap: 30px;

    @media(max-width: 1350px){
    grid-template-columns: 33% 33% 33%;
    column-gap: 0.5%;
    }
    @media(max-width: calc(1050px)){
    grid-template-columns: 49% 49%;
    column-gap: 2%; 
    }
    @media(max-width: 700px) {
      grid-template-columns: 98%;
    }
}
.company_wrapper_collapse{
@media(max-width: 1450px){
    grid-template-columns: 33% 33% 33%;
    column-gap: 0.5%;
    }
    @media(max-width: calc(1150px)){
    grid-template-columns: 49% 49%;
    column-gap: 1%; 
    }
}
.all_company{
    width: 100%;
    height: 250px;
    max-height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>