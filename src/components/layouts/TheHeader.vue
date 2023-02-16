<template>
<header>
      <div id="page-logo">
    <router-link to="/">Mi Viaje</router-link>
  </div>
  <nav>
    <ul>
      <li><router-link to="/destinations">Destinos</router-link></li>
      <li><router-link to="/">Sobre mi</router-link></li>
    </ul>
  </nav>
</header>
</template>

<script>
export default {
  methods: {
    HeaderPosition() {
      
    }
  }
}
</script>

<style scoped>


header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 60px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
}

#page-logo a {
  padding: 10px;
  font-family: "Oleo Script", sans-serif;
  color: rgb(245, 243, 160);
  font-size: 50px;
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
  margin-left: 20px;
}

header a,
.active a {
  text-decoration: none;
  color: rgb(255, 251, 0);
  font-size: 20px;
  padding: 12px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

header a:hover,
.active a:hover {
  color: rgb(77, 77, 77);
  background-color: rgb(255, 251, 0);
}

</style>