<template>
    <table class="table">
      <thead>
        <tr>
          <th role="button" scope="col ">
            {{ $t("id") }}
          </th>
          <th scope="col ">{{ $t("name") }}</th>
          <th scope="col ">{{ $t("email") }}</th>
          <th scope="col ">{{ $t("mobile") }}</th>
    
          <th scope="col ">{{ $t("change") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="admin in admins" :key="admin.id">
          <th scope="row col-1">{{ admin.id }}</th>
          <td class="fw-500 col text-capitalize">{{ admin.name }}</td>
  
          <td class="text-capitalize fw-500 col">{{ admin.email }}</td>
          <td class="fw-500 col text-capitalize">{{ admin.mobile }}</td>
  
  
          <td class="d-flex flex-row align-items-center">
       
  
            <span
              @click="adminId = admin.id"
              data-bs-toggle="modal"
              data-bs-target="#delete-model"
              role="button"
              class="rounded-circle table-icon__circle bg-danger mx-2"
            >
              <i class="far fa-trash-alt text-white"></i>
            </span>
  
            <delete-model @delete-data="deleteData" />
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  
  import DeleteModel from "../reusable/DeleteModel.vue";
  export default {
    components: { DeleteModel },
    props: ["admins"],
  
    methods: {
    
      deleteData() {
        this.$emit("delete-data", { id: this.adminId });
      },
    },
    data() {
      return {
        adminId: "",
      };
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  