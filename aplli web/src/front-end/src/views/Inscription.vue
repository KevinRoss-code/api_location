<template>
  <div class="inscription">
    <div class="bordereau">   
      <img alt="Vue logo" src="../assets/logo.png">
      <p>Bienvenue sur le réseau d'AssurerPlus</p>
    </div>
    <InscriptionCompo />
  </div>
</template>

<script>
// @ is an alias to /src
import InscriptionCompo from '@/components/InscriptionCompo.vue'

export default {
  name: 'Inscription',
  components: {
    InscriptionCompo
  }
}
</script>

<style>
@media (min-width: 300px){
  .inscription{
  background-color: #f4898d;
}
.bordereau{
  border: double #32a1ce;
  margin-left: 20%;
  margin-right: 20%;
  padding: 2%;
  background-color: white;
}
p{
  font-size: 1.8rem;
  text-align: center;
  font-family: cursive;
}
form{
  margin-left: 10%;
  font-size: 1.5rem;
  margin-bottom: 5%;
  padding-bottom: 5%;
}
img {
  width: 40%;
  margin-left: 30%;
}
}

</style>
