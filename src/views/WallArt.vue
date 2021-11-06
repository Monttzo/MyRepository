<template>
    <section class="PageContent">
        <h1>WallArt</h1>
        <br>
        <p>This isn't a monolithic application.</p>
        <p>This project was created during the year of 2021, and was developed in Django and Vue.js, 
            additionaly, use jwt in the Back End and was created a database in Postgre through migrations,
            the aplication have two type of users, Sponsor and Artist</p>
        <p>Only have one funcionally model, it is User. We make Crud with the Users, is a short application</p>
        <img src="../../public/WallArtHome.png" class="imgRepo">
        <img src="../../public/WallArtPrincipal.png" class="imgRepo">
        <img src="../../public/WallArtModify1.png" class="imgRepo">
        <img src="../../public/WallArtModify2.png" class="imgRepo">
        <img src="../../public/WallArtModify3.png" class="imgRepo"> 
    </section>
</template>

<script>
export default {
    name: "WallArt",
    data: function(){

    },
    methods:{
        
    }
}
</script>

<style>
.PageContent {
    padding: 50px;
}
.imgRepo{
    margin: 20px 0px;
    z-index: 1;
    width: 60%;
}
</style>