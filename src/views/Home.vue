<template>
  <!--이곳은 실제로 페이지가 다른 view들을 저장한다. vue라고 다 똑같은 컴포넌트인것이 아니다.-->
<div class="home">
  <eos-bar></eos-bar>
  <card-bar></card-bar>
  <log-bar></log-bar>
</div>
</template>

<script>
import API from '@/lib/API';
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import getContract from '../main.js';
import EosBar from '../components/eosBar.vue';
import CardBar from '../components/cardBar.vue';
import LogBar from '../components/logBar.vue';

ScatterJS.plugins(new ScatterEOS());

export default {
  components: {
    'eos-bar': EosBar,
    'card-bar': CardBar,
    'log-bar': LogBar,
  },
  name: 'home',
  data() {
    return {
      location: localStorage.location || '',
      icons: {},
    };
  },
  mounted() {},
};
</script>

<style>

</style>
