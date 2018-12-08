<template>
<div>
  <div class="eos-bar" style="padding : 30px;">
    <h3>Left time : {{$parent.leftTime}}</h3>
    <span style="margin-right : 20px">{{ $parent.prize }}</span>
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
  },
  created() {
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
