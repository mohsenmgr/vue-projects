<template>
  <div id="app">
    <header>
     <FCHeader />
    </header>
     <router-view>
       <Login />
    </router-view>
   
  </div>
</template>


<script>
import Login from './components/login.vue'
import FCHeader from './components/FC-Header.vue'

export default {
  name: 'App',
  components: {
    Login,
    FCHeader
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");


#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
