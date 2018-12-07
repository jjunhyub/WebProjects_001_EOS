<template>
<div>
  <div class="eos-bar" style="padding : 30px;">
    <h3>Left time : {{createdTime}}</h3>
    <span style="margin-right : 20px">{{ this.$parent.games[0].prize }}</span>
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
    timeChecker: function() {

    },
  },
  created() {
    this.timeChecker();
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
