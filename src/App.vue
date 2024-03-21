<template id="App">
  <div class="d-flex ">
    <div class="m-2">
      <RouterLink to="/">Home</RouterLink>
    </div>
    <div class="m-2">
      <RouterLink to="/login" >Login</RouterLink>
    </div>
  </div>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  el: "#App",

};
</script>

<style scoped></style>
