<script lang="jsx">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { useState } from 'vue'
//import Widget, { modal, journey, user } from './package/modal'
//import './App.css'

new Widget({
  props: {
    config: {
      serverConfig:{
        baseUrl: 'https://openam-rocklabz-rocklabz.forgeblocks.com/am/',
        timeout: 5000, 
      }
    }
  },
  target: document.getElementById('widget')
})

export default defineComponent({
  render() {
    return (
      <div>
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + JSX/TSX" />
      </div>
    );
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
