<template>
<div class="card-bar">
  <div class="card-img" style="padding : 20px; padding-bottom : 0px; padding-top : 40px">
    <img class="cardImg" id="card1" v-bind:src=card1 />
    <img class="cardImg" id="card2" v-bind:src=card2 />
    <img class="cardImg" id="card3" v-bind:src=card3 />
    <img class="cardImg" id="card4" v-bind:src=card4 />
    <img class="cardImg" id="card5" v-bind:src=card5 />
  </div>
  <h4 class="shadow-typo">{{cardName}}</h4>
  <div style="padding : 30px; padding-top: 0px">
    <button type="button" class="btn" id="disabled" disabled>POINT : {{point}}</button>
    <button type="button" class="btn" v-on:click="draw">DRAW</button>
  </div>
  <el-dialog title="Warning" :visible.sync="dialogVisible_1" width="30%" center>
    <span>Please check your CPUs and try again</span>
  </el-dialog>
  <el-dialog title="Warning" :visible.sync="dialogVisible_2" width="30%" center>
    <span>Please check your Scatter connection and try again</span>
  </el-dialog>
</div>
</template>

<script>
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';

var moment = require('moment');
moment().format();
ScatterJS.plugins(new ScatterEOS());

let eos;
let account;
let vueCompo;
const network = {
  blockchain: 'eos',
  protocol: 'https',
  host: 'user-api.eoseoul.io',
  port: 443,
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
};
const requiredFields = {
  accounts: [network],
  personal: [],
  location: [],
};

function getCard(made) {
  vueCompo.$http.post('/api/getCard', {
      made: made,
      game_id: vueCompo.$parent.games[0].id,
      user_name: account.name,
    })
    .then(response => {
      let made = JSON.parse(JSON.parse(response.data));
      vueCompo.card1 = "/cards/" + made[0].toString() + ".png";
      vueCompo.card2 = "/cards/" + made[1].toString() + ".png";
      vueCompo.card3 = "/cards/" + made[2].toString() + ".png";
      vueCompo.card4 = "/cards/" + made[3].toString() + ".png";
      vueCompo.card5 = "/cards/" + made[4].toString() + ".png";

      //포인트 차감 반영
      vueCompo.$http.post('/api/login', {
        key_account: account.name,
      }).then(response => {
        vueCompo.point = Math.floor(response.data.point * 1000) / 1000;
      });
      vueCompo.$http.get('/api/getGameLogs').then(response => {
        vueCompo.$parent.games = response.data;
      }).then(() => {
        let current_time = moment.utc().valueOf();
        let game_time = moment.utc(vueCompo.games[0].created_at).valueOf();
        vueCompo.$parent.differentTime = 1800 - Math.floor((current_time - game_time) / 1000);
        vueCompo.$parent.prize = Math.floor(vueCompo.games[0].prize * 1000) / 1000;
        var duration = moment.duration(vueCompo.$parent.differentTime * 1000, 'milliseconds');
        var interval = 1000;
        setInterval(function() {
          duration = moment.duration(duration - interval, 'milliseconds');
          let second = duration.seconds().toString();
          if (duration.seconds() < 10 && duration.seconds() >= 0) second = '0' + second;
          vueCompo.$parent.leftTime = duration.minutes().toString() + ":" + second;
          if (duration.seconds() === 0 && duration.minutes() === 0) duration._milliseconds += 1800000;
        }, interval);
      }).catch(error => {
        console.error(error);
      });

      var c1 = document.getElementById('card1');
      var c2 = document.getElementById('card2');
      var c3 = document.getElementById('card3');
      var c4 = document.getElementById('card4');
      var c5 = document.getElementById('card5');
      var rotateNum = 2;

      snabbt(c1, {
        fromRotation: [0, rotateNum * Math.PI, 0],
        transformOrigin: [c1.clientWidth / 2, 0, 0],
        easing: 'easeOut',
      });
      snabbt(c2, {
        fromRotation: [0, rotateNum * Math.PI, 0],
        transformOrigin: [c2.clientWidth / 2, 0, 0],
        easing: 'easeOut',
      });
      snabbt(c3, {
        fromRotation: [0, rotateNum * Math.PI, 0],
        transformOrigin: [c3.clientWidth / 2, 0, 0],
        easing: 'easeOut',
      });
      snabbt(c4, {
        fromRotation: [0, rotateNum * Math.PI, 0],
        transformOrigin: [c4.clientWidth / 2, 0, 0],
        easing: 'easeOut',
      });
      snabbt(c5, {
        fromRotation: [0, rotateNum * Math.PI, 0],
        transformOrigin: [c5.clientWidth / 2, 0, 0],
        easing: 'easeOut',
      });
    }).catch(error => {
      console.error(error);
    });

  //원래 snabbt가 있던 곳
}

