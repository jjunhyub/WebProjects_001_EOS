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
        <tr v-for="(game, i) in $parent.games" v-bind:class="{'table-active' : !(i % 2)}" v-if="!game.is_gaming">
          <th scope="row">{{game.id}}</th>
          <td>{{game.winner_id}}</td>
          <td>{{game.winner_mande}}</td>
          <td>{{game.prize}}</td>
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

    };
  },
  methods: {
    getGameLogs: function() {
      this.$http.get('/api/getGameLogs').then(response => {
        this.$parent.games = response.data;
        console.log('game got : ');
        console.log(this.$parent.games);
      }).catch(error => {
        console.log('getGameError : ');
        console.error(error);
      });
    },
  },
  created() {
    this.getGameLogs();
  },
}
</script>
