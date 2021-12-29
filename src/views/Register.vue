<template>
  <div class="auth_page_login">
    <auth-form-layout>
      <template v-slot:title>create account</template>
      <template v-slot:subtitle>Create an account to get started</template>
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
              id="username"
              label="username"
              inputType="text"
              placeholder="Enter your username"
            />
          </div>
          <div class="mt-4">
            <auth-form-textfield
              id="phone_number"
              label="phone number"
              inputType="tel"
              placeholder="Enter your phone number"
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
          <div class="mt-4">
            <auth-form-textfield
              id="dob"
              label="date of birth"
              inputType="date"
              placeholder="Enter your date of birth"
            />
          </div>
          <div class="mt-4">
            <auth-form-selectfield
              id="gender"
              label="gender"
              placeholder="Select a gender"
              :selectFieldOptions="['male', 'female', 'others']"
            />
          </div>
          <div class="py-5"></div>
          <div class="mt-4">
            <AuthFormSubmitButton text="register" />
          </div>
          <p class="text-sm text-center mt-3 text-[#6A6A6A]">
            Already have an account? <router-link to="/login">Sign in</router-link>
          </p>
        </form>
      </template>
    </auth-form-layout>
  </div>
</template>

<script>
import AuthFormLayout from '../components/auth_form_layout/AuthFormLayout.vue';
import AuthFormTextfield from '../components/auth_form_textfield/AuthFormTextfield.vue';
import AuthFormSelectfield from '../components/auth_form_selectfield/AuthFormSelectfield.vue';
import AuthFormSubmitButton from '../components/auth_form_submit_button/AuthFormSubmitButton.vue';

export default {
  name: 'Register',
  components: {
    AuthFormLayout,
    AuthFormTextfield,
    AuthFormSelectfield,
    AuthFormSubmitButton,
  },
};
</script>
<style lang="scss">
.auth_page_login {
  min-height: 100vh;
  padding: 3.52rem 0;
}
</style>
