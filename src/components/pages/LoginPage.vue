<template id="login">
  <div>
    <h6>Login Page</h6>
    <button @click="handleLogin">Login</button>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    handleLogin() {
     + localStorage.setItem("token", "12345");
      this.$router.push("/");
    },
  },
};
</script>
