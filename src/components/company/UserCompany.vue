<template>
    <div class="user_company_main" :style="[company.id == choose_company ? {boxShadow: '0px 0px 5px rgb(20, 145, 247)', background: 'rgb(247, 255, 255)'} :'']">
      <div :style="[company.id == choose_company ? {opacity: '100%'} : '']"
      @click="isDeleteCompany && chooseCompany(company.id)" class="wrapper_user_company_main" title="посмотреть подробнее информацию о компании">
        <div class="company_name">{{ company.short_name }}</div>
        <div class="company_description">{{ company.description }}</div>
        <img :src="company.img" class="company_img">
        <div :style="[company.approved == true ? {backgroundImage: `url(${company_accept})`}
        :{backgroundImage: `url(${company_wait})`}]" class="company_status"></div>
        <div @mouseenter="changeIsDeleteCompany" @mouseleave="changeIsDeleteCompany"
        @click="deleteCompany(company.id)" class="delete-icon"></div>
      </div>
    </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import company_accept from '../../assets/company/company_accept.svg';
import company_wait from '../../assets/company/company_wait.svg';

export default defineComponent({
  name: 'UserCompany',
  props: ['company'],
  setup() {
    return { company_accept, company_wait }
  },
  data() {
    return {
      isDeleteCompany: true,
    }
  },
  components: {
  },
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
        chooseCompany: 'company/chooseCompany',
        deleteCompany: 'company/deleteCompany'
    }),
    changeIsDeleteCompany(){
      this.isDeleteCompany = !this.isDeleteCompany
    },
  },
  mounted() {
  },
  computed: mapState({
    choose_company: (state:any)=> state.company.choose_company,
  }),
});
</script>
<style lang="scss" scoped>
.delete-icon{
  position: absolute;
  top: -5px;
  right: -5px;
  height: 20px;
  width: 20px;
  background-image: url('../../assets/close_btn.svg');
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.5;
  z-index: 999;
  &:hover{
    opacity: 0.6;
  }
}
.company_status{
    position: absolute;
    bottom: 0px;
    right: 0px;
    height: 25px;
    width: 25px;
    background-size: contain;
    background-repeat: no-repeat;
}
.company_name{
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 0);
}
.company_description{
    position: absolute;
    top: 20%;
    left: 5px;
    font-size: small;
    overflow-y: scroll;
    height: 150px;
}
.company_img{
    width: 35px;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    left: 0px;
}
.user_company_main{
    height: 100%;
    width: 300px;
    min-width: 300px;
    box-shadow: 0px 0px 5px rgba($color: gray, $alpha: 0.7);
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: linear 0.3s all;
    &:hover{
        box-shadow: 0px 0px 5px rgba($color: rgb(20, 145, 247), $alpha: 1);
    }
}
.wrapper_user_company_main{
    height: 90%;
    width: 90%;
    position: relative;
    opacity: 0.8;
    font-family: 'Montserrat', sans-serif;
    &:hover{
        opacity: 1;
    }
}
</style>