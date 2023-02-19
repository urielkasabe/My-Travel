<template>
  <router-link class="menu-btn" to="/menu">
    <span></span>
    <span></span>
    <span></span>
  </router-link>
</template>

<script>

</script>

<style scoped>
.menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border: 0;
}

.menu-btn span {
  width: 100%;
  height: 3px;
  background-color: white;
}

aside {
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgb(130, 83, 49), rgb(2, 1, 0));;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
}

nav {
  height: 100%;
  width: 100%
}

ul {
  height: 100%;
}

li {
  font-size: 2rem;
}

.active a,
a {
  text-align: center;
  margin: 0 auto;
  text-decoration: none;
 color: yellow;
}

@media (min-width: 48rem) {
    .menu-btn {
        display: none;
    }
}
</style>