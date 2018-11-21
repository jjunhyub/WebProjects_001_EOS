<template>
<div id="app">
  <main class="container mt-2">
    <app-header></app-header>
    <router-view></router-view>
  </main>
</div>
</template>


<script>
import header from './components/header.vue';

export default{
  components: {
    'app-header': header,
  },
  data() {
    return {

    };
  },
};
</script>


<style>

</style>
