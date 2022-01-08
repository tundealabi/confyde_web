<template>
  <div class="px-3.5 md:w-3/4 md:m-auto">
    <h1 class="capitalize text-lg">report case form</h1>
    <form @submit.prevent="">
      <div class="mt-4">
        <auth-form-selectfield
          id="case_title"
          label="case title"
          placeholder="Enter a case title"
          :selectFieldOptions="['case one', 'case two', 'others']"
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
      <div class="mt-4">
        <auth-form-textfield id="age" label="age" inputType="number" placeholder="Enter your age" />
      </div>
      <div class="mt-4">
        <auth-form-textfield
          id="abuse_frequency"
          label="frequency of abuse"
          inputType="number"
          placeholder="Enter frequency of abuse"
        />
      </div>
      <div class="mt-4">
        <auth-form-selectfield
          id="have_evidence"
          label="do you have evidence to backup your claim"
          placeholder=""
          :selectFieldOptions="['yes', 'no']"
        />
      </div>
      <div class="mt-4">
        <auth-form-selectfield
          id="intervention_service"
          label="select the intervention service you want"
          placeholder="Select a service"
          :selectFieldOptions="['service one', 'service two', 'others']"
        />
      </div>
      <div class="mt-4">
        <label class="text-sm text-[#A4A4A4]">
          <input type="checkbox" />
          I verify that all provided information are true
        </label>
      </div>
      <div class="py-10"></div>
      <div class="mt-4">
        <AuthFormSubmitButton text="submit" />
      </div>
    </form>
  </div>
</template>
<script>
import AuthFormTextfield from '../components/auth_form_textfield/AuthFormTextfield.vue';
import AuthFormSelectfield from '../components/auth_form_selectfield/AuthFormSelectfield.vue';
import AuthFormSubmitButton from '../components/auth_form_submit_button/AuthFormSubmitButton.vue';

export default {
  name: 'Report',
  components: {
    AuthFormTextfield,
    AuthFormSelectfield,
    AuthFormSubmitButton,
  },
};
</script>
