<template>
     <section id="highlights">
        <h2>Highlights</h2>
        <ul id="destinations">
          <li class="destin">
            <img :src="napoli" alt="Napoli's golf" />
            <p>Naples <strong>Italy</strong></p>
          </li>
          <li class="destin">
            <img :src="Buenos" alt="City of Buenos Aires" />
            <p>Buenos Aires <strong>Argentina</strong></p>
          </li>
          <li class="destin">
            <img
              :src="Larnaca"
              alt="Marina of Larnaca"
            />
            <p>Larnaca <strong>Cyprus</strong></p>
          </li>
        </ul>
      </section>
</template>

<script>
import Napoli from '../../../images/places/Napoli.jpg';
import BsAs from '../../../images/places/Buenos-Aires.jpg';
import Larnaca from '../../../images/places/Larnaca-Marina.jpg';

export default {
    data() {
      return {
        napoli: Napoli,
        Buenos: BsAs,
        Larnaca: Larnaca
      };
    }
}
</script>

<style scoped>
#highlights {
  background: linear-gradient(0deg, rgb(130, 83, 49), rgb(2, 1, 0));
  padding: 1.875rem 0;
}

#highlights h2 {
  text-align: center;
  color: rgb(169, 140, 7);
  text-transform: uppercase;
  font-size: 2rem;
  margin: 1.6rem 0;
}

#destinations {
  display: flex;
  justify-content: center;
  width: 90%;
  margin: auto;
  margin-bottom: 3rem;
}

.destin {
  margin: 0 1.25rem;
  width: 100%;
  text-transform: uppercase;
}

.destin img {
  height: 12.5rem;
  width: 100%;
  box-shadow: 2px 4px 8px rgb(68, 67, 67);
  border-radius: 10px;
  object-fit: cover;
}

.destin p {
  text-align: center;
  font-size: 1.375rem;
  color: rgb(172, 168, 168);
  margin: 1.25rem 0;
}

.destin strong {
  color:  rgb(169, 140, 7);
}

@media (max-width: 48rem) {
  #destinations {
    display: inline-block;
  }
}
</style>