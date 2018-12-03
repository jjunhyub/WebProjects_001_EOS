<template>
<div class="card-bar">
  <div class="card">
    <div class="card-img" style="padding : 20px; padding-bottom : 0px; padding-top : 50px">
      <img class="cardImg"  id="card1" src="../assets/cards/1.png" />
      <img class="cardImg"  id="card2" src="../assets/cards/14.png" />
      <img class="cardImg"  id="card3" src="../assets/cards/27.png" />
      <img class="cardImg"  id="card4" src="../assets/cards/8.png" />
      <img class="cardImg"  id="card5" src="../assets/cards/21.png" />
    </div>
    <div class="gold">
      <h3 id="card-text" data-heading="FULL HOUSE">FULL HOUSE</h3>
    </div>
    <div style="padding : 30px; padding-top: 0px">
      <span id="point">point: {{point}}</span>
      <button type="button" class="btn" v-on:click="draw">Login</button>
    </div>
  </div>
</div>


</div>
</template>

<script>
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';

let eos;
let account;
ScatterJS.plugins(new ScatterEOS());

// Networks are used to reference certain blockchains.
// They let you get accounts and help you build signature providers.
const network = {
  blockchain: 'eos',
  protocol: 'https',
  host: 'user-api.eoseoul.io',
  port: 443,
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
};

// First we need to connect to the user's Scatter.
ScatterJS.scatter.connect('eos-poker').then((connected) => {
  // If the user does not have Scatter or it is Locked or Closed this will return false;
  if (!connected) {
    return false;
  }

  const {
    scatter,
  } = ScatterJS;
  // Now we need to get an identity from the user.
  // We're also going to require an account that is connected to the network we're using.
  const requiredFields = {
    accounts: [network],
    personal: [],
    location: [],
  };

  scatter.getIdentity(requiredFields).then(() => {
    // Always use the accounts you got back from Scatter.
    // Never hardcode them even if you are prompting

    // the user for their account name beforehand. They could still give you a different account.
    account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
    console.log('getAccount : ', account.name);
    // You can pass in any additional options you want into the eosjs reference.
    const eosOptions = {
      expireInSeconds: 60,
    };

    // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
    eos = scatter.eos(network, Eos, eosOptions);
  });
});

export default {

  data() {
    return {
      point: 8,
      randomNum: 0,
    };
  },
  methods: {
    login: function(){
      ScatterJS.scatter.connect('eos-poker').then((connected) => {
        // If the user does not have Scatter or it is Locked or Closed this will return false;
        if (!connected) {
          return false;
        }

        const {
          scatter,
        } = ScatterJS;

        // Now we need to get an identity from the user.
        // We're also going to require an account that is connected to the network we're using.
        const requiredFields = {
          accounts: [network],
          personal: [],
          location: [],
        };

        scatter.getIdentity(requiredFields).then(() => {
          // Always use the accounts you got back from Scatter.
          // Never hardcode them even if you are prompting

          // the user for their account name beforehand. They could still give you a different account.
          account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
          console.log('getAccount : ', account.name);
          // You can pass in any additional options you want into the eosjs reference.
          const eosOptions = {
            expireInSeconds: 60,
          };

          // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
          eos = scatter.eos(network, Eos, eosOptions);
        });
      }).then(() => {
        //scatter login이 끝나는 곳
        //user테이블에 등록되어있으면 skip
        //user테이블에 등록되어있지 않으면 add
        this.$http.post('/api/login', {
            account: account.name,
            //로그인한 유저의 정보.
          }).catch(error => {
            console.error(error);
          });
      });
    },
    getCard: function(randNum) {
      this.$http.post('/api/getCard', {
          key: randNum,
          //key: randNum,account.name,gameNum 이걸 전부 보내야  entries table에 데이터 추가 가능
        })
        .then(response => {
          console.log(response.data);
          //where 6 png arrives
        }).catch(error => {
          console.error(error);
        });
      //굉장히 포문으로 처리하고 싶게생겼다.
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
      }).then((trx) => {
        console.log(`transaction : ${trx.transaction_id}`);
        eos.getTableRows({
          code: 'jmvzpmtc3tum',
          scope: 'jmvzpmtc3tum',
          table: 'people',
          lower_bound: account.name,
          json: true,
        }).then(function(res) {
          console.log('this is a response:');
          console.log(res);
          console.log('this is a player:');
          console.log(res.rows[0].key);
          console.log('this is a player\'\s score:');
          console.log(res.rows[0].myhand);
          //여기서 key==account.name인 곳의 myhand를 읽어오면 그것이 랜덤 숫자.
          //여기에서 받아온 숫자를 백으로 보내고 그림 5장이랑 문구를 받아오고 .then안에다가 this,getCard를 넣어준다.
          this.getCard(res.rows[0].myhand);
        });
      }).catch(error => {
        console.log('this is an error :');
        console.log(error);
      });
    },
  },
  created() {},
};
</script>


<style scoped>
.card-bar {
  text-align: center;
  color: black;
  background-color: black;
}

.btn {
  {padding:150px 40px;}
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

#point {
  font-size: 30px;
  color: white;
  margin-right: 200px;
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
