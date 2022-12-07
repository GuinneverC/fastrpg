<template>
  <v-container>
    <v-carousel>
      <v-carousel-item v-for="classe in classes" :key="classe.id">
        <v-sheet color="yellow" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div>
              <v-list-item-content
                ><h3 id="classe-title">
                  {{ classe.name }}
                </h3>
                Descrição: {{ classe.description }} <br />
                Vida: {{ classe.life }}<br />
                Habilidade: {{ classe.main_skill }} <br />
                Força:{{ classe.strength }} <br />
                Destreza: {{ classe.dexterity }}<br />
                Constituição: {{ classe.constitution }}<br />
                Inteligencia: {{ classe.intelligence }}<br />
                Sabedoria: {{ classe.wisdom }}<br />
                Carisma: {{ classe.charism }}<br />
              </v-list-item-content>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>


    <!-- <v-col v-for="item in itens" :key="item.id" cols="2">
          <v-card class="card">
            <div>
              <v-card-title v-text="item.name"></v-card-title>
            </div>
          </v-card>
        </v-col> -->


  </v-container>
</template>

<script>
import ClasseService from "@/api/classe";
const classeService = new ClasseService();
import axios from "axios";
import ItemService from "@/api/item";
const itemService = new ItemService();

export default {
  async created() {
    this.classes = await classeService.buscarClasses();
    this.itens = await itemService.buscarItem(Number(this.$route.params.id));
  
  },
  data() {
    return {
      classes: [],
      classe: {},
      itens:[],
      dialog: false,
    };
  },
  methods: {
    async buscarClasses() {
      const { data } = await axios.get("api/classe/");
      this.classes = data;
    },
  },
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
