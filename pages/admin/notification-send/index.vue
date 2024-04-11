<template>
    <div class="admin-content col-10 no-gutters">
      <div class="container mt-5">
        <h1 class="text-capitalize h3 text-body">
          {{ $t("send") }} {{ $t("notification") }}
        </h1>
        <div class="d-flex justify-content-center">
          <button
            @click="sendNotification"
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
                  for="titleEn"
                  class="admin-form__label mb-2 px-1 text-capitalize"
                  >titleEn</label
                >
                <input
                  class="admin-form__input px-3"
                  type="text"
                  name="titleEn"
                  id="titleEn"
                  v-model="$store.state.admin.titleEn"
                  placeholder="titleEn"
                />
              </div>
  
  
         
              <div class="admin-form__control mt-4 w-100">
                <label
                  for="titleAr"
                  class="admin-form__label mb-2 px-1 text-capitalize"
                  >titleAr</label
                >
                <input
                  class="admin-form__input px-3"
                  type="text"
                  name="titleAr"
                  id="titleAr"
                  v-model="$store.state.admin.titleAr"
                  placeholder="titleAr"
                />
              </div>
  
  
              <div class="admin-form__control mt-4 w-100">
                <label
                  for="nameEn"
                  class="admin-form__label mb-2 px-1 text-capitalize"
                  >bodyEn</label
                >
                <input
                  class="admin-form__input px-3"
                  type="text"
                  name="bodyEn"
                  id="bodyEn"
                  v-model="$store.state.project.bodyEn"
                  placeholder="bodyEn"
                />
              </div>
  
  
              <div class="admin-form__control mt-4 w-100">
                <label
                  for="bodyAr"
                  class="admin-form__label mb-2 px-1 text-capitalize"
                  >bodyAr</label
                >
                <input
                  class="admin-form__input px-3"
                  type="text"
                  name="bodyAr"
                  id="bodyAr"
                  v-model="$store.state.project.bodyAr"
                  placeholder="bodyAr"
                />
              </div>
            </div>
            <div
              class="other-information h-fit border bg-white rounded shadow-sm p-3 mt-3"
            ></div>
          </div>
        
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      async sendNotification() {
        await this.$store.dispatch("admin/sendNotification");
      },
     
    },
  
    layout: "admin",
  };
  </script>
  
  <style></style>
  