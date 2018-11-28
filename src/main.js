/* eslint-disable eol-last */
import Vue from 'vue';
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';

console.log('0');
Vue.use(VueResource);
console.log('1');
// Don't forget to tell ScatterJS which plugins you are using.

ScatterJS.plugins(new ScatterEOS());
console.log('2');

// Networks are used to reference certain blockchains.
// They let you get accounts and help you build signature providers.
const network = {
  blockchain: 'eos',
  protocol: 'https',
  host: 'user-api.eoseoul.io',
  // 두번째 에러가 나는 지점
  // 'nodes.get-scatter.com'
  port: 443,
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
};
console.log('3');

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
    console.log('11');

    // ----------------------------
    // Now that we have an identity(유저의 정보),
    // an EOSIO account, and a reference
    // to an eosjs object we can send a transaction.
    // ----------------------------

    // Never assume the account's permission/authority. Always take it from the returned account.
    const transactionOptions = {
      authorization: [`${account.name}@${account.authority}`],
    };
    console.log('12');

    let result = eos.transaction({
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
    console.log('13');
    /*
        eos.transfer(account.name, 'jmvzpmtc3tum', '0.0000 EOS', 'memo', transactionOptions).then((trx) => {
          // That's it!
          // 다음 트랜젝션을 보내는 곳이 두번쨰 에러 장소이다.
          console.log(`Transaction ID: ${trx.transaction_id}`);
          console.log('hi');
          // const result = contract.hi(...);
        }).catch((error) => {
          console.log('here0');
          console.error(error);
          //window fetch에 실패했다는 내용
          console.log('here1');
        });
      }).catch((error) => {
        // The user rejected this request, or doesn't have the appropriate requirements.
        console.error(error);
        console.log('here2');
      });
      console.log('10');*/
    // export const getContract = (scatter, network, contract) => {
    //   return scatter.eos(network, eos, {}).contract(contract)
    // }
    return false;
  });
});
// getContract: function() {
//   return eos.contract('randomNum()', requiredFields);
//   contract(contract);
// },

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');