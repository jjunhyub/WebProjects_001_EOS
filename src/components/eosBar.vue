<template>
  <div class="eos-bar" style="padding : 50px;">
    <span style="margin-right : 20px">400.4672</span>
    <img class="money-pot-image" src="../assets/eoslogo.png" width=45px height=78px />

  </div>
</template>

<script>
  export default{
    data(){
      return{

      };
    },
    created() {
        this.$http.get('/api/getLatestGame').then(response=> {
          console.log(response.data.created_at);
          console.log(response.data.prize);
        }).catch(error=>{
          console.error(error);
        });

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
