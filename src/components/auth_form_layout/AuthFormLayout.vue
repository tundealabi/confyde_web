<template>
  <div class="md:w-3/4 md:m-auto">
    <div class="text-center mb-14">
      <h1 class="capitalize font-bold text-2xl leading-7 tracking-wide mb-2.5">
        <slot name="title"></slot>
      </h1>
      <p class="text-sm text-[#7A7A7A]">
        <slot name="subtitle"></slot>
      </p>
    </div>
    <div class="mt-5 px-3.5">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AuthFormLayout',
  components: {},
};
</script>
