<template>
  <div class="home">
    <HelloWorld />
    <router-link to="/login">Link to login</router-link>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
