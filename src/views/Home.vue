<template>
  <div class="home">
    <vue-writer :array="['Welcome to CONFYDE']" />
  </div>
</template>

<script>
import VueWriter from 'vue-writer';

export default {
  name: 'Home',
  components: {
    VueWriter,
  },
};
</script>
<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  .is-typed span.typed {
    color: wheat;
    font-size: 2rem;
  }
}
</style>
