<template>
       <section id="hero">
        <div id="hero-content">
          <h1>My Travel Page</h1>
          <p>Let's explore the world together</p>
          <router-link to="/destinations">Discover</router-link> 
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
  
}
</script>

<style scoped>
#hero {
  height: 50rem;
  background-image: url("https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_960_720.jpg");
  background-position: center;
  background-size: cover;
}

#hero-content {
  width: 70%;
  padding: 3.125rem 0;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(51, 47, 47, 0.8);
  box-shadow: 2px 4px 8px rgb(68, 67, 67);
  border-radius: 8px;
  position: relative;
  top: 12.5rem
}

#hero-content h1 {
  color: white;
  text-transform: uppercase;
  font-size: 3.125rem;
  font-family: "Raleway", sans-serif;
  margin: 0;
}

#hero-content p {
  color: white;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 18.75rem;
  margin-bottom: 2rem;
}

#hero-content a {
  text-decoration: none;
  background-color: rgb(255, 251, 0);
  padding: 0.75rem 1.5rem;
  color: rgb(68, 68, 68);
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 2px 4px 8px rgb(68, 67, 67);
}

#hero-content a:hover{
  background-color: rgb(255, 238, 0);
}

@media (max-width: 48rem) {
#hero-content h1 {
  font-size: 1.5rem;
}

#hero-content p {
  font-size: 0.7rem;
}

#hero-content a {
  padding: 0.4rem 0.75rem;
  font-size: 0.65rem;
}
}
</style>