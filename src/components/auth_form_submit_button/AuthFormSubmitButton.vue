<template>
  <button
    class="text-center w-full bg-black text-white capitalize py-4 rounded-md text-base font-semibold"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: 'AuthFormSubmitButton',
  components: {},
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
