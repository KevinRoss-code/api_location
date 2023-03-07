<template>
  <div id="nav">
    <router-link to="/">Inscription</router-link> |
    <router-link to="/connexion">Connexion</router-link> 

     
  </div>
  <router-view/>
</template>

<style>
 @media (min-width: 300px){
  #nav {
    font-size: 1.5rem;
    text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fc1212;
}
}


</style>
