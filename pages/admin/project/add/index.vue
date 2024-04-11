<template>
  <div class="admin-content col-10 no-gutters">
    <div class="container mt-5">
      <h1 class="text-capitalize h3 text-body">
        {{ $t("add") }} {{ $t("project") }}
      </h1>
      <div class="d-flex justify-content-center">
        <button
          @click="addProject"
          type="button"
          class="btn btn-dark mx-5 text-capitalize"
        >
          {{ $t("publish") }}
        </button>
      </div>
      <div class="mt-4 row">
        <div class="col-8">
          <div class="h-fit border bg-white rounded shadow-sm p-3">
            <h6 class="text-capitalize">{{ $t("basicInformation") }}</h6>

            <div class="admin-form__control mt-4 w-100">
              <label
                for="nameEn"
                class="admin-form__label mb-2 px-1 text-capitalize"
                >NameEn</label
              >
              <input
                class="admin-form__input px-3"
                type="text"
                name="nameEn"
                id="nameEn"
                v-model="$store.state.project.nameEn"
                placeholder="NameEn"
              />
            </div>


       
            <div class="admin-form__control mt-4 w-100">
              <label
                for="nameEn"
                class="admin-form__label mb-2 px-1 text-capitalize"
                >NameAr</label
              >
              <input
                class="admin-form__input px-3"
                type="text"
                name="nameAr"
                id="nameAr"
                v-model="$store.state.project.nameAr"
                placeholder="nameAr"
              />
            </div>


            <div class="admin-form__control mt-4 w-100">
              <label
                for="nameEn"
                class="admin-form__label mb-2 px-1 text-capitalize"
                >DescriptionEn</label
              >
              <input
                class="admin-form__input px-3"
                type="text"
                name="DescriptionEn"
                id="DescriptionEn"
                v-model="$store.state.project.DescriptionEn"
                placeholder="DescriptionEn"
              />
            </div>


            <div class="admin-form__control mt-4 w-100">
              <label
                for="nameEn"
                class="admin-form__label mb-2 px-1 text-capitalize"
                >DescriptionAr</label
              >
              <input
                class="admin-form__input px-3"
                type="text"
                name="DescriptionAr"
                id="DescriptionAr"
                v-model="$store.state.project.DescriptionAr"
                placeholder="DescriptionAr"
              />
            </div>
          </div>
          <div
            class="other-information h-fit border bg-white rounded shadow-sm p-3 mt-3"
          ></div>
        </div>
        <div class="col-3 ms-5">
          <div class="border bg-white rounded shadow-sm p-3">
            <div class="my-3">
              <label for="formFileMultiple" class="form-label"
                >upload image</label
              >
              <input
                @input="selectImage"
                class="form-control"
                type="file"
                id="formFileMultiple"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async addProject() {
      await this.$store.dispatch("project/add");
    },
    selectImage(e) {
     
      this.$store.state.project.image = e.target.files[0];
    },
  },

  layout: "admin",
};
</script>

<style></style>
