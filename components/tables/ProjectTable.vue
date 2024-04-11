<template>
    <table class="table">
      <thead>
        <tr>
          <th role="button" scope="col ">
            {{ $t("id") }}
          </th>
          <th scope="col ">{{ $t("nameEn") }}</th>
          <th scope="col ">{{ $t("nameAr") }}</th>
          <th scope="col ">{{ $t("descriptionEn") }}</th>
          <th scope="col ">{{ $t("descriptionAr") }}</th>
          <th scope="col ">{{ $t("nameAr") }}</th>
          <th scope="col ">{{ $t("image") }}</th>
  
          <th scope="col ">{{ $t("change") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <th scope="row col-1">{{ project.id }}</th>
          <td class="fw-500 col text-capitalize">{{ project.name_en }}</td>
  
          <td class="text-capitalize fw-500 col">{{ project.name_en }}</td>
          <td class="fw-500 col text-capitalize">{{ project.description_en }}</td>
  
          <td class="text-capitalize fw-500 col">{{ project.description_ar }}</td>
          <td class="text-capitalize fw-500 col">
            <img :src="imagePath(project.image)" alt="" />
          </td>
  
          <td class="d-flex flex-row align-items-center">
           
            <span
              @click="projectId = project.id"
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
    props: ["projects"],
  
    methods: {
      imagePath(path) {
        return this.$store.state.filePath + path;
      },
      deleteData() {
        this.$emit("delete-data", { id: this.projectId });
      },
    },
    data() {
      return {
        projectId: "",
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
  