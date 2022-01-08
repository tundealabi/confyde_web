<template>
  <div>
    <label :for="id" class="block text-sm mb-2 text-[#7A7A7A] capitalize">{{ label }}</label>
    <input
      :id="id"
      :type="inputType"
      :placeholder="placeholder"
      class="w-full rounded-md bg-[#F2F2F2] border-0 py-5"
    />
  </div>
</template>
<script>
export default {
  name: 'AuthFormTextfield',
  components: {},
  props: {
    id: {
      type: String,
      required: true,
    },
    inputType: {
      validator(value) {
        // The value must match one of these strings
        return ['text', 'tel', 'email', 'password', 'date'].includes(value);
      },
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
};
</script>
