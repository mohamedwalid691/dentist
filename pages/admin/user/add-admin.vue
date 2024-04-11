<template>
  <div class="admin-content col-10 no-gutters">
    <div class="container mt-5">
      <h1 class="text-capitalize h3 text-body">
        {{ $t("add") }} {{ $t("admin") }}
      </h1>
      <div class="d-flex justify-content-center">
        <button
          @click="addAdmin"
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
                for="Name"
                class="admin-form__label mb-2 px-1 text-capitalize"
                >Name</label
              >
              <input
                class="admin-form__input px-3"
                type="text"
                name="Name"
                id="Name"
                v-model="$store.state.admin.name"
                placeholder="Name"
              />
            </div>

            <div class="admin-form__control mt-4 w-100">
              <label
                for="Mobile"
                class="admin-form__label mb-2 px-1 text-capitalize"
                >Mobile</label
              >
              <input
                class="admin-form__input px-3"
                type="text"
                name="Mobile"
                id="Mobile"
                v-model="$store.state.admin.mobile"
                placeholder="Mobile"
              />
            </div>

            <div class="admin-form__control mt-4 w-100">
              <label
                for="email"
                class="admin-form__label mb-2 px-1 text-capitalize"
                >email</label
              >
              <input
                class="admin-form__input px-3"
                type="text"
                name="email"
                id="email"
                v-model="$store.state.admin.email"
                placeholder="mail"
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
    async addAdmin() {
      await this.$store.dispatch("admin/add");
    },
  
  },

  layout: "admin",
};
</script>

<style></style>
