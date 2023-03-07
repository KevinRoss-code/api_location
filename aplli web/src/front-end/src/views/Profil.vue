<template>
    <div class="class profilUser">
        <p>Votre profil utilisateur :</p>
        <ProfilUser/>
    </div>
</template>
<script>
import ProfilUser from "@/components/ProfilUser.vue"
export default {
    name:'Profil',
    components: {
        ProfilUser,
    }
    
}
</script>
<style>
p{
    font-size: 2rem;
    text-align: center;
}
</style>