<template>
  <div id="app">
    <status/>
    <h1>streamseek</h1>
    <h2>because music is everywhere</h2>
    <router-view/>
  </div>
</template>

<script>
import Status from '@/components/status/Status'

export default {
  name: 'App',
  components: {
    Status
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 4px;
  background: #fdfffc none;
}
#app h1 {
  color: #2c3e50;
  font-size: 3.4rem;
}
#app h2 {
  color: #39a0ed;
  font-size: 1.3rem;
  margin-bottom: 35px;
}
ul.simple-links-container li {
  list-style: none;
  display: inline-block
}
</style>
