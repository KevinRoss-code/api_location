<template>
    <div>
        <div class="row">
          <div class="col-6"><p>{{users.name}}</p></div>
          <div class="col-6"><p>{{users.surname}}</p></div>
        </div>
        <div class="row">
          <div class="col-6"><p>{{users.email}}</p></div>
          <div class="col-6"><p>{{users.job}}</p></div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
          users: []
        }
    },
    created() {
          axios.get("http://localhost:8080/api/litiges/historique", {
            headers: {
              "Content-type": "application/json",
              "x-access-token": localStorage.getItem("user"),
            },
          }).then(response => {
            this.users = response.data;
            console.log(response.data);
          })
        },
}
</script>
<style>
button{
  margin-left: 50%;
}
</style>