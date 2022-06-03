<template>
    <div class="block_userAction">
        <div class="block_userAction_wrapper">
            <div>
                <h2>Компания</h2>
            </div>
            <div v-if="userCompany.length === 0">В данный момент вы ещё не зарегистрировали ни одну компанию</div>
            <div class="btn_addCompany">
                <button @click="changeIsVisibleModalAddCompany" type="button" class="btn btn-primary">Добавить компанию</button>
            </div>
        </div>
        <ModalAddCompany :isVisibleModalAddCompany="isVisibleModalAddCompany"
        :changeIsVisibleModalAddCompany="changeIsVisibleModalAddCompany"
        v-if="isVisibleModalAddCompany"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import ModalAddCompany from './ModalAddCompany.vue';
export default defineComponent({
  name: 'UserAction',
  components: {
    ModalAddCompany
},
  data() {
      return {
        isVisibleModalAddCompany: false
      }
  },
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
    changeIsVisibleModalAddCompany() {
        this.isVisibleModalAddCompany = !this.isVisibleModalAddCompany
    }
  },
  computed: mapState({
    userCompany: (state:any)=> state.user.userCompany,
  }),
  mounted() {}
});
</script>
<style lang="scss" scoped>
.block_userAction{
    margin-top: 20px;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
}
.block_userAction_wrapper{
    height: 100%;
    width: fit-content;
    min-width: 550px;
    text-align: left;

    @media(max-width: 630px){
        min-width: 350px;
    }
}
.btn_addCompany{
    margin-top: 5px;
}
</style>
