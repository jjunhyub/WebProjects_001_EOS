<template>
<div class="card-bar">
  <div class="card">
    <div class="card-img" style="padding : 20px; padding-bottom : 0px; padding-top : 50px">
      <img class="cardImg" id="card1" src="../assets/spadeAce.png" />
      <img class="cardImg" id="card2" src="../assets/spadeAce.png" />
      <img class="cardImg" id="card3" src="../assets/spadeAce.png" />
      <img class="cardImg" id="card4" src="../assets/spadeAce.png" />
      <img class="cardImg" id="card5" src="../assets/spadeAce.png" />
    </div>
    <div class="gold">
      <h2 id="card-text" data-heading="FOURCARD">FOUR CARD</h2>
    </div>
    <div style="padding : 30px; padding-top: 0px"><button type="button" class="btn btn-danger" v-on:click="transactionGo">Login</button></div>
  </div>
</div>
</template>

<script>
//import {buttonGoGo,goTransaction,eos} from '../main.js';
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';

// Don't forget to tell ScatterJS which plugins you are using.

ScatterJS.plugins(new ScatterEOS());
console.log('2');

// Networks are used to reference certain blockchains.
// They let you get accounts and help you build signature providers.
const network = {
  blockchain: 'eos',
  protocol: 'https',
  host: 'user-api.eoseoul.io',
  port: 443,
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
};
console.log('3');
/*
function goTransaction() {
  eos.transaction({
    actions: [{
      account: "jmvzpmtc3tum",
      name: "gameset",
      data: {},
      authorization: [{
        actor: account.name,
        permission: "active"
      }]
    }]
  }).then((trx) => {
    console.log(`transaction : ${trx.transaction_id}`);
  }).catch(error => {
    console.log('this is an error :');
    console.log(error);
  });
  console.log('12');
};*/
// const connectionOptions = {initTimeout: 10000} =>optional!!
// First we need to connect to the user's Scatter.
ScatterJS.scatter.connect('eos-poker').then((connected) => {
  console.log('4');
  //여기가 첫번째 에러가 나는 지점이다.
  // 'My-App' 둘다 된다 왜그럴까?
  // If the user does not have Scatter or it is Locked or Closed this will return false;
  if (!connected) {
    return false;
  }
  console.log('5');

  const {
    scatter,
  } = ScatterJS;
  console.log('6');

  // Now we need to get an identity from the user.
  // We're also going to require an account that is connected to the network we're using.
  const requiredFields = {
    accounts: [network],
    personal: [],
    location: [],
  };
  console.log('7');

  scatter.getIdentity(requiredFields).then(() => {
    console.log('8');
    // Always use the accounts you got back from Scatter.
    // Never hardcode them even if you are prompting

    // the user for their account name beforehand. They could still give you a different account.
    const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
    console.log('9');
    // account가 들어갈 자리다.
    console.log('getAccount : ', account.name);
    // You can pass in any additional options you want into the eosjs reference.
    const eosOptions = {
      expireInSeconds: 60,
    };
    console.log('10');

    // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
    const eos = scatter.eos(network, Eos, eosOptions);
    console.log(eos);
    console.log('11');

    //where eos.transaction go
    eos.getTableRows({
      code: 'jmvzpmtc3tum',
      scope: 'jmvzpmtc3tum',
      table: 'scoreboard',
      json: true,
    }).then(function(res) {
      console.log('this is a response:');
      console.log(res);
        console.log('this is a player:');
      console.log(res.rows[0].key);
        console.log('this is a player\'\s score:');
      console.log(res.rows[0].myscore);
    });

  });
});

export default {

  data() {
    return {};
  },
  methods: {
    transactionGo: function() {
      console.log('this is coming out');
      //this was the place
      eos.transaction({
        actions: [{
          account: "jmvzpmtc3tum",
          name: "gameset",
          data: {},
          authorization: [{
            actor: account.name,
            permission: "active"
          }]
        }]
      }).then((trx) => {
        console.log(`transaction : ${trx.transaction_id}`);
      }).catch(error => {
        console.log('this is an error :');
        console.log(error);
      });
      console.log('12');
    },
    getCard: function() {
      this.$http.post('/api/getCard', {
          key: Math.floor((Math.random() * 2598960) + 1),
        })
        .then(response => {
          console.log(response.data);
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
    },
  },
};
</script>


<style scoped>
.card-bar {
  text-align: center;
  color: black;
  background-color: black;
}

.btn btn-danger {
  width: 200px;
  height: 50px;
}


.cardImg {
  width: 130px;
  height: 200px;
}

#card-text {
  margin: 30px;
  width: 650px;
  display: inline-block;
  border-radius: 5px;
  background: linear-gradient(to bottom, #cfc09f 22%, #634f2c 24%, #cfc09f 26%, #cfc09f 27%, #ffecb3 40%, #3a2c0f 78%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #fff;
  font-family: 'Playfair Display', serif;
  position: relative;
  text-transform: uppercase;
  font-size: 70px;
  margin: 0;
  font-weight: 400;
}

#card-text:after {

    background: none;
    content: attr(data-heading);
    left: 0;
    top: 0;
    z-index: -1;
    position: absolute;
    text-shadow:
      -1px 0 1px #c6bb9f,
      0 1px 1px #c6bb9f,
      5px 5px 10px rgba(0, 0, 0, 0.4),
      -5px -5px 10px rgba(0, 0, 0, 0.4);
}

body {
  background: radial-gradient(ellipse at center, #443501 0%, #000000 100%);
  height: 100%;
}

.gold {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
