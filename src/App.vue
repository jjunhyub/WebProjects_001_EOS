<template>
<div id="app">
  <app-header></app-header>
  <main class="container mt-2">
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
body{
  font-family: 'Nunito SemiBold';
}
</style>
