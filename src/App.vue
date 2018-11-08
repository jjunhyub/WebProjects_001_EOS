<template>
<div id="app">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">EOS-poker</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active"><!--href가 아니라 button으로 해서 창 뜨는 식으로해도 좋을-->
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Community</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Fairness</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">How to Play</a>
        </li>
      </ul>
    </div>
  </nav>
  <main class="container mt-2">
    <router-view />
  </main>
</div>
</template>
