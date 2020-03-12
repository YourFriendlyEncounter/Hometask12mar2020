<template>
  <div id="app" v-bind:class="{ 'normal-background-image': !isAltMode, 'alternate-background-image': isAltMode }">
    <header v-bind:class="{ 'background-normal': !isAltMode, 'background-alternative': isAltMode }">
      <router-link 
      id="main-link" 
      v-bind:class="{ 'background-normal': !isAltMode, 'background-alternative': isAltMode }"
      to="/">Learn Vue in 5 decades or less!</router-link>
    </header>
    <hr>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: {
     Footer
  },
  methods:{

  },
  computed:{
    isAltMode: function(){
      return this.$root.altModeEnabled
    }
  }
}
</script>

<style>
body{
    margin: 0;
    min-height: 100vh;
}
.normal-background-image{
    background-image: url("assets/Background.png");
    background-attachment: fixed;
    background-size: cover; 
}
.alternate-background-image{
    background-image: url("assets/background.jpg");
    background-attachment: fixed;
    background-size: cover; 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #96a2ad;
  min-height: 100vh;
}
#main-link{
  text-decoration: none;
  text-shadow: 1px 1px 2px #444;
  font-size: 200%;
  font-family: 'Roboto Slab';
}
#main-link:hover{
  text-shadow: 1px 1px 2px rgb(255, 230, 184);
}
.background-normal{
  background-color:  rgba(54, 59, 68, 1);
  transition: background-color .5s, color .5s;
  color:rgb(202, 210, 223);
}
.background-alternative{
  background-color:  rgba(209, 216, 228, 1);
  transition: background-color .5s, color .5s;
  color:rgb(40, 43, 48);
}
.article-block-normal{
    width: 24rem;
    box-shadow: 0px 0px 8px #ccc;
    border-radius: 5px;
    border: 1px outset white;
    background-color: rgba(204, 243, 255, 0.8);
    transition: background-color .5s, color .5s;
    padding: 2rem;
    margin: 1rem;
    color: #2d363f;
    font-family: 'Roboto Slab';
}
.article-block-normal:hover{
    background-color:rgba(255, 255, 255, 0.9);
    transition: background-color .5s, color .5s;
}
.article-block-alternative{
    width: 24rem;
    box-shadow: 0px 0px 8px #ccc;
    border-radius: 5px;
    border: 1px outset white;
    background-color: rgba(204, 243, 255, 0.8);
    transition: background-color .5s, color .5s;
    padding: 2rem;
    margin: 1rem;
    color: #31363b;
    font-family: 'Roboto Slab';
}
.article-block-alternative:hover{
    background-color:rgba(255, 255, 255, 0.9);
    transition: background-color .5s, color .5s;
}
hr{
  margin: 0;
}
</style>
