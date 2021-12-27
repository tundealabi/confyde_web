<template>
  <div class="auth_page_login">
    <auth-form-layout>
      <template v-slot:title>create account</template>
      <template v-slot:subtitle>Create an account to get started</template>
      <p class="text-sm text-center mt-3 text-[#6A6A6A]">
        Already have an account? <router-link to="/login">Sign in</router-link>
      </p>
    </auth-form-layout>
  </div>
</template>

<script>
import AuthFormLayout from '../components/auth_form_layout/AuthFormLayout.vue';

export default {
  name: 'Register',
  components: {
    AuthFormLayout,
  },
};
</script>
<style lang="scss">
.auth_page_login {
  min-height: 100vh;
}
</style>
