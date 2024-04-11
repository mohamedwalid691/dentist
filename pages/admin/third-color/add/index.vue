<template>
  <div class="admin-content col-10 no-gutters">
    <div class="container mt-5">
      <h1 class="text-capitalize h3 text-body">
        {{ $t("add") }} {{ $t("color") }}
      </h1>
      <div class="d-flex justify-content-center">
        <button
          @click="addColor"
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
                v-model="$store.state.thirdc.nameEn"
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
                v-model="$store.state.thirdc.nameAr"
                placeholder="nameAr"
              />
            </div>

            <label for="exampleColorInput" class="form-label">{{
              _t("Choose color")
            }}</label>
            <input
              v-model="$store.state.thirdc.color"
              type="color"
              class="form-control form-control-color"
              id="exampleColorInput"
              value="#563d7c"
              title="Choose your color"
            />
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
    async addColor() {
      await this.$store.dispatch("thirdc/add");
    },
  },

  layout: "admin",
};
</script>

<style></style>
