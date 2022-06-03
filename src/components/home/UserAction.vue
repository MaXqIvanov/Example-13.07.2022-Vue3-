<template>
    <div class="block_userAction">
        <div class="block_userAction_wrapper">
            <div>
                <h2>Компания</h2>
            </div>
            <div>
                <button type="button" class="btn btn-primary">Добавить компанию</button>
            </div>
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
  },
  methods: {  
    ...mapMutations({
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
.block_userAction{
    margin-top: 20px;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
}
.block_userAction_wrapper{
    height: 100%;
    width: 100%;
}
</style>
