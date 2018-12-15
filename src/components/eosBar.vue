<template>
<div>
  <div class="eos-bar" style="padding : 30px;">
    <h3>LEFT TIME  :  {{$parent.leftTime}}</h3>
    <span style="margin-right : 20px text-align: center">{{$parent.prize}}P</span>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
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
