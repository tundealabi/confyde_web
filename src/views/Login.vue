<template>
  <div class="auth_page_login">
    <auth-form-layout>
      <template v-slot:title>log in</template>
      <template v-slot:subtitle>Welcome back, log in to get started</template>
      <template v-slot:default>
        <form @submit.prevent="">
          <div class="mt-4">
            <auth-form-textfield
              id="email"
              label="email address"
              inputType="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="mt-4">
            <auth-form-textfield
              id="password"
              label="password"
              inputType="password"
              placeholder="Enter your password"
            />
          </div>
          <p class="text-xs capitalize text-right mt-3">forgot password?</p>
          <div class="py-20"></div>
          <div class="mt-4">
            <AuthFormSubmitButton text="login" />
          </div>
          <p class="text-sm text-center mt-3 text-[#6A6A6A]">
            Don&apos;t have an account? <router-link to="/register">Sign up</router-link>
          </p>
        </form>
      </template>
    </auth-form-layout>
  </div>
</template>

<script>
import AuthFormLayout from '../components/auth_form_layout/AuthFormLayout.vue';
import AuthFormTextfield from '../components/auth_form_textfield/AuthFormTextfield.vue';
import AuthFormSubmitButton from '../components/auth_form_submit_button/AuthFormSubmitButton.vue';

export default {
  name: 'Login',
  components: {
    AuthFormLayout,
    AuthFormTextfield,
    AuthFormSubmitButton,
  },
};
</script>
<style lang="scss">
.auth_page_login {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
