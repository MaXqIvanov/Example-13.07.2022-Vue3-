<template>
    <div class="block_userInfo">
        <div class="block_userInfo_group">
            <div class="userinfo_name">
                Имя пользователя: {{userInfo.name}}
            </div>
            <div class="userinfo_phone">
                Телефон пользователя: {{userInfo.phone}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
export default defineComponent({
  name: 'UserInfo',
  components: {
  },
  data() {
  },
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
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
