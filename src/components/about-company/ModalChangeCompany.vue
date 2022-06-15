<template>
    <div class="block_changeCompany">
      <div class="block_changeCompany_wrapper">
        <h4>Изменить данные компании</h4>

        <div @click="ChangeCompanyVisible" class="close_btn"></div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'ModalChangeCompany',
  components: {
  },
  data() {
  },
  setup() {
    return {  }
  },
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      ChangeCompanyVisible: 'company/ChangeCompanyVisible',
    }),
  },
  computed: mapState({
  }),
  mounted() {}
});
</script>
<style lang="scss" scoped>
    .block_changeCompany{
        height: 600px;
        width: 400px;
        box-shadow: 0px 0px 5px gray;
        border-radius: 10px;
        background: white;
        position: fixed;
        top: 50%;
        left: calc(50% + 47px);
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center ;
    }
    .block_changeCompany_wrapper{
      width: 96%;
      height: 96%;
      font-family: 'Montserrat', sans-serif;
      position: relative;
    }
    .close_btn{
      background-image: url('../../assets/close_btn.svg');
      height: 20px;
      width: 20px;
      position: absolute;
      top: -7px;
      right: -3px;
      cursor: pointer;
      opacity: 0.6;
      &:hover{
        opacity: 0.8;
      }
    }
</style>
