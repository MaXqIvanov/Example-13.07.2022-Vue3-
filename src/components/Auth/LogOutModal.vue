<template>
  <div class="block_authModal">
    <div class="block_authModal_wrapper">
      <div>
        <h2>Выйти из системы</h2>
        <form @submit.prevent>
            <div class="wrapper_btn_logout">
                <button @click="userLogOut()" type="submit" class="btn btn-primary custom_style_btn_logout">Выйти</button>
            </div>
        </form>
        <!-- <div title="закрыть окно" class="btn_authModal"></div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
export default defineComponent({
  name: 'LogOutModal',
  components: {
  },
  data() {
    return {
      
    }
  },
  methods: {  
    ...mapMutations({
        userLogOut: 'user/userLogOut'
    }),
    ...mapActions({
    }),
  },
  computed: mapState({
  }),
  mounted() {}
});
</script>
<style lang="scss" scoped>
.block_authModal_wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper_btn_logout{
    width: 100%;
    display: flex;
    justify-content: center;
}
.custom_style_btn_logout{
    margin-top: 15px;
    padding-left: 30px;
    padding-right: 30px;
}
</style>
