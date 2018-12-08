<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">EOS-poker</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <span class="nav-link" href="#">Home <span class="sr-only">(current)</span></span>
      </li>
      <li class="nav-item">
        <span class="nav-link">Community<span class="popuptext" id="Community">{{CommunityContent}}</span></span>
      </li>
      <li class="nav-item">
        <span class="nav-link">Fairness<span class="popuptext" id="Fairness">{{FairnessContent}}</span></span>
      </li>
      <li class="nav-item">
        <span class="nav-link">How to Play<span class="popuptext" id="HowToPlay">{{HowToPlayContent}}</span></span>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
};
</script>

<style scoped>
/* Popup container - can be anything you want */
.nav-link {
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* The actual popup */
.nav-link .popuptext {
  visibility: hidden;
  width: 600px;
  height: 300px;
  background-color: #555;
  color: #fff;
  text-align: left;
  font-size: 25px;
  border-radius: 15px;
  padding: 20px 20px;
  position: absolute;
  z-index: 1;
  bottom: -840%;
  left: 50%;
  margin-left: -80px;
}
/* Popup arrow */
.nav-link .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 10%;
  margin-left: 0px;
  margin-top: -335px;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent #555 transparent ;
}
/* Toggle this class - hide and show the popup */
.nav-link .show {
  visibility: visible;
  -webkit-animation: fadeIn 0.2s;
  animation: fadeIn 0.2s;
}
.hide {
  visibility: hidden;
}
/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
