<template>

    <v-container class="pa-8" fluid>

    <h1 class="title">Raças</h1>

    <carrossel @next="next" @prev="prev">

        <v-list>
          <carrosselslide class="raca-container" v-for="(raca, index) of racas"
          v-bind:key="raca.id"
          :index="index"
          :visibleSlide="visibleSlide"
          :direction="direction"> 

            
            <v-list-item-content><h3 id="raca-title">{{raca.title}}
              </h3>Força: {{raca.Força}}, Destreza: {{raca.Destreza}}, 
               Constituição: {{raca.Constituição}}, Inteligencia; {{raca.Inteligencia}}, 
               Sabedoria: {{raca.Sabedoria}}, Carisma: {{raca.Carisma}} <br>
            Tamanho: {{raca.tamanho}} <br>
            Deslocamento: {{raca.Deslocamento}} <br>
            Idioma: {{raca.idioma}} <br>
            Caracteristicas: {{raca.Caracteristicas}} 
            <br>
            </v-list-item-content>

          </carrosselslide>
        </v-list>
  
</carrossel>
    </v-container>
</template>

<script>

import carrossel from "./Carrossel.vue"
import carrosselslide from "./CarrosselSlide.vue"

import { racas } from '@/assets/db/db'
export default {
  data(){
    return {
      racas: null, 
      visibleSlide: 0,
      direction: '',
      } 
  },

computed: {
  classLen() {
      return this.classes.lenght;
    }
},

  methods: {
    async getFichas(){
      this.racas = racas;}
},
  mounted(){
    this.getFichas()
  },

  next() {
      if(this.visibleSlide >= this.classLen() - 1) {
        this.visibleSlide = 0;
      }
      else {
        this.visibleSlide++;
      }
      this.direction = "left"
    }, 

    prev() {
      if(this.visibleSlide <= 0) {
        this.visibleSlide = this.classLen() - 1;
      }
      else {
        this.visibleSlide--;
      }
      this.direction = "right"
    },

    components: {
      carrossel,
      carrosselslide,
    }
}
</script>

<style scoped>
 #raca-title {
   font-weight: bold;
   padding: 5px 10px;
 }
.title{
  padding: 5px 10px;
}

.raca-container {
  background-color: rgb(217, 214, 181);
  height: 300px;
  width: 600px;
  left: calc(50% - 300px);
  border-radius: 5%;
  margin: 20px;
}
</style>