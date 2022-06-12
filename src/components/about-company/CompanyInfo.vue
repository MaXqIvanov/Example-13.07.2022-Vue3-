<template>
    <div class="block_CarsInfo">
      <div class="block_CarsInfo_wrapper">
          <div :style="{backgroundImage: `url(${one_company.img})`}" class="carsinfo_image"></div>
          <div class="carsinfo_full_name">{{ one_company.full_name }}</div>
          <div class="carsinfo_short_name">{{ one_company.short_name }}</div>
          <div class="carsinfo_description"><span>описание компани:</span> {{ one_company.description }}</div>
          <div title="инн компании" class="carsinfo_inn"><span>инн:</span> {{ one_company.inn }}</div>
          <span title="Статус компании" class="carsinfo_approved"><span>статус компании: </span>
            <div :style="[one_company.approved == true ? {backgroundImage: `url(${company_accept})`}
            :{backgroundImage: `url(${company_wait})`}]" class="carsinfo_approved_img"></div>
          </span>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import company_accept from '../../assets/company/company_accept.svg';
import company_wait from '../../assets/company/company_wait.svg';

export default defineComponent({
  name: 'CompanyInfo',
  components: {
  },
  data() {
  },
  setup() {
    return { company_accept, company_wait }
  },
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
  },
  computed: mapState({
    one_company: (state:any)=> state.company.one_company,
  }),
  mounted() {}
});
</script>
<style lang="scss" scoped>
.block_CarsInfo{
    height: fit-content;
    width: 100%;
}
.block_CarsInfo_wrapper{
    height: 310px;
    width: 100%;
    position: relative;
    font-family: 'Montserrat', sans-serif;

    @media(max-width: 980px){
        height: 600px;    
    }
}
.carsinfo_image{
    position: absolute;
    top: 0px;
    left: 0px;
    height: 280px;
    width: 280px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 0px 5px gray ;
    border-radius: 25px;

    @media(max-width: 980px){
        left: 50%;
        transform: translate(-50%, 0);
    }
}
.carsinfo_full_name{
    position: absolute;
    top: 0px;
    left: 310px;
    font-size: x-large;

    @media(max-width: 980px){
        top: 310px;
        left: 0px; 
    }
}
.carsinfo_short_name{
    position: absolute;
    top: 35px;
    font-size: x-large;
    left: 310px;

    @media(max-width: 980px){
        top: 340px;
        left: 0px; 
    }
}

.carsinfo_description{
    position: absolute;
    top: 140px;
    left: 310px;
    overflow-y: scroll;
    height: 150px;
    
    @media(max-width: 980px){
        top: 435px;
        left: 0px; 
    }
    span{
        text-decoration: underline;
        cursor: default;
    }
}

.carsinfo_inn{
    position: absolute;
    top: 75px;
    left: 310px;

    @media(max-width: 980px){
        top: 375px;
        left: 0px; 
    }
    span{
        text-decoration: underline;

        &:hover{
            cursor: default;
        }
    }
}
.carsinfo_approved{
    position: absolute;
    top: 105px;
    left: 310px;
    width: fit-content;
    display: flex;

    @media(max-width: 980px){
        top: 405px;
        left: 0px; 
    }
    span{
        text-decoration: underline;

        &:hover{
            cursor: default;
        }
    }
}
.carsinfo_approved_img{
    margin-left: 10px;
    height: 20px;
    width: 20px;
    background-size: contain;
}
</style>
