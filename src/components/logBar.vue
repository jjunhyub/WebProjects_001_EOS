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
          <td>{{game.winner_made}}</td>
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
  },
  created() {
  },
}
</script>
