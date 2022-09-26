<template>
  <div id="ficha-arquivo-rows">

    <div class="registro">

    <div v-for="(itens,index) in fichas" :key="index">
      
      <div class="ficha">

      <div id="img"></div>
      <div>Nome: {{ itens.nome }}</div>
      <div>Nível: {{ itens.nivel }}</div>
      <div>Raça: {{ itens.raca }}</div>
      <div>Classe: {{ itens.classe }}</div>
      <div>Vida Máxima: {{ itens.vidamax }}</div><br>
      <button class="expandbtn" @click="expand(index)"> Expandir </button>

      <div class="showhide"> </div>
      
      <div class="extrainfo">

      <div>Habilidade Principal: {{ itens.habilidade }}</div>
      <div>Força: {{ itens.forca }}</div>
      <div>Destreza: {{ itens.destreza }}</div>
      <div>Constituição: {{ itens.constituicao }}</div>
      <div>Inteligencia: {{ itens.inteligencia }}</div>
      <div>Sabedoria: {{ itens.sabedoria }}</div>
      <div>Carisma: {{ itens.carisma }}</div>
      <div>Tamanho: {{ itens.tamanho }}</div>
      <div>Velocidade: {{ itens.deslocamento }}</div>
      <div>Idioma: {{ itens.idioma }}</div>
      <div>Caracteristicas: {{ itens.caracteristicas }}</div>
      <div>Descrição: {{ itens.descricao }}</div>
     
      

      </div>
      </div>
      
      
      <div>
        <button v-if="uid">
          <v-icon class="like-btn">mdi-thumb-up-outline</v-icon>
        </button><br />
        <br />
        <button v-if="uid === itens.owner" class="delete-btn">
          <v-icon>mdi-delete</v-icon>
        </button>
      
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import * as fb from "@/plugins/firebase";
export default {
  name: "Dashboard",
  data() {
    return {
      uid: "",
      fichas: [],
    };
  },
  methods: {
    async buscarFichasDoServidor() {
      this.ficha = [];
      const logficha = await fb.fichaCollection.get();
      for (const doc of logficha.docs) {
        this.fichas.push({
          owner: doc.data().owner,
          nome: doc.data().nome,
          classe: doc.data().classe,
          raca: doc.data().raca,
          nivel: doc.data().nivel,
          vidamax: doc.data().vidamax,
          habilidade: doc.data().habilidade,
          forca: doc.data().forca,
          destreza: doc.data().destreza,
          constituicao: doc.data().constituicao,
          inteligencia: doc.data().inteligencia,
          sabedoria: doc.data().sabedoria,
          carisma: doc.data().carisma,
          tamanho: doc.data().tamanho,
          deslocamento: doc.data().deslocamento,
          idioma: doc.data().idioma,
          caracteristicas: doc.data().caracteristicas,
          descricao: doc.data().descricao,
        });
      }
    },
    logadoOuNao() {
      if (this.uid) {
        this.$router.push({ path: "/perfil" });
      } else {
        this.$router.push({ path: "/login" });
      }
    },
    expand(index){
      var extrainfo=document.querySelectorAll(".extrainfo")[index];
      var expandbtn=document.querySelectorAll(".expandbtn")[index];
      var showhide=document.querySelectorAll(".showhide")[index];
      if(showhide.style.display === "none"){
        showhide.style.display = "inline";
        extrainfo.style.display = "none";
        expandbtn.innerHTML = "Expandir";
      }
      else{
        showhide.style.display = "none";
        extrainfo.style.display = "inline";
        expandbtn.innerHTML = "Retrair";
      }
    },
  },
  mounted() {
    this.buscarFichasDoServidor();
    this.uid = fb.auth.currentUser.uid;
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
