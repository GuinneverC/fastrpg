<template>
  <div>

      <h3 class="titulo">Criação Rápida de Ficha</h3>

      <form id="fichaform">

        <div class="input_name" id="gerador_nomes">
        <input type="text" id="nome" name="nome" v-model="nome" placeholder="Nome do Personagem">
        <v-icon id="icon_dice" class="btn" slot="append" @click="gerar()">mdi-dice-multiple</v-icon>
        </div>


        <div class="input-container">
          <label class="class_selector" for="classe">Classe: </label>

          <select name="classe" class="class_selector" v-model="classe">
              <option value="" disabled>Selecione sua Classe</option>
              <option v-for="classe in classes" 
              :key="classe.id" :value="classe">{{ classe.title }}
              </option>
          </select>

        </div>


        <div class="input-container">
          <label class="breed_selector" for="raca">Raça: </label>
          <select name="raca" class="breed_selector" v-model="raca">
              <option value="" disabled>Selecione sua Raça</option>
              <option v-for="raca in racas" 
              :key="raca.id" :value="raca">{{ raca.title }}
              </option>
          </select>

        </div>


        <div class="input-container">
          <label class="level_selector" for="nivel">Nivel: </label>

          <select name="nivel" class="level_selector" v-model="nivel">
              <option value="" disabled>Selecione seu Nivel</option>
              <option v-for="nivel in niveis" 
              :key="nivel.id" :value="nivel">{{ nivel.title }}
              </option>
          </select>

        </div>


        <div class="input-container">
          <v-btn class="create" @click="adicionar">Criar</v-btn>
        </div>
        
      </form>

  </div>
</template>

<script>
import gerarnome from '@/utils/gerarnome.js'
import gerarsobrenome from '@/utils/gerarsobrenome.js'
import * as fb from "@/plugins/firebase"
import { niveis, classes, racas } from '@/assets/db/db'
export default {
  name: "fichaform",
  data(){

    return {
      classes: '',
      racas: null,
      niveis: null,
      nome: '',
      classe: '',
      raca: '',
      nivel:  '',
      msg: null,
      uid: '',
      ficha: [],
    }
  },
  methods: {
    getFichas(){
      this.classes = classes;
      this.racas = racas;
      this.niveis = niveis;
    }, 
    async adicionar() {
      await fb.fichaCollection.add({
        nome: this.nome,
        dataGravacao: new Date().toISOString().slice(0, 10),
        owner: this.uid,
        classe: this.classe.title,
        raca: this.raca.title,
        nivel: this.nivel.title,
        forca: this.classe.Força + this.raca.Força,
        destreza: this.classe.Destreza + this.raca.Destreza,
        constituicao: this.classe.Constituição + this.raca.Constituição,
        inteligencia: this.classe.Inteligencia + this.raca.Inteligencia,
        vidamax: this.classe.vida * this.nivel.vida,
        sabedoria: this.classe.Sabedoria + this.raca.Sabedoria,
        carisma: this.classe.Carisma + this.raca.Carisma,
        tamanho: this.raca.tamanho,
        deslocamento: this.raca.Deslocamento,
        idioma: this.raca.idioma,
        caracteristicas: this.raca.Caracteristicas,
        habilidade: this.classe.habilidade,
        descricao: this.classe.descricao,
        
      });
      this.msg = `Ficha de ${this.nome} Criada com Sucesso, Confira o Arquivo`;

      setTimeout(() => this.msg = "", 3000);
      this.nome = "";
      this.classe = "";
      this.raca = "";
      this.nivel = "";
    },
    gerar(){
      this.nome = gerarnome()+gerarsobrenome()
    },

  },
  mounted(){
    this.getFichas(),
    this.uid = fb.auth.currentUser.uid;
  },
  components: {
  }
}
</script>

<style scoped>

.titulo{
  text-align: center;
  margin: 0 auto;
  font-weight: bold;
  font-size:25px;
  color: #8f1b1b;
  padding: 5px 10px;
  margin-top: 25px;
  margin-bottom: 25px;
}

#icon_dice {
  position: relative;
  align-self: right;
}

 #fichaform{
   max-width: 400px;
   margin: 0 auto;
 }

 .input-container{
   display: flex;
   flex-direction: column;
 }

  .class_selector,.breed_selector,.level_selector,.input_name {
   margin-bottom: 15px;
   color:#222;
   padding: 5px 10px;
   border: 1px solid #8f1b1b;
 }

 .label {
   font-weight: bold;
   margin-bottom: 15px;
   color:#222;
   padding: 5px 10px;
 }

 .input,select {
   padding: 5px 10px;
   width: 300px;
 }

  .create{
   background-color: #4b3737;
   color: rgb(12, 7, 7);
   font-weight: bold;
   border: 2px solid #222;
   padding: 10px;
   font-size: 16px;
   margin: 0 auto;
   cursor: pointer;
   transition: .5s;
 }

.create:hover{
   background-color: #8f1b1b;
   color: rgb(255, 255, 255);
 }
</style>