<template>
  <div id="app">
    <div id="nav">
      <div class="header-title">Nutrition Guide</div>
    </div>
    <div class="search-box">
      <div class="search-box_input-container">
        <input class="search-box_input-container_input" type="text" placeholder="Search..." />
      </div>
      <div class="search-box_icon-container">
        <i class="fa fa-search search-box_icon-container_icon"></i>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-image: linear-gradient(-296deg, #005e5d, #00857a);
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header-title {
  color: #ffffff;
  font-size: 32px;
}

.search-box {
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  transform: scale(0);
  transform-origin: 100% 0%;

  &_input-container {
    flex-grow: 12;
    margin-left: 20px;

    &_input {
      width: 100%;
      height: 50px;
      font-size: 30px;
      border: none;
      background-color: #eee;
      box-sizing: border-box;

      &:focus {
        outline: none;
      }
    }
  }

  &_icon-container {
    flex-grow: 1;
    padding: 10px;

    &_icon {
      font-size: 30px;
      cursor: pointer;
    }
  }
}

div.search-box {
  animation: trans-in 1s ease;
  animation-fill-mode: forwards;
}

@keyframes trans-in {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
</style>
