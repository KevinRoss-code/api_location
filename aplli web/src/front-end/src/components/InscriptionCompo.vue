<template>
  <div id="sign">
    <h1 id="title">Première connexion ? Inscrivez vous :</h1>
    <form id="form_sign" @submit="inscription">
      <div class="row">
        <div class="col-4">
          <label for="numberContrat" id="champ_numberContrat_connexion">Numéro contrat:</label><br/>
          <label for="email" id="champ_numberContrat_connexion">Email:</label><br/>
          <label for="password" id="champ_mdp_connexion">Mot de passe:</label><br/>
        </div>
        <div class="col-6">
           <input id="numberContrat_connexion" v-model="numberContrat" type="text" name="numberContrat" /><br/>
           <input id="email_connexion" v-model="email" type="text" name="email" /><br/>
           <input id="password_connexion" v-model="password" type="password" name="password" /><br/>
        </div>
      </div>
        <button id="push_connexion" class="btn btn-danger btn-lg">Inscription</button>
        <div id="error">
        </div>
    </form>
  </div>
</template>



<script>
import axios from "axios";
import {mapMutations} from "vuex";
export default {
  name: "InscriptionCompo",
  props: {
    msg: String,
  },
  methods: {
     ...mapMutations(['SET_User_Id', "SET_Is_Admin"]),

    inscription(e) {
      e.preventDefault();
      let form = document.querySelector("form");
      let formData = new FormData(form);
      let data = {
        numberContrat: formData.get("numberContrat"),
        email: formData.get("email"),
        password: formData.get("password")
      };
      axios
        .post("http://localhost:8081/api/auth/signup", data, {
          headers: {
            "Access-Control-Allow-Headers" : "x-access-token, Origin, Content-Type, Accept"
          },
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("user", res.data.accessToken);
          // this.SET_User_Id(res.data.id);
          // this.SET_Is_Admin(res.data.isAdmin);
          this.$router.push({ path: "MurAppli" });
        })
        .catch(error => {
          if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      document.querySelector("#error").textContent = error.response.data.error;
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);

        });
     
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 300px){
  label{
  font-size: 0.8em;
  font-family: cursive;
  margin-top: 13%;
}
input{
 width: 120%;
 margin: 12%;
}
h1{
  text-align: center;
  color: rgb(29, 3, 3);
  font-size: 1.5em;
  font-family: cursive;
}
button{
  margin-left: 22%;
  margin-right: 22%;
}
}
@media (min-width: 800px) {
h1{
  margin-top: 7%;
  font-size: 1.8em;
}
label{
  font-size: 1.3em;
}
input{
  margin-top: 16%;
}
button{
  margin-left: 35%;
  margin-right: 35%;
}
}
@media (min-width: 1000px) {
h1{
  font-size: 2.5em;
}
label{
  font-size: 1.5em;
  margin-top: 25%;
  margin-bottom: 15%;
}
input{
  height: 9%;
  margin-bottom: 11%;
}
button{
  font-size: 1.3em;
}
}
</style>
