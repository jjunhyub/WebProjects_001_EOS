<template>
<div class="home">
  <div class="eos-bar" style="padding : 50px;">
    <span style="margin-right : 20px">400.4672</span>
    <img class="money-pot-image" src="../assets/eoslogo.png" width=45px height=78px />
  </div>
  <div class="card-bar">
    <div class="card">
      <div class="card-img" style="padding : 20px; padding-bottom : 0px; padding-top : 50px">
        <img src="../assets/trumpcards.png" style="width : 300px; height : 200px;" />
      </div>
      <div style="padding : 30px;">
        <button type="button" class="btn btn-danger" style="width : 200px; height : 50px;">Login</button>
      </div>
    </div>
  </div>
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
</div>
</template>

<script>
import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      location: localStorage.location || '',
      icons: {},
    };
  },
  mounted() {},

  methods: {

  },
};
</script>

<style>
.eos-bar {
  text-align: center;
  font-size: 5em;
  color: white;
}

.card-bar {
  text-align: center;
  color: black;
  background-color: black;
}
</style>
