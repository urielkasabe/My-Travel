<template>
       <section id="hero">
        <div id="hero-content">
          <h1>Mi Pagina de viajes</h1>
          <p>Exploremos el mundo juntos</p>
          <router-link to="/">Descubri lugares</router-link> 
        </div>
      </section>
      <base-gallery></base-gallery>
</template>

<script>
import BaseGallery from './BaseGallery.vue';

export default {

  components: {
    BaseGallery
  },
    data() {
        return{

        };
    }
}
</script>

<style scoped>
#hero {
  height: 800px;
  background-image: url("../../images/places/travel.jpg");
  background-position: center;
  background-size: cover;
}

#hero-content {
  width: 900px;
  padding: 50px 0;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(51, 47, 47, 0.8);
  box-shadow: 2px 4px 8px rgb(68, 67, 67);
  border-radius: 8px;
  position: relative;
  top: 200px;
}

#hero-content h1 {
  color: white;
  text-transform: uppercase;
  font-size: 50px;
  font-family: "Raleway", sans-serif;
  margin: 0;
}

#hero-content p {
  color: white;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 300px;
  margin-bottom: 32px;
}

#hero-content a {
  text-decoration: none;
  background-color: rgb(255, 251, 0);
  padding: 12px 24px;
  color: black;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 2px 4px 8px rgb(68, 67, 67);
}

#hero-content a:hover{
  background-color: rgb(255, 238, 0);
}
</style>