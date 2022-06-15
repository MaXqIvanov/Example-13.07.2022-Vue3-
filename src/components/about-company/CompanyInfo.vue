<template>
    <div class="block_CarsInfo">
      <div class="block_CarsInfo_wrapper">
          <div :style="{backgroundImage: `url(${one_company.img})`}" class="carsinfo_image"></div>
          <div class="btn_group_company">
              <div @click="deleteCompany(one_company.id)" class="btn btn-success me-2 btn_delete_company">удалить</div>
              <div @click="ChangeCompanyVisible" class="btn btn-primary btn_change_company">изменить</div>
          </div>
          <div class="block_carsinfo_info">
                <div class="carsinfo_full_name">{{ one_company.full_name }}</div>
                <div class="carsinfo_short_name">{{ one_company.short_name }}</div>
                <div v-if="one_company.inn" title="инн компании" class="carsinfo_inn"><span>инн:</span> {{ one_company.inn }}</div>
                <span v-if="one_company.approved" title="Статус компании" class="carsinfo_approved"><span>статус компании: </span>
                    <div :style="[one_company.approved == true ? {backgroundImage: `url(${company_accept})`}
                    :{backgroundImage: `url(${company_wait})`}]" class="carsinfo_approved_img"></div>
                </span>
                <div v-if="one_company.bank_name" class="carsinfo_bank_name"><span>банк:</span>{{ one_company.bank_name }}</div>
                <div v-if="one_company.bik" class="carsinfo_bik"><span>бик:</span>{{ one_company.bik }}</div>
                <div v-if="one_company.checking_account" class="carsinfo_checking_account"><span>расчетный счет: </span>{{ one_company.checking_account }}</div>
                <div v-if="one_company.correspondent_account" class="carsinfo_correspondent_account"><span>корреспондентский счет:</span>{{ one_company.correspondent_account }}</div>
                <div v-if="one_company.fact_address" class="carsinfo_fact_address"><span>фактический адрес: </span>{{ one_company.fact_address }}</div>
                <div v-if="one_company.legal_address" class="carsinfo_legal_address"><span>юридический адрес: </span>{{ one_company.legal_address }}</div>
                 <div v-if="one_company.ogrn" class="carsinfo_ogrn"><span>огрн:</span>{{ one_company.ogrn }}</div>
                <!-- this is last stroke -->
                <div v-if="one_company.description" class="carsinfo_description"><span>описание компани: </span> {{ one_company.description }}</div>
          </div>
          <ModalChangeCompany v-if="visibleChangeCompany"/>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import company_accept from '../../assets/company/company_accept.svg';
import company_wait from '../../assets/company/company_wait.svg';
import ModalChangeCompany from './ModalChangeCompany.vue';

export default defineComponent({
  name: 'CompanyInfo',
  components: {
    ModalChangeCompany
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
        deleteCompany: 'company/deleteCompany',
        ChangeCompanyVisible: 'company/ChangeCompanyVisible',
    }),
  },
  computed: mapState({
    one_company: (state:any)=> state.company.one_company,
    visibleChangeCompany: (state:any)=> state.company.visibleChangeCompany,
  }),
  mounted() {}
});
</script>
<style lang="scss" scoped>
.btn_group_company{
    height: fit-content;
    width: fit-content;
    position: absolute;
    left: 40px;
    top: 290px;
    @media(max-width: 1000px){
        top: 300px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    display: flex;
}
.block_CarsInfo{
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: center;
}
.block_CarsInfo_wrapper{
    height: 310px;
    width: 90%;
    position: relative;
    font-family: 'Montserrat', sans-serif;

    @media(max-width: 980px){
        height: 600px;
        display: flex;
        justify-content: center;    
    }

}
.block_carsinfo_info{
    height: fit-content;
    width: calc(100% - 300px);
    margin-left: 300px;

    @media(max-width: 980px){
        width: 90%;
        margin-left: 0px;
        padding-top: 320px;
    }
}
.carsinfo_ogrn{
    height: fit-content;
    span{
        text-decoration: underline;
        cursor: default;
    }
}
.carsinfo_legal_address{
    height: fit-content;
    span{
        text-decoration: underline;
        cursor: default;
    }
}
.carsinfo_fact_address{
      height: fit-content;
    span{
        text-decoration: underline;
        cursor: default;
    }
}
.carsinfo_correspondent_account{
    height: fit-content;
    span{
        text-decoration: underline;
        cursor: default;
    }
}
.carsinfo_checking_account{
    height: fit-content;
    span{
        text-decoration: underline;
        cursor: default;
    }
}
.carsinfo_bik{
    height: fit-content;
    span{
        text-decoration: underline;
        cursor: default;
    }
}
.carsinfo_bank_name{
    height: fit-content;
    span{
        text-decoration: underline;
        cursor: default;
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
    font-size: x-large;
}
.carsinfo_short_name{
    font-size: large;
}

.carsinfo_description{
    overflow-y: scroll;
    height: 150px;
    span{
        text-decoration: underline;
        cursor: default;
    }
    @media(min-width: 1000px){
        width: 50%;
    }
    @media(max-width: 630px){
        height: fit-content;
    }
}

.carsinfo_inn{
    span{
        text-decoration: underline;

        &:hover{
            cursor: default;
        }
    }
}
.carsinfo_approved{
    width: fit-content;
    display: flex;

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
