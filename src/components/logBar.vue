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
/*
export default {
  data() {
    return {
      log: {

      },
      logs:[],
    };
  },
  methods: {
    //자주 쓸것 같아서 함수로 뺌
    timeChecker: function() {
      this.$http.get('/api/getLog').then(response => {
        this.log = response.data;
      }).catch(error => {
        console.error(error);
      });
    },
  },
  created() {
    this.$http.get('/api/getLog').then(response => {
      for(var i =0;i<sizeof(response.data);i++)
      {
        //여기서 log를 초기화해주지 않아도 되나?
        this.log=response.data[i];
        logs.push(log);
      }
    }).catch(error => {
      console.error(error);
    });
  },
}
*/
</script>
