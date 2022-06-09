<template>
    <div class="block_userAction">
        <div class="block_userAction_wrapper">
           123
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
export default defineComponent({
  name: 'UserAction',
  components: {
},
  data() {
      return {
      }
  },
  methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
  },
  computed: mapState({
    userCompany: (state:any)=> state.user.userCompany,
  }),
  mounted() {}
});
</script>
<style lang="scss" scoped>

</style>
