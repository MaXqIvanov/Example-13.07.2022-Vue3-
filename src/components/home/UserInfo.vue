<template>
    <div class="block_userInfo">
        <div class="block_userInfo_group">
            <h2>Профиль пользователя</h2>
            <div class="userinfo_name">
                <div class="group_change_name">
                    Имя пользователя: {{userInfo?.name}}<div @click="changeVisibleModal" class="btn_change_name"></div>
                </div>
            </div>
            <div class="userinfo_phone">
                <!-- change this line on email -->
                Телефон пользователя: {{userInfo.phone}}
            </div>
        </div>
    </div>
    <ModalChange :changeVisibleModal="changeVisibleModal" title="изменить имя" v-if="isVisibleModal"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import ModalChange from './ModalChange.vue';
export default defineComponent({
  name: 'UserInfo',
  components: {
    ModalChange
  },
  data() {
      return {
          isVisibleModal: false,
      }
  },
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
      changeNameProfileUser: 'user/changeNameProfileUser'
    }),
    changeVisibleModal() {
        this.isVisibleModal = !this.isVisibleModal;
    }
  },
  computed: mapState({
      userInfo: (state:any)=> state.user.userInfo,
  }),
  mounted() {}
});
</script>
<style lang="scss" scoped>
.userinfo_name{
    width: 100%;
    text-align: left;
}
.userinfo_phone{
    width: 100%;
    text-align: left;
    margin-top: 10px;
}
</style>
