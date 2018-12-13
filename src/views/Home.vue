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

var moment = require('moment');
let vueCompo;
moment().format();
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
      games: [],
      location: localStorage.location || '',
      icons: {},
      differentTime: 0,
      prize: 0,
      leftTime: "",
    };
  },
  methods: {
    getGameLogs: function() {
      this.$http.get('/api/getGameLogs').then(response => {
        this.games = response.data;
      }).then(() => {
        let current_time = moment.utc().valueOf();
        let game_time = moment.utc(this.games[0].created_at).valueOf();
        this.differentTime = 1800 - Math.floor((current_time - game_time) / 1000);
        this.prize = this.games[0].prize;
        var duration = moment.duration(this.differentTime * 1000, 'milliseconds');
        var interval = 1000;
        setInterval(function() {
          duration = moment.duration(duration - interval, 'milliseconds');
          let second = duration.seconds().toString();
          if (duration.seconds() < 10) second = '0' + second;
          //if (duration.seconds() < 0) {vueCompo.getGameLogs();}
          vueCompo.leftTime = duration.minutes().toString() + ":" + second;
        }, interval);
      }).catch(error => {
        console.log('getGameError : ');
        console.error(error);
      });
    },
  },
  mounted() {},
  created() {
    this.getGameLogs();
    vueCompo = this;
  },
}
</script>

<style>
</style>
