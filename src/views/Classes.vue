<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1">Classes</h1>
    <v-list>
      <v-list-item v-for="classe of classes" v-bind:key="classe.id">
        <v-list-item-content
          ><h3 id="classe-title">{{ classe.title }}</h3>
          Força: {{ classe.Força }}, Destreza: {{ classe.Destreza }},
          Constituição: {{ classe.Constituição }}, Inteligencia;
          {{ classe.Inteligencia }}, Sabedoria: {{ classe.Sabedoria }}, Carisma:
          {{ classe.Carisma }} <br />
          Vida por Nível: {{ classe.vida }}, <br />
          Habilidade Principal: {{ classe.habilidade }} <br />
          Descrição: {{ classe.descricao }} <br />
        </v-list-item-content>
        <br />
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { classes } from "@/assets/db/db";
export default {
  data() {
    return {
      classes: null,
    };
  },
  methods: {
    async getFichas() {
      this.classes = classes;
    },
  },
  mounted() {
    this.getFichas();
  },
};
</script>

<style scoped>
#classe-title {
  font-weight: bold;
  color: #222;
  padding: 5px 10px;
}
.h1 {
  padding: 5px 10px;
  border-left: 4px solid #8b0292;
}

#page {
  background-color: rgb(233, 212, 166);
  height: 2000px;
}

#title {
  text-align: center;
  margin: 0 auto;
  font-weight: bold;
  font-size: 50px;
  color: #8f1b1b;
  padding: 5px 10px;
}

#dragon_image {
  position: absolute;
  width: 1350px;
  height: 1000px;
  left: 566px;
  top: 200px;
  background: #647561;
  z-index: 1;
}

#rpg_text_background {
  background-color: #c7b7a0;
  position: absolute;
  width: 933.72px;
  height: 780px;
  left: 124.28px;
  top: 250px;
  z-index: 2;
}

#rpg_title {
  position: absolute;
  height: 28px;
  left: 210px;
  top: 300px;
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-decoration-line: underline;
  text-transform: uppercase;
  z-index: 3;
  color: #8f1b1b;
}

#text_rpg {
  position: absolute;
  width: 763px;
  left: 210px;
  top: 400px;
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: justify;
  color: #1b0505;
  background-color: #c7b7a0;
  z-index: 3;
}

#warrior_image {
  position: absolute;
  width: 1350px;
  height: 1000px;
  left: 0px;
  top: 948px;
  background: #d1b37a;
}

#fast_description_background {
  position: absolute;
  width: 889px;
  height: 633.23px;
  left: 963px;
  top: 1250px;
  background-color: #c7b7a0;
}

#title_fastrpg {
  position: absolute;
  left: 1073px;
  top: 1350px;
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 37px;
  text-decoration-line: underline;
  color: #8f1b1b;
}

#fastrpg_description {
  position: absolute;
  width: 669px;
  height: 327px;
  left: 1073px;
  top: 1430px;

  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #000000;
}
</style>
