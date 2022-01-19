<template>
  <div id="app">
    <Home />
    <router-view>
    </router-view>
  </div>
</template>


<script>
import Home from './views/Home.vue'

export default {
  props: {

  },
  components: {
    Home
    
  }


}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
