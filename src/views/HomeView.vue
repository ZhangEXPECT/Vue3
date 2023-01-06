<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld @helloE="sayHello" msg="Welcome to Your Vue.js App">
      <span>hhehehe</span>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup(){
    function sayHello(){
      // alert(`fsfa${value}`);
    }
    return sayHello
  },
}
</script>
