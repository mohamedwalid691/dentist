<template>
  <Tutorial />
</template>

<script>
export default {
created(){

  this.$router.push(this.localePath({ name: `admin-project-add` }));
}
}
</script>
