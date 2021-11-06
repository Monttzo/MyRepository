<template>
<div id="app" class="app">
  <a href="https://github.com/Monttzo?tab=repositories" class="GitButton" target="_blank"><img src="../public/github.png"></a>
  <a href="https://www.linkedin.com/in/daniel-esteban-monsalve-pulido-21824a1a2/" class="LinkedinButton" target="_blank"><img src="../public/linkedin.png"></a>
  <section class="main-component">
    <section class="Home">
      <router-view>
      </router-view>
    </section>
    <section id="Menu" class="show-nav">
      <div class="IcoBox" v-on:click="ButtonMenu" >
        <img src="../public/arrow-left2.png" class="ButtonIcoBox">
      </div>
      <section class="MenuBody">
        <img src="../public/home3.png" class="HomeButton" v-on:click="ButtonLoadHome">
        <h1>These are my Projects</h1>
        <section class="MenuTextOptions">
          <section class="MenuPhp">
            <h2 class="subtitleMenu">PHP, CSS3, HTML5 and JAVASCRIPT</h2>
            <il>
              <li v-on:click="ButtonStationery">Stationery Isailo</li>
              <li v-on:click="ButtonNursing">Nursing Isailo</li>
              <li v-on:click="ButtonSchool">School Blaise Pascal</li>
            </il>
          </section>
            
          <section class="MenuJava">
            <h2 class="subtitleMenu">JAVA</h2>
            <il>
              <li v-on:click="ButtonShortFilms">Short Films</li>
            </il>
          </section>

          <section class="MenuDjango">
            <h2 class="subtitleMenu">DJANGO AND VUE.JS</h2>
            <il>
              <li v-on:click="ButtonWallArt">WallArt</li>
            </il>
          </section>
        </section>
        <section class="footerMenu">
          <p>Page developed by Daniel Esteban Monsalve Pulido, you can contact me to my email dpulido59@gmail.com</p>
        </section>
      </section>
    </section>
  </section>
</div>
</template>

<script>
export default {
  name: "App",
  data: function(){

  },
  methods:{
    ButtonMenu: function(){
      if (document.querySelector("#Menu").classList.contains('show-nav')) {
          // Do things on Nav Close
          (document.querySelector("#Menu").classList.remove('show-nav'));
      } else {
          // Do things on Nav Open
          document.querySelector("#Menu").classList.add('show-nav');
      }
    },
    LoadHome: function(){
      this.$router.push({name: "Home"});
    },
    ButtonStationery: function(){
      this.$router.push({name: "StatIsailo"});
      this.ButtonMenu();
    },
    ButtonNursing: function(){
      this.$router.push({name: "NurIsailo"});
      this.ButtonMenu();
    },
    ButtonSchool: function(){
      this.$router.push({name: "SchoolBlaise"});
      this.ButtonMenu();
    },
    ButtonShortFilms: function(){
      this.$router.push({name: "shortDocumen"});
      this.ButtonMenu();
    },
    ButtonWallArt: function(){
      this.$router.push({name: "WallArt"});
      this.ButtonMenu();
    },
    ButtonLoadHome: function(){
      this.LoadHome();
      this.ButtonMenu();
    },
  },
  created: function(){
    this.LoadHome();
  }
}
</script>
<style>
h1 {
  margin: 10px;
  font-size: 55px;
}
h2 {
  font-size: 35px;
}
p {
  text-align: left;
  margin: 0px 15%;
  width: 70%;
  font-size: 35px;
}
a img {
  text-decoration: none;
  cursor: pointer;
}
.footerMenu {
  position: absolute;
  bottom: 20px;
}
.HomeButton {
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 100px;
  display: flex;
  width: 40px;
  height: 35px;
}
.MenuTextOptions {
  justify-content: center;
  display: inline-flex;
}
.MenuTextOptions li {
  cursor: pointer;
  font-size: 35px;
}
.subtitleMenu {
  text-align: center;
  height: 70px;
  list-style: none;
}
.MenuPhp {
  width: 300px;
}
.MenuJava {
  width: 300px;
  display: block;
  border-width: 0px;
  border-style: dashed;
  border-left-width: 2px;
  border-right-width: 2px;
  border-color: #f3cba5;
}
.MenuDjango {
  width: 300px;
}
.LinkedinButton {
  z-index: 999;
  position: fixed;
  top: 50px;
  left: 170px;
  display: flex;
  width: 40px;
  height: 40px;
}
.GitButton {
  z-index: 999;
  position: fixed;
  top: 50px;
  left: 100px;
  display: flex;
  width: 40px;
  height: 40px;
}
.ButtonIcoBox {
  transform: rotate(-180deg);
  display: flex;
  width: 40px;
  height: 40px;
}
.show-nav .ButtonIcoBox {
  transition: 1s ease all;
  transform: rotate(-360deg);
}
.show-nav .MenuBody {
  transition: 1s ease all;
  -webkit-transform: translateX(95vw);
  transform: translateX(95vw);
  -webkit-transform: translate3d(95vw, 0, 0);
  transform: translate3d(95vw, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden; 
  z-index: 99;
}
.show-nav .IcoBox{
  transition: 1s ease all;
  -webkit-transform: translateX(95vw);
  transform: translateX(95vw);
  -webkit-transform: translate3d(95vw, 0, 0);
  transform: translate3d(95vw, 0, 0);
}
.MenuBody {
  color: #f3cba5;
  transition: 1s ease all;
  background-color: #25161b;
  height: 100%;
  width: 95%;
  right: 0px;
  position: absolute;
  z-index: 99;
  
}
.IcoBox {
  z-index: 99;
  border-radius: 8px 0 0 8px;
  align-items: center;
  justify-content: center;
  transition: 1s ease all;
  align-self: center;
  cursor: pointer;
  height: 90px;
  width: 5%;
  position:absolute;
  display: flex;
  background-color: #25161b;
  left: 0px;
}
#Menu {
  top: 0;
  z-index: 99;
  position: fixed;
  overflow: hidden;
  display: flex;
  width: 100%;
  height:-webkit-fill-available;
}
.main-component {
  /*position: absolute;*/
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Home {
  width: 80%;
  height: 100%;
  align-self: center;
}
.app {
  font-family: 'Dongle', sans-serif;
  text-align: center;
  color: #25161b;
  background-color: #f3cba5;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  position: absolute;
  align-items: center;
}
body {
  margin: 0 0 0 0;
}
</style>
