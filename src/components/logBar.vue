<template>
<div class="log-bar" style="margin-top : 50px">
  <div class="logs">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">GameID</th>
          <th scope="col">WINNER</th>
          <th scope="col">WINNER MADE</th>
          <th scope="col">MY MADE</th>
          <th scope="col">PRIZE</th>
        </tr>
      </thead>
      <tbody>
        <!--
        <tr class="table-active">
          <th scope="row">{{games[0].id}}</th>
          <td>{{games[0].winner}}</td>
          <td>{{games[0].winnerMade}}</td>
          <td>{{games[0].myMade}}</td>
          <td>{{games[0].prize}}</td>
        </tr>
        <tr>
          <th scope="row">{{games[0].id}}</th>
          <td>{{games[0].winner}}</td>
          <td>{{games[0].winnerMade}}</td>
          <td>{{games[0].myMade}}</td>
          <td>{{games[0].prize}}</td>
        </tr>
        -->
        <tr class="table-active">
          <th scope="row">Active</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">Default</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="table-active">
          <th scope="row">Active</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">Default</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="table-active">
          <th scope="row">Active</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">Default</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="table-active">
          <th scope="row">Active</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">Default</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="table-active">
          <th scope="row">Active</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">Default</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="table-active">
          <th scope="row">Active</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">Default</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="table-active">
          <th scope="row">Active</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">Default</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="table-active">
          <th scope="row">Active</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">Default</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="table-active">
          <th scope="row">Active</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">Default</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="table-active">
          <th scope="row">Active</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">Default</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr class="table-active">
          <th scope="row">Active</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">Default</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
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
      games: [],
    };
  },
  methods: {
    //자주 쓸것 같아서 함수로 뺌
    getLog: function() {
      this.$http.get('/api/getGames').then(response => {
        this.games = response.data;
      }).catch(error => {
        console.error(error);
      });
    },
  },
  created() {
    //this.getLog();
  },
}
</script>
