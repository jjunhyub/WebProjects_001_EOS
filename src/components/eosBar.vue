<template>
<div>
  <div class="eos-bar" style="padding : 30px;">
    <h3>Left time : {{createdTime}}</h3>
    <span style="margin-right : 20px">400.4672</span>
    <img class="money-pot-image" src="../assets/eoslogo.png" width=45px height=78px />
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      createdTime: 0,

    };
  },
  methods: {
    //자주 쓸것 같아서 함수로 뺌
    timeChecker: function() {
      this.$http.get('/api/getLatestGame').then(response => {
        console.log(response.data.created_at);
        console.log(response.data.prize);
        this.createdTime = response.data.created_at;
      }).catch(error => {
        console.error(error);
      });
    },
  },
  created() {
    this.$http.get('/api/getLatestGame').then(response => {
      console.log(response.data.created_at);
      console.log(response.data.prize);
      this.createdTime = response.data.created_at;
    }).catch(error => {
      console.error(error);
    });
  },
}
</script>

<style scoped>
.eos-bar {
  text-align: center;
  font-size: 5em;
  color: white;
}
</style>
