<template>
<the-header></the-header>
<router-view></router-view>
<the-footer ></the-footer>
</template>

<script>
import BaseContent from './components/UI/BaseContent.vue';

export default {
  components: {
    BaseContent
  },
  /* computed: {
    showByPath() {
      this.$route.path.value !== '/menu';
    }
  } */
}
</script>

<style>
body {
  font-family: "Quicksand", sans-serif;
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
