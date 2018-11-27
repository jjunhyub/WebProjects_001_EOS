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
      <div style="padding : 30px;"><button type="button" class="btn btn-danger" v-on:click="getCard" >Login</button></div>
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
    getCard: function () {
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
        fromRotation: [0, rotateNum*Math.PI, 0],
        transformOrigin: [c1.clientWidth/2, 0, 0],
        easing: 'easeOut',
      });
      c1.src="/src/assets/trumpcards.png"
      snabbt(c2, {
        fromRotation: [0, rotateNum*Math.PI, 0],
        transformOrigin: [c2.clientWidth/2, 0, 0],
        easing: 'easeOut',
      });
      snabbt(c3, {
        fromRotation: [0, rotateNum*Math.PI, 0],
        transformOrigin: [c3.clientWidth/2, 0, 0],
        easing: 'easeOut',
      });
      snabbt(c4, {
        fromRotation: [0, rotateNum*Math.PI, 0],
        transformOrigin: [c4.clientWidth/2, 0, 0],
        easing: 'easeOut',
      });
      snabbt(c5, {
        fromRotation: [0, rotateNum*Math.PI, 0],
        transformOrigin: [c5.clientWidth/2, 0, 0],
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
  width : 200px;
  height : 50px;
}
.cardImg {
  width : 130px;
  height : 200px;
}
</style>
