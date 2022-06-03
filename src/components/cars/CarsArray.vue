<template>
    <div class="block_CarsArray">
        123
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';
export default defineComponent({
  name: 'CarsArray',
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
.block_CarsArray{
    margin-top: 20px;
    height: fit-content;
    width: 100%;
    background: red;
}
</style>
