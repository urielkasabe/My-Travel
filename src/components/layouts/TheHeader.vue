<template>
  <header>
    <div id="page-logo">
      <router-link to="/">Mi Viaje</router-link>
    </div>
    <nav>
      <ul>
        <li><router-link to="/destinations">Destinos</router-link></li>
        <li> <button class="dropdown-btn" @click="toggleIsClicked">
            Encuentra Vuelos
          </button>
          <div class="dropdown-container" v-if="isCliccked">
            <a href="https://www.skyscanner.com/">SkyScanner</a>
            <a href="https://www.kayak.com/">Kayak</a>
            <a href="https://www.opodo.com/home/">Opodo</a>
          </div></li>
      </ul>
    </nav>
    <ham-button></ham-button>
  </header>
</template>

<script>
import hamButton from './hamButton.vue';
export default {
  components: {
    hamButton
  },
  data() {
    return{
      isCliccked: false
    };
  },
  methods: {
    toggleIsClicked() {
      this.isCliccked = !this.isCliccked;
    }  
    }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.94rem 3.75rem;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
}

#page-logo a {
  padding: 0.625rem;
  font-family: "Oleo Script", sans-serif;
  color: rgb(245, 243, 160);
  font-size: 3.125rem;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgb(0, 0, 0);
  background-color: transparent;
}

header ul,
.active ul {
  display: flex;
}

header li,
.active li {
  margin-left: 1.25rem;
}

header a,
.active a{
  text-decoration: none;
  color: rgb(255, 251, 0);
  font-size: 1.25rem;
  padding: 2px 6px; 
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

header a:hover,
.active a:hover,
.dropdown-btn:hover {
  color: rgb(77, 77, 77);
  background-color: rgb(255, 251, 0);
}
.dropdown-btn {
  text-decoration: none;
  font-size: 1.25rem;
  color: rgb(255, 251, 0);
  display: block;
  border: none;
  background: none;
  padding: 2px 6px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
}

.dropdown-container {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.dropdown-container a {
font-size: 1rem;
margin: 0.2rem;
color: rgb(245, 243, 160);
padding: 0.1rem;
}

@media (max-width: 48rem) {
  header li,
  .active li {
    margin: 0 auto;
  }

  nav {
    display: none;
  }
}
</style>