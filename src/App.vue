<template>
 <div>
  <NavBar/>
  <router-view/>
 </div>
 
</template>

<script>

import NavBar from './components/modules/Inscripcion/components/NavBar.vue';
import Bienvenida from './components/modules/Inscripcion/pages/Bienvenida.vue'


export default {
  name: 'App',
  components: {
    Bienvenida, NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background :#D1BEB0
  
}
</style>
