<template>
<div class="card-bar">
  <div class="card">
    <div class="card-img" style="padding : 20px; padding-bottom : 0px; padding-top : 50px">
      <img class="cardImg" id="card1" src="../assets/cards/1.png" />
      <img class="cardImg" id="card2" src="../assets/cards/14.png" />
      <img class="cardImg" id="card3" src="../assets/cards/27.png" />
      <img class="cardImg" id="card4" src="../assets/cards/8.png" />
      <img class="cardImg" id="card5" src="../assets/cards/21.png" />
    </div>
    <div>
      <h4 class="shadow-typo">full house</h4>
    </div>
    <div style="padding : 30px; padding-top: 0px">
      <button type="button" class="btn" id="disabled" disabled>POINT : {{point}}</button>
      <button type="button" class="btn" v-on:click="draw">DRAW</button>
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

function getCard(made) {
  console.log('ok');
  this.$http.post('/api/getCard', {
      key: made/*randNum*/,
      //name: account.name,
      //game: gameNum,
      //key: randNum,account.name,gameNum 이걸 전부 보내야  entries table에 데이터 추가 가능
    })
    .then(response => {
      console.log(response.data);
    });
}

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

    account = scatter.identity.accounts.find(x => x.blockchain === 'eos')
    console.log('getAccount : ', account.name);
    // You can pass in any additional options you want into the eosjs reference.
    const eosOptions = {
      expireInSeconds: 60,
    };

    // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
    eos = scatter.eos(network, Eos, eosOptions);
  }).then(() => {
    //scatter login이 끝나는 곳
    //user테이블에 등록되어있으면 skip
    //user테이블에 등록되어있지 않으면 add
    console.log('wow');
    this.$http.post('/api/login', {
      account: account.name,
      //로그인한 유저의 정보.
    }).catch(error => {
      console.error(error);
    });
  }).catch(error => {
  console.log(error);
    //this is the place where you fail to login scatter
    //you can show the error message;
  });
});

export default {

  data() {
    return {
      point: 8,
      randomNum: 70,
      gameNum: 0,
    };
  },
  methods: {
    login: function() {
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
      }).catch(error => {
        //this is the place where you fail to login scatter
        //you can show the error message;
      });
    },
    getCard: function(/*andNum*/) {
      this.$http.post('/api/getCard', {
          key: 8/*randNum*/,
          //name: account.name,
          //game: gameNum,
          //key: randNum,account.name,gameNum 이걸 전부 보내야  entries table에 데이터 추가 가능
        })
        .then(response => {
          console.log(response.data);
          //where 6 png arrives
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
        }).catch(error => {
          console.error(error);
        });

      //원래 snabbt가 있던 곳
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
      }).then(function (trx) {
        console.log(`transaction : ${trx.transaction_id}`);
        eos.getTableRows({
          code: 'jmvzpmtc3tum',
          scope: 'jmvzpmtc3tum',
          table: 'saramz',
          lower_bound: account.name, //=table_key
          json: true,
        }).then(function(res) {
          console.log('this is a response:');
          console.log(res);
          //여기서 key==account.name인 곳의 myhand를 읽어오면 그것이 랜덤 숫자.
          //여기에서 받아온 숫자를 백으로 보내고 그림 5장이랑 문구를 받아오고 .then안에다가 this.getCard를 넣어준다.
          getCard(res.rows[0].myhand);
        });
      }).catch(error => {
        console.log('this is an error :');
        console.log(error);
      });
    },
  },
  created() {
    console.log('created');
    console.log(this);
  },
};
</script>


<style scoped>

.card-bar {
  text-align: center;
  color: black;
  background-color: black;
}

.btn {
  padding: 15px 50px;
  border: 2px solid #f7f7f7;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: .3s;
  background-color: #00b3b4;
  color: white;
  font-size: 1rem;
}

.btn:hover{
  border-radius: 30px;
}
#disabled{
  opacity: 1;
  margin-right: 100px;
}
.cardImg {
  width: 130px;
  height: 200px;
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
