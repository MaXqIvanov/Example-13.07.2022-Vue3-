<template>
    <div class="create_company_main">
      <div title="создать новую компанию" class="wrapper_create_company_main">
      </div>
    </div>
    <div>
        <ModalAddCompany />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import ModalAddCompany from './ModalAddCompany.vue';

export default defineComponent({
  name: 'CreateCompany',
  components: {
    ModalAddCompany
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
.create_company_main{
    height: 100%;
    width: 300px;
    min-width: 300px;
    box-shadow: 0px 0px 5px rgba($color: gray, $alpha: 0.7);
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: linear 0.3s all;
    &:hover{
        box-shadow: 0px 0px 5px rgba($color: rgb(20, 145, 247), $alpha: 1);
    }
}
.wrapper_create_company_main{
    height: 90%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-image: url('../../assets/company/add_anything_v2.svg');
    background-size: 50%, 50%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.4;

    &:hover{
        opacity: 0.6;
    }
}

</style>