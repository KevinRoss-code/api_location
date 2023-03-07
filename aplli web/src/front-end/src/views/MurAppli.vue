<template>
  <div>
      <div class="bordereau">
        <img alt="Vue logo" src="../assets/logo.png">
        <p>Bienvenue sur le réseau d'AssurerPlus</p>    
      </div>
       <Articles/> 
      <div id="app">
     </div>
    <Map/>
  </div>
</template>

<script>
import Articles from '@/components/Articles.vue'
import Map from '@/components/Map.vue'

export default {
    name: 'MurAppli',
    components: {
        Articles,
        Map
    },
}
</script>
<style scoped>
@media (min-width: 300px) {
  .bordereau{
  border: double #ce323a;
  margin-left: 20%;
  margin-right: 20%;
  padding: 2%;
  background-color: white;
}
p{
  font-size: 1.5em;
}
}
@media (min-width: 1000px) {
  p{
    font-size: 1.8em;
    margin: 2%;
  }
}
</style>