<template>
  <v-container class="pa-8" fluid id="page">
    <div>
      <div id="title">
        FastRPG 
      </div>

      <div>
        <section>
          <div id="rpg_text_background"></div>

          <div id="rpg_title">
            O que é o RPG?
          </div>

          <v-img id="dragon_image"></v-img>
          <br />

          <div id="text_rpg">
            RPG é a sigla em inglês para role-playing game, um gênero de jogo
            onde os jogadores assumem o papel de personagens imaginários, em um
            mundo fictício onde você pode ser oque quiser! O RPG é um jogo de
            mesa bem estruturado e cooperativo (normalmente não há vencedores),
            em que, cada jogador controla, tipicamente, um único personagem.
            Durante o curso do jogo, cada jogador dirige as ações de seu
            personagem e suas interações com outros personagens. Uma partida
            geralmente dura varias sessões, chamadas de aventuras. Um conjunto
            de aventuras relacionadas entre si, é chamada campanha. Os
            resultados das escolhas do grupo e a história básica do jogo é
            determinada pelo líder, também chamado de mestre do jogo, conforme
            as regras e com a interpretação do líder sobre essas regras. O líder
            escolhe e descreve os vários Personagens não jogadores (NPCs) que os
            personagens encontram, o cenário em que essas relações ocorrem e os
            resultados desses encontros baseados nas escolhas e ações dos
            jogadores. As extensas regras do jogo, que cobrem áreas diversas
            como interações sociais, uso de magia, combate e o efeito do
            ambiente nos personagens, ajudam o mestre em suas decisões. O
            sistema é onde estão as regras do jogo, tendo várias variações. O
            sistema mais jogado mundialmente é o Dungeons&Dragons (D&D) uma
            simulação de mundo medieval fantasioso com dragões, monstros e tudo
            que você possa imaginar.
          </div>
          <br />

          <div id="warrior_image"></div>

          <div id="fast_description_background"></div>

          <div id="title_fastrpg">
            O que é o fastRPG?
          </div>

          <br />

          <div id="fastrpg_description">
            Nosso site busca trazer maior facilidade para construção de
            personagem e auxílio em outras funções, como rolagem de dados e
            conversores de moedas
            <br />
            Dentre nossas funções estão:
            <br />
            - Duas listas, contendo todas as Raças (
            <v-icon>mdi-gnome</v-icon> ) e Classes ( <v-icon>mdi-anvil</v-icon>)
            que o livro oficial de Dungeons and Dragons tem disponivel.
            <br />
            - Rolador de Dados (<v-icon>mdi-dice-multiple</v-icon>): Existem uma
            variedade imensa de dados, temos os principais e mais importantes,
            sendo eles de 4,6,8,10,12 e 20 lados. Podendo ser rodados ao clicar
            no botão "Rolar"
            <br />
            - Conversor de Moedas ( <v-icon>mdi-bitcoin</v-icon> ): Colocando o
            valor em peças de ouro podendo converter para Prata, Cobre e Platina
            <br />
            - Gerador Simplificado de personagem(
            <v-icon>mdi-dice-d20</v-icon> ): Podendo excolher sua Raça, Classe,
            Niível, e Nome (Podendo tambem o aleatorizar), e apos a criação, sua
            ficha estará disponivel no Arquivo de Fichas (
            <v-icon>mdi-bookshelf</v-icon> )
            <br />
          </div>
        </section>
        <br />
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import * as fb from "@/plugins/firebase";
export default {
  name: 'Home',
  computed: {
    ...mapState('auth', ['loggedIn'])
  },

  data() {
    return {
      uid: "",
      novaTarefa: "",
      tarefas: [],
    };
  },
  mounted() {
    this.uid = "Mundo";
  },
  methods: {
    async buscarTarefasDoServidor() {
      this.tarefas = [];
      const logTasks = await fb.taskCollection
        .where("owner", "==", this.uid)
        .get();
      for (const doc of logTasks.docs) {
        this.tarefas.push({
          id: doc.id,
          titulo: doc.data().titulo,
        });
      }
    },
    async adicionar() {
      await fb.taskCollection.add({
        titulo: this.novaTarefa,
        dataGravacao: new Date().toISOString().slice(0, 10),
        owner: this.uid,
      });
      this.novaTarefa = "";
      this.buscarTarefasDoServidor();
    },
  },
};
</script>

<style scoped>
#page {
  background-color: #EEE9D9;
  height: 2000px;
}

#title {
  text-align: center;
  margin: 0 auto;
  font-weight: bold;
  font-size:50px;
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
