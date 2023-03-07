<template>
  <div>
    <button class="btn btn-primary btn-lg info" @click="profil">
      Voir le profil
    </button>
    <button class="btn btn-danger btn-lg info" @click="deconnexion">
      Déconnexion
    </button>
    <form class="border border-danger rounded" style="background-color:#f4898d" @submit="envoi"  v-if="!formSubmitted">
      <p>Votre article ici : </p>
      <div class="class row">
        <div class="class col-5">
          <label for="identifiantUser" id="champs_identifiantUser">Votre numéro de contract ou email :</label><br />
          <label for="contenu" id="champs_contenu">Cause du litige :</label>
        </div>
        <div class="class col-5">
          <input type="text" name="identifiantUser" id="identifiantUser" v-model="identifiantUser" /><br />
          <input type="text" name="contenu" id="contenu" v-model="contenu"/><br />
          <input type="file" id="file" ref="file" v-on:change="onChangeFile()" />
          <button id="btnSend" class="btn btn-danger btn-lg">Poster</button>
        </div>
      </div>
    </form>
  </div>
  <div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formSubmitted: false
    }
  },

  methods: {
    envoi(e) {
      e.preventDefault();
      let form = document.querySelector("form");
      let formData = new FormData(form);
      formData.append("image", this.file);
      console.log(this.file);
      
      console.log(formData);
      axios
        .post("http://localhost:8081/api/litiges", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": localStorage.getItem("user"),
          },
        })
        .then((res) => {
          console.log("res data then", res.data);
          this.formSubmitted = true;
        })
        .catch((err) => {
          console.log(err);
  
        });
    },
    onChangeFile() {
      this.file = this.$refs.file.files[0];
      console.log(this.file)
    },
    profil() {
      this.$router.push({ path: "Profil" });
    },
    deconnexion(){
      localStorage.clear()
      this.$router.push({path: "Connexion"})
    },
      // Fonction de calcul de distance en kilomètres entre deux coordonnées géographiques
      distance(lat1, lng1, lat2, lng2) {
      const R = 6371; // rayon moyen de la Terre en km
      const dLat = (lat2-lat1) * Math.PI / 180;
      const dLng = (lng2-lng1) * Math.PI / 180;
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLng/2) * Math.sin(dLng/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      return R * c;
    },
    // Fonction de formatage de distance en kilomètres avec deux décimales
    formatDistance(distance) {
      return distance.toFixed
    },
    ...mapActions(["loadArticles"]),
  },
};
</script>
<style>
@media (min-width: 300px) {
  form{
  padding: 2%;
  margin: 2%;
}
label{
  font-size: 0.8rem;
  font-family: cursive;
}
input{
  margin: 5%;
  font-size: 60%;
  margin-top: 20%;
}
button{
  font-size: 1em;
  margin-left: 4%;
  margin-top: 5%;
  margin-bottom: 3%;
}
#btnSend{
  font-size: 0.8em;
}
}
@media (min-width: 800px) {
  .info{
    margin-left: 15%;
    font-size: 1.5em;
  }
  label{
    font-size: 1.2em;
    margin-top: 5%;
  }
  input{
    font-size: 100%;
    margin-bottom: 12%;
  }
  #btnSend{
    font-size: 1.2em;
  }
}
@media (min-width: 1000px) {
  .info{
    margin-left: 20%;
    font-size: 1.7em;
  }
  label{
    margin-top: 20%;
    font-size: 1.5em;
  }
  input{
    font-size: 1.4em;
    margin-top: 23%;
  }
  #btnSend{
    font-size: 1.5em;
  }
}
</style>