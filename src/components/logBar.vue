<template>
<div class="log-bar" style="margin-top : 50px">
  <div class="logs">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">GameID</th>
          <th scope="col">WINNER</th>
          <th scope="col">WINNER MADE</th>
          <th scope="col">PRIZE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game, i) in $parent.games" v-bind:class="{'table-active' : !(i % 2)}" v-if="!game.is_gaming && game.winner_name !== ''">
          <th scope="row">{{game.id}}</th>
          <td>{{game.winner_name}}</td>
          <td>{{cardConverter(JSON.parse(game.winner_made))}}</td>
          <td>{{Math.floor(game.prize*1000)/1000}}p</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible_1: false,
      cardArr: ['1  ', '2  ', '3  ', '4  ', '5  ', '6  ', '7  ', '8  ', '9  ', '10 ', 'J  ', 'Q  ', 'K  '],
    };
  },
  methods: {
    cardMaker: function(num) {
      if (num - 1 <= 13) return '♠' + this.cardArr[((num - 1) % 13)];
      if (num - 1 <= 26) return '♦' + this.cardArr[((num - 1) % 13)];
      if (num - 1 <= 39) return '♥' + this.cardArr[((num - 1) % 13)];
      if (num - 1 <= 52) return '♣' + this.cardArr[((num - 1) % 13)];
    },
    cardConverter: function(arr) {
      let winnerMade = '';
      for (let i = 0; i < 5; i++) winnerMade += this.cardMaker(arr[i]);
      return winnerMade;
    },
  },
  created() {},
}
</script>

<style scoped>
.license {
  text-align: center;
  font-size: 10px;
}
</style>
