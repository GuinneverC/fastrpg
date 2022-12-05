<template>

    <v-container class="pa-8" fluid>

    <h1 class="title">Raças</h1>
    <carrossel @next="next" @prev="prev">

        <v-list>
          <carrosselslide class="raca-container" v-for="(race, index) of racas"
          v-bind:key="race.id"
          :index="index"
          :visibleSlide="visibleSlide"
          :direction="direction">             
            <v-list-item-content><h3 id="raca-title">{{race.name}}</h3>
            Caracteristicas: {{race.features}} <br>
            Tamanho: {{race.size}} <br>
            Deslocamento:{{race.speed}}<br>
            Línguas: {{race.languages}}<br>
            Força:{{race.strength}} <br>
            Destreza: {{race.dexterity}}<br>
            Constituição: {{race.constitution}}<br>
            Inteligencia: {{race.intelligence}}<br>
            Sabedoria: {{race.wisdom}}<br>
            Carisma: {{race.charism}}<br>
            </v-list-item-content>

          </carrosselslide>
        </v-list>
  
</carrossel>
    </v-container>
</template>

<script>
import FastRPGApi from '@/api/fastapi'
import carrossel from "./Carrossel.vue"
import carrosselslide from "./CarrosselSlide.vue"

const racesApi = new FastRPGApi();
export default {
  data(){
    return {
      racas: [], 
      visibleSlide: 0,
      direction: '',
      } 
  },

computed: {
  racesLen() {
      return this.racas.lenght;
    }
},

  methods: {
    async getRaces() {
      this.racas = await racesApi.getAllRaces()
    },
    next() {
      if(this.visibleSlide >= this.racesLen - 1) {
        this.visibleSlide = 0;
      }
      else {
        this.visibleSlide++;
      }
      this.direction = "left"
    }, 

    prev() {
      if(this.visibleSlide <= 0) {
        this.visibleSlide = this.racesLen - 1;
      }
      else {
        this.visibleSlide--;
      }
      this.direction = "right"
    },
},
async mounted() {
    await this.getRaces();
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