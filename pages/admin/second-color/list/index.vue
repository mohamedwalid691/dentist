<template>
    <div class="admin-content col-10 no-gutters">
      <div class="mx-5 mt-5">
        <h1 class="text-capitalize h3 text-body">{{ $t("colors") }}</h1>
  
        <div class="rder bg-white rounded shadow-sm px-2 py-2 mt-4">
    
  
          <second-color-table :colors="$store.state.secondc.colors"
          @delete-data="deleteData"/>
          <pagination-nav
            :links="$store.state.reusable.links"
            @change-page="changePage"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PaginationNav from '~/components/admin/reusalbe/PaginationNav.vue';
import SecondColorTable from '~/components/tables/SecondColorTable.vue';

  
  
  
  export default {
    components: {
      
  
      
      PaginationNav,
        SecondColorTable,
     
    },
  
    layout: "admin",
    async created() {
      this.$store.dispatch("secondc/paginationData", {
        page: this.$route.query.page,
      });
    },
    methods: {
      changePage(page) {
        this.$store.dispatch("secondc/paginationData", {
          page: page,
          order: this.$route.query.order,
          orderBy: this.$route.query.orderBy,
        });
      },
  
      deleteData({ id }) {
        this.$store.dispatch("secondc/deleteData", id);
      },
    },
  };
  </script>
  
  <style></style>
  