<template>

  <v-container fluid>

    <h1 id="class_title">Classes</h1>

<carrossel @next="next" @prev="prev">

    <v-list>
      <carrosselslide class="class-container" v-for="(classe, index) of classes" 
      v-bind:key="classe.id"
      :index="index"
      :visibleSlide="visibleSlide"
      :direction="direction">

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
      </carrosselslide>
    </v-list>

  </carrossel>
  </v-container>
</template>

<script>

import carrossel from "./Carrossel.vue"
import carrosselslide from "./CarrosselSlide.vue"

import { classes } from "@/assets/db/db";
export default {
  data() {
    return {
      classes: null,
      visibleSlide: 0,
      direction: '',
    };
  },

  computed: {
    classLen() {
      return this.classes.lenght;
    }
  },

  methods: {
    async getFichas() {
      this.classes = classes;
    },
    next() {
      if(this.visibleSlide >= this.classLen- 1) {
        this.visibleSlide = 0;
      }
      else {
        this.visibleSlide++;
      }
      this.direction = "left"
    }, 

    prev() {
      if(this.visibleSlide <= 0) {
        this.visibleSlide = this.classLen - 1;
      }
      else {
        this.visibleSlide--;
      }
      this.direction = "right"
    },
  },
  mounted() {
    this.getFichas();
  },
    components: {
      carrossel,
      carrosselslide,
    }
};
</script>

<style scoped>

.class-container {
  background-color: rgb(217, 214, 181);
  height: 300px;
  width: 600px;
  left: calc(50% - 300px);
  border-radius: 5%;
  margin: 20px;
}


</style>
