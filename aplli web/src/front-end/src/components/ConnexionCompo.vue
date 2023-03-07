<template>
  <div>
    <h1>De retour :</h1>
    <form id="connexion" @submit="login">
      <div class="row">
        <div class="col-6">
          <label for="email" id="champ_email">Email :</label><br />
          <label for="password" id="champ_mdp">Mot de passe :</label>
        </div>
        <div class="col-6">
          <input id="email" v-model="email" type="text" name="email" />
          <input id="password" v-model="password" type="password" name="password" />
        </div>
      </div>
        <button class="btn btn-danger btn-lg">Connexion</button>
        <div id="error">
          
        </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import {mapMutations} from "vuex";
export default {
  name: "ConnexionCompo",

  methods: {
     ...mapMutations(['SET_User_Id', "SET_Is_Admin"]),

    login(e) {
      e.preventDefault();
      let form = document.querySelector("form");
      let formData = new FormData(form);
      let data = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
      axios
        .post("http://localhost:8081/api/auth/signin", data, {
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
      document.querySelector("#error").textContent = "Mot de passe/Email invalide";
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
      //this.$router.push({ path: "MurAppli" });
    },
   
  },
};
</script>

<style scoped>
@media (min-width: 300px) {
  label{
  font-size: 1.2rem;
  font-family: cursive;
}
input{
  margin: 5%;
  width: 100%;
  height: 30%;
}
h1{
  text-align: center;
  color: red;
  font-family: cursive;
}
button{
  margin-left: 22%;
  margin-right: 22%;
}
}
@media (min-width: 800px) {
  h1{
    margin: 5%;
  }
  label{
    font-size: 1.3em;
    margin-top: 7%;
  }
  button{
    margin-left: 34%;
    margin-right: 40%;
    margin-top: 5%;
  }
}
@media (min-width: 1000px) {
  label{
    margin-top: 7%;
    font-size: 1.5em;
  }
  button{
    font-size: 1.3em;
    margin-left: 35%;
    margin-right: 50%;
  }
}
</style>