function login() {
  ScatterJS.scatter.connect('eos-poker').then((connected) => {
    // If the user does not have Scatter or it is Locked or Closed this will return false;
    if (!connected) {
      return false;
    }

    const {
      scatter
    } = ScatterJS;
    scatter.getIdentity(requiredFields).then(() => {
      account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
      vueCompo.$http.post('/api/login', {
        key_account: account.name,
      }).then(response => {
        vueCompo.point = Math.floor(response.data.point * 1000) / 1000;
      });

      vueCompo.$http.post('/api/getEntry', {
          user_name: account.name,
          game_id: vueCompo.$parent.games[0].id,
        })
        .then(response => {
          if (response.data.result) {
            let made = JSON.parse(JSON.parse(response.data.made));
            if (response.data.made_id <= 1302540) vueCompo.cardName = "HIGH CARD";
            else if (response.data.made_id <= 2400780) vueCompo.cardName = "ONE PAIR";
            else if (response.data.made_id <= 2524332) vueCompo.cardName = "TWO PAIR";
            else if (response.data.made_id <= 2579244) vueCompo.cardName = "THREE OF A KIND";
            else if (response.data.made_id <= 2589444) vueCompo.cardName = "STRAIGHT";
            else if (response.data.made_id <= 2594552) vueCompo.cardName = "FLUSH";
            else if (response.data.made_id <= 2598296) vueCompo.cardName = "FULL HOUSE";
            else if (response.data.made_id <= 2598920) vueCompo.cardName = "FOUR OF A KIND";
            else if (response.data.made_id <= 2598956) vueCompo.cardName = "STRAIGHT FLUSH";
            else if (response.data.made_id <= 2598960) vueCompo.cardName = "ROYAL STRAIGHT FLUSH";

            vueCompo.card1 = "/cards/" + made[0].toString() + ".png";
            vueCompo.card2 = "/cards/" + made[1].toString() + ".png";
            vueCompo.card3 = "/cards/" + made[2].toString() + ".png";
            vueCompo.card4 = "/cards/" + made[3].toString() + ".png";
            vueCompo.card5 = "/cards/" + made[4].toString() + ".png";
          }
        });
      const eosOptions = {
        expireInSeconds: 60,
      };
      eos = scatter.eos(network, Eos, eosOptions);
    });
  }).catch(error => {
    console.log(error);
    vueCompo.dialogVisible_2 = true;
  });
};
login();

export default {

  data() {
    return {
      point: 0,
      cardName: "",
      card1: "/cards/54.png",
      card2: "/cards/54.png",
      card3: "/cards/54.png",
      card4: "/cards/54.png",
      card5: "/cards/54.png",
      dialogVisible_1: false,
      dialogVisible_2: false,
    };
  },
  methods: {
    draw: function() {
      eos.transaction({
        actions: [{
          account: "jmvzpmtc3tum",
          name: "upsert",
          data: {
            user: account.name,
          },
          authorization: [{
            actor: account.name,
            permission: "active"
          }]
        }]
      }).then(function(trx) {
        eos.getTableRows({
          code: 'jmvzpmtc3tum',
          scope: 'jmvzpmtc3tum',
          table: 'persons',
          lower_bound: account.name,
          json: true,
        }).then(function(res) {
          //여기서 받고 바로 보여주면 카드가 돌기도전에 무슨 패가 나왔는지 알 수 있다.
          if (res.rows[0].myhand <= 1302540) vueCompo.cardName = "HIGH CARD";
          else if (res.rows[0].myhand <= 2400780) vueCompo.cardName = "ONE PAIR";
          else if (res.rows[0].myhand <= 2524332) vueCompo.cardName = "TWO PAIR";
          else if (res.rows[0].myhand <= 2579244) vueCompo.cardName = "THREE OF A KIND";
          else if (res.rows[0].myhand <= 2589444) vueCompo.cardName = "STRAIGHT";
          else if (res.rows[0].myhand <= 2594552) vueCompo.cardName = "FLUSH";
          else if (res.rows[0].myhand <= 2598296) vueCompo.cardName = "FULL HOUSE";
          else if (res.rows[0].myhand <= 2598920) vueCompo.cardName = "FOUR OF A KIND";
          else if (res.rows[0].myhand <= 2598956) vueCompo.cardName = "STRAIGHT FLUSH";
          else if (res.rows[0].myhand <= 2598960) vueCompo.cardName = "ROYAL STRAIGHT FLUSH";
          getCard(res.rows[0].myhand);
        });
      }).catch(error => {
        vueCompo.dialogVisible_1 = true;
      });
    },
  },
  created() {
    vueCompo = this;
  },
};
</script>

<style scoped>
.card-bar {
  text-align: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.15);
}

.btn {
  margin: 0 20px;
  padding: 15px 50px;
  border: 2px solid #f7f7f7;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: .3s;
  background-color: #00b3b4;
  color: white;
  font-size: smaller;
  width: 20%;
  height: auto;
}

.btn:hover {
  border-radius: 30px;
}

#disabled {
  opacity: 1;
}

.cardImg {
  width: 14%;
  height: 80%;
  margin: 0 5px;
}

body {
  background: radial-gradient(ellipse at center, #443501 0%, #000000 100%);
  height: 100%;
}

h4 {
  margin-bottom: 20px;
}

.shadow-typo {
  position: relative;
  display: inline-block;
  font-size: 4rem;
  text-transform: uppercase;
  color: #00b3b4;
  text-shadow: 3px 3px 0px #e7eef1, 8px 8px 0px rgba(0, 0, 0, 0.1);
}
</style>
