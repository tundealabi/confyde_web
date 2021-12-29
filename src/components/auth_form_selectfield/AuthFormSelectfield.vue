<template>
  <div>
    <label :for="id" class="block text-sm mb-2 text-[#7A7A7A] capitalize">{{ label }}</label>
    <select :id="id" class="w-full rounded-md bg-[#F2F2F2] border-0 py-5">
      <option disabled value="" selected>{{ placeholder }}</option>
      <option v-for="selectFieldOption in selectFieldOptions" :key="selectFieldOption">
        {{ selectFieldOption }}
      </option>
    </select>
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

    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    selectFieldOptions: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
