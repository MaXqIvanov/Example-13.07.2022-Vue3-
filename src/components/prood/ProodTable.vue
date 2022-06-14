<template>
  <div class="prood_table">
    <div class="prood_table_wrapper">
        <table class="table table-bordered table-dark custom_table">
            <thead class="thead">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">наименование</th>
                    <th scope="col">стоимость</th>
                    <th scope="col">количество</th>
                    <th scope="col">адресс</th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="prood in proods_all" :key="prood.id">
                <th scope="row">{{ prood.id }}</th>
                <td>{{ prood._nomenclature }}</td>
                <td>{{ prood.cost }}</td>
                <td>{{ prood.count }}</td>
                <td>{{ prood._shop }}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'ProodTable',
  data() {
    return {
    }
  },
  components: {
  },
   methods: {  
    ...mapMutations({
    }),
    ...mapActions({
    }),
  },
  computed: mapState({
    proods_all: (state:any)=> state.proods.proods_all,
  }),
  mounted() {
  },
});
</script>
<style lang="scss" scoped>

.prood_table{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    
}
.prood_table_wrapper{
    margin-top: 15px;
    height: 100%;
    width: 98%;
    max-width: 98% !important;
    min-height: 80vh;
    margin-right: 2px;
    @media(max-width: 1300px){
      margin-right: 5px;
    }
}

</style>