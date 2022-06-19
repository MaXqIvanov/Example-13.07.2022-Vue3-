<template>
  <div class="prood_pagination">
    <div class="prood_pagination_wrapper">
        <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item">
                <button class="page-link custom_link" @click="changeCurrentPage(current_page_nomenclature - 1)" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </button>
            </li>
            <div @click="changeCurrentPage(page)" v-for="page in page_count_nomenclature" :key="page">
                    <li :class="{'active': page == current_page_nomenclature}" class="page-item"><button class="page-link custom_link">{{ page }}</button></li>
            </div>
            <li class="page-item">
            <button class="page-link custom_link" @click="changeCurrentPage(current_page_nomenclature + 1)" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </button>
            </li>
        </ul>
        </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapMutations, mapState } from 'vuex';

export default defineComponent({
  name: 'PaginationNom',
  data() {
    return {
    }
  },
  components: {
  },
   methods: {  
    ...mapMutations({
        changeCurrentPage: 'nomenclature/changeCurrentPage',
    }),
    ...mapActions({
    }),
  },
  computed: mapState({
      page_count_nomenclature: (state:any)=>state.nomenclature.page_count_nomenclature,
      current_page_nomenclature: (state:any)=>state.nomenclature.current_page_nomenclature,
  }),
  mounted() {
  },
});
</script>
<style lang="scss" scoped>
.page-item.active .page-link{
    background-color: rgb(33,37,41) !important;
    border-color: white !important;
    color: white !important;
}
.custom_link{
    color: rgb(33,37,41) !important;
}
.prood_pagination{
    width: 100%;
    display: flex;
    justify-content: center;
}
.prood_pagination_wrapper{
    margin-top: 10px;
    width: 98%;
}
</style>