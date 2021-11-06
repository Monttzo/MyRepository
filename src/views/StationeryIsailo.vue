<template>
    <section class="PageContent">
        <h1>Stationery Isailo</h1>
        <br>
        <p>This is a monolithic application.</p>
        <p>This project was created during the year of 2019, and was developed in Html, css3 and Php, 
            additionaly, was created a database in Mysql, using pattern MVC.</p>
        <p>Only have one funcionally model, it is Users. We can login and do the CRUD with the users,
            in this project exists two type of users: Admin and Seller</p>
        <img src="../../public/StationaryIsailoLogin.png" class="imgRepo">
        <img src="../../public/StationaryIsailoHome.png" class="imgRepo">
        <p>You can see this proyect in my GitHub repository, only you need click on GitHub logo</p>  
    </section>
</template>

<script>
export default {
    name: "StatIsailo",
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