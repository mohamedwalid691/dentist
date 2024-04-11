<template>
    <table class="table">
      <thead>
        <tr>
          <th role="button" scope="col ">
            {{ $t("id") }}
          </th>
          <th scope="col ">{{ $t("nameEn") }}</th>
          <th scope="col ">{{ $t("nameAr") }}</th>
          <th scope="col ">{{ $t("color") }}</th>
  
          <th scope="col ">{{ $t("change") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="color in colors" :key="color.id">
          <th scope="row col-1">{{ color.id }}</th>
          <td class="fw-500 col text-capitalize">{{ color.name_en }}</td>
  
          <td class="text-capitalize fw-500 col">{{ color.name_ar }}</td>
          <td class="text-capitalize fw-500 col">
           <div class="color-circle" :style="backgroundColor=color.color"></div>
          </td>
  
          <td class="d-flex flex-row align-items-center">
         
  
            <span
              @click="colorId = color.id"
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
    props: ["colors"],
  
    methods: {
     
      deleteData() {
        this.$emit("delete-data", { id: this.colorId });
      },
    },
    data() {
      return {
        colorId: "",
      };
    },
  };
  </script>
  
  <style scoped>
  .color-circle {
    height: 50px;
  width: 50px;
  border-radius: 50%;
  }
  </style>
  