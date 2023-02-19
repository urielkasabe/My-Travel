<template>
  <aside>
    <nav>
      <ul>
        <li><router-link to="/">Principal</router-link></li>
        <li><router-link to="/destinations">Destinos</router-link></li>
        <li>
          <button class="dropdown-btn" @click="toggleIsClicked">
            Encuentra Vuelos
          </button>
          <div class="dropdown-container" v-if="isCliccked">
            <a href="https://www.skyscanner.com/">SkyScanner</a>
            <a href="https://www.kayak.com/">Kayak</a>
            <a href="https://www.opodo.com/home/">Opodo</a>
          </div>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
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
}
</script>

<style scoped>
aside {
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgb(130, 83, 49), rgb(2, 1, 0));
  position: fixed;
  top: 0;
  left: 0;
}

nav {
  height: 100%;
  width: 100%;
}

ul {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

li {
  font-size: 2rem;
  margin: 1rem auto;
}

.active a,
a {
  text-decoration: none;
  color: rgb(255, 251, 0);
}

.dropdown-btn {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 2rem;
  color: rgb(255, 251, 0);
  display: block;
  border: none;
  background: none;
  width:100%;
  text-align: center;
  cursor: pointer;
  outline: none;
}

.dropdown-container {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.dropdown-container a {
font-size: 1.5rem;
margin: 0.5rem;
color: rgb(245, 243, 160);
}
</style>``