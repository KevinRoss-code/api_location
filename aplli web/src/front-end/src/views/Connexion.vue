<template>
  <div class="connexion">
    <div class="bordereau">
      <img alt="Vue logo" src="../assets/logo.png">
      <p>Bienvenue sur le réseau d'AssurerPlus</p>   
    </div>
    <ConnexionCompo />
  </div>
</template>
<script>
// @ is an alias to /src
import ConnexionCompo from '@/components/ConnexionCompo.vue'

export default {
  name: 'Connexion',
  components: {
    ConnexionCompo
  }
}
</script>
<style scoped>
@media (min-width: 300px) {
.bordereau{
  border: double #ce323a;
  margin-left: 20%;
  margin-right: 20%;
  padding: 2%;
}
p{
  font-size: 1.5rem;
  text-align: center;
  font-family: cursive;
}
}
@media (min-width: 800px) {
  p{
    font-size: 1.8em;
  }
}
</style>