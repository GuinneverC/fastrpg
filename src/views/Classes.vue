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
          {{ classe.name }}</h3>
          Descrição: {{classe.description}} <br>
          Vida: {{classe.life}}<br>
          Habilidade: {{classe.main_skill}} <br>
          Força:{{classe.strength}} <br>
          Destreza: {{classe.dexterity}}<br>
          Constituição: {{classe.constitution}}<br>
          Inteligencia: {{classe.intelligence}}<br>
          Sabedoria: {{classe.wisdom}}<br>
          Carisma: {{classe.charism}}<br>
          Itens: {{classe.itens.name}}
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

const classApi = new FastRPGApi();
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
    async getClasses() {
      this.classes = await classApi.getAllClasses()
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
  async mounted() {
    await this.getClasses();
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
