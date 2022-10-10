<template>

  <v-container class="pa-8" fluid>

    <h1 id="class_title">Classes</h1>

    <v-list>
      <v-list-item v-for="classe of classes" v-bind:key="classe.id">
        <v-list-item-content><h3 id="classe-title">
          {{ classe.title }}</h3>
          Força: {{ classe.Força }}, <br>
          Destreza: {{ classe.Destreza }},<br>
          Constituição: {{ classe.Constituição }}, <br>
          Inteligencia;{{ classe.Inteligencia }},<br> 
          Sabedoria: {{ classe.Sabedoria }}, <br>
          Carisma:{{ classe.Carisma }} <br />
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

.extrainfo{
  display: none;
}

#img{
  height: 150px;
  width: 150px;
  background-color: rgb(154, 202, 186);
  margin-left: 25px;
  margin-top: 10px;
}

.ficha{
  display: grid;
  background-color: rgb(233, 232, 219);
  height: 350px;
  width: 400px;
  grid-template-columns: 50% 50%;
  grid-column-gap: 5px;
  
}

.registro {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  margin-left: 3%;
  grid-column-gap: 10px;
}

.expandbtn{
  background-color: rgb(235, 209, 175);
  margin-right: 25px;
}

</style>
