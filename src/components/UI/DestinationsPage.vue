<template>
  <ul class="dest">
    <li
      class="list-dest"
      v-for="dest in destinations"
      :key="dest.id"
      :alt="dest.alt"
      :img="dest.img"
      :name="dest.name"
      :desc="dest.desc"
      :link="dest.link"
    >
      <img :src="dest.img" :alt="dest.alt" class="imagen" />
      <div class="item-content">
        <div>
          <h2>{{ dest.name }}</h2>
          <p>
            {{ dest.desc }}
          </p>
        </div>
        <div class="actions">
          <a :href="dest.link">Explore &#x2192;</a>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import Napoli from "../../../images/places/Napoli.jpg";
import BsAs from "../../../images/places/Buenos-Aires.jpg";
import Larnaca from "../../../images/places/Larnaca-Marina.jpg";
import Kef from "../../../images/places/kefalonia.jpg";
import Berlin from "../../../images/places/Berlin.jpg";
import Egypt from "../../../images/places/Egipt.jpg";
import TheHeader from "../layouts/TheHeader.vue";

export default {
  components: { TheHeader },
  data() {
    return {
      destinations: [
        {
          id: "NAP",
          img: Napoli,
          name: "Naples",
          desc: "Naples, a city in southern Italy, sits on the Bay of Naples. Nearby is Mount Vesuvius, the still-active volcano that destroyed nearby Roman town Pompeii. Dating to the 2nd millennium B.C., Naples has centuries of important art and architecture.",
          link: "https://en.wikipedia.org/wiki/Naples",
          alt: "City of Naples",
        },
        {
          id: "BS",
          img: BsAs,
          name: "Buenos Aires",
          desc: "Buenos Aires is Argentina’s big, cosmopolitan capital city. Its center is the Plaza de Mayo, lined with stately 19th-century buildings including Casa Rosada, the iconic, balconied presidential palace.",
          link: "https://en.wikipedia.org/wiki/Buenos_Aires",
          alt: "City of Buenos Aires, Argentina",
        },
        {
          id: "LAR",
          img: Larnaca,
          name: "Larnaca",
          desc: "Larnaca (Larnarka) is a port city on the south coast of Cyprus. It's known for Finikoudes Beach, a sandy strip in the city center backed by a palm-lined seaside promenade. Buzzing bars line the waterfront at Mackenzie Beach.",
          link: "https://en.wikipedia.org/wiki/Larnaca",
          alt: "Larnaca, Cyprus",
        },
        {
          id: "kefalonia",
          img: Kef,
          name: "Kefalonia",
          desc: "Kefalonia is an island in the Ionian Sea, west of mainland Greece. It's marked by sandy coves and dry rugged landscapes. Its capital, Argostoli, is built on a hillside overlooking a narrow harbor.",
          link: "https://en.wikipedia.org/wiki/Cephalonia",
          alt: "Kefalonia, Greece",
        },
        {
          id: "Berlin",
          img: Berlin,
          name: "Berlin",
          desc: "Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains.",
          link: "https://en.wikipedia.org/wiki/Berlin",
          alt: "Berlin, Germany",
        },
        {
          id: "Sinai",
          img: Egypt,
          name: "Sinai",
          desc: "Egypt’s Sinai Peninsula is a sparsely populated desert region between the Red Sea and the Mediterranean Sea. On its southern tip, Sharm el-Sheikh resort is a base for diving and snorkeling around the reefs of Ras Mohammed National Park. ",
          link: "https://en.wikipedia.org/wiki/Sinai_Peninsula",
          alt: "Sinai, Egypt",
        },
      ],
    };
  },
};
</script>

<style>
body {
  background: linear-gradient(160deg, rgb(130, 83, 49), rgb(2, 1, 0));
}

.dest {
  width: 90%;
  margin: 2rem auto 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.list-dest {
  display: flex;
  background-color: rgba(255, 255, 255, 0.59);
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
}

.list-dest:nth-of-type(1),
.list-dest:nth-of-type(2) {
  margin-top: 6rem;
}

.imagen {
  width: 50%;
  height: auto;
  object-fit: cover;
}

.item-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.actions {
  text-align: right;
}

.actions a {
  text-decoration: none;
  color: rgb(255, 251, 0);
  padding: 0.375rem;
  border-radius: 5px;
}

.actions a:hover {
  color: rgb(77, 77, 77);
  background-color: rgb(255, 251, 0);
  padding: 0.375rem;
}

@media (max-width: 48rem) {
  .dest {
    grid-template-columns: 100%;
  }
  
  .list-dest {
    display: inline;
  }

  .list-dest:nth-of-type(2) {
    margin-top: 0;
  }

  .imagen {
    width: 100%;

  }
}
</style>
