<template>
  <footer>
    <ul class="Footer-social">
      <li>
        <a :href="igLink"><img :src="instagram" alt="instagram logo" /></a>
      </li>
      <li>
        <a :href="fbLink"><img :src="facebook" alt="facebook logo" /></a>
      </li>
    </ul>
    <p>{{ ph }}</p>
  </footer>
</template>

<script>
import instagram from "../../../images/icons/insta.png";
import facebook from "../../../images/icons/facebook.png";

export default {
  data() {
    return {
      ph: "Copyright Jaime Uriel Kasabe",
      instagram: instagram,
      facebook: facebook,
      igLink: "https://www.instagram.com/",
      fbLink: "https://www.facebook.com/",
    };
  },
};
</script>

<style scoped>
footer {
  /* background: linear-gradient(80deg, rgb(23, 23, 23), rgb(25, 29, 29)); */
  background: linear-gradient(80deg, rgb(60, 37, 20), rgb(55, 28, 1));
  bottom: 100%;
}

.Footer-social {
  display: flex;
  justify-content: center;
  padding: 1.563rem;
}

footer li {
  width: 3.125rem;
  height: 3.125rem;
  padding: 0 6.25rem;
}

footer img {
  width: 100%;
  height: 100%;
}

footer p {
  display: flex;
  justify-content: center;
  padding: 1rem 0 1rem 0;
  margin: 0 auto;
  color: white;
}

@media (max-width: 48rem) {
  footer li {
    padding: 0 1rem;
  }
}
</style>