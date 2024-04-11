<template>
    <table class="table">
      <thead>
        <tr>
          <th role="button" scope="col ">
            {{ $t("id") }}
          </th>
          <th scope="col ">{{ $t("image") }}</th>
     
  
          <th scope="col ">{{ $t("change") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="slider in sliders" :key="slider.id">
          <th scope="row col-1">{{ slider.id }}</th>
       
          <td class="text-capitalize fw-500 col">
            <img :src="imagePath(slider.image)" alt="" />
          </td>
  
          <td class="d-flex flex-row align-items-center">
         
  
            <span
              @click="sliderId = slider.id"
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
    props: ["sliders"],
  
    methods: {
      imagePath(path) {
        return this.$store.state.filePath + path;
      },
      deleteData() {
        this.$emit("delete-data", { id: this.sliderId });
      },
    },
    data() {
      return {
        sliderId: "",
      };
    },
  };
  </script>
  
  <style scoped>
  img {
    height: 100px;
    display: block;
  }
  </style>
  