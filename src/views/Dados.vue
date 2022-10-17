<template>
  <div class="container">
    <h2 id="dices_title">Dados</h2>
    <br />

    <div id="dices_background">
      <div class="grid-container">
        <div class="grid-child">
          <span class="input-group-btn">
            <v-btn @keyup.enter="D4" @click="D4" id="d4_text" class="btn-roll"
              >Rolar D4</v-btn
            >
            <br />
            <br />
            <v-img
              src="../assets/dices/d4-icon.png"
              width="100"
              style="cursor: pointer;"
              data-type="20"
              @click="D4"
            ></v-img>
            <br />
            <p style="font-size: 18px; font-style: italic;">
              Resultado: {{ quatro }}
            </p>
          </span>
        </div>

        <div class="grid-child">
          <span class="input-group-btn">
            <v-btn @keyup.enter="D6" @click="D6" id="d6_text" class="btn-roll"
              >Rolar D6</v-btn
            >
            <br />
            <br />
            <v-img
              src="../assets/dices/d6-icon.png"
              width="100"
              style="cursor: pointer;"
              data-type="20"
              @click="D6"
            ></v-img>
            <br />
            <p style="font-size: 18px; font-style: italic;">
              Resultado: {{ seis }}
            </p>
          </span>
        </div>
        <div class="grid-child">
          <span class="input-group-btn">
            <v-btn @keyup.enter="D8" @click="D8" id="d8_text" class="btn-roll"
              >Rolar D8</v-btn
            >
            <br />
            <br />
            <v-img
              src="../assets/dices/d8-icon.png"
              width="100"
              style="cursor: pointer;"
              data-type="20"
              @click="D8"
            ></v-img>
            <br />
            <p style="font-size: 18px; font-style: italic;">
              Resultado: {{ oito }}
            </p>
          </span>
        </div>
        <div class="grid-child">
          <span class="input-group-btn">
            <v-btn
              @keyup.enter="D10"
              @click="D10"
              id="d10_text"
              class="btn-roll"
              >Rolar D10</v-btn
            >
            <br /><br />
            <v-img
              src="../assets/dices/d10-icon.png"
              width="100"
              style="cursor: pointer;"
              data-type="10"
              @click="D10"
            ></v-img>
            <br />
            <p style="font-size: 18px; font-style: italic;">
              Resultado: {{ dez }}
            </p>
          </span>
        </div>
        <div class="grid-child">
          <span class="input-group-btn">
            <v-btn
              @keyup.enter="D12"
              @click="D12"
              id="d12_text"
              class="btn-roll"
              >Rolar D12</v-btn
            >
            <br />
            <br />
            <v-img
              src="../assets/dices/d12-icon.png"
              width="100"
              style="cursor: pointer;"
              data-type="12"
              @click="D12"
            ></v-img>
            <br />
            <p style="font-size: 18px; font-style: italic;">
              Resultado: {{ doze }}
            </p>
          </span>
        </div>
        <div class="grid-child">
          <span class="input-group-btn">
            <v-btn
              @keyup.enter="D20"
              @click="D20"
              id="d20_text"
              class="btn-roll"
              >Rolar D20</v-btn
            >
            <br /><br />
            <v-img
              id="d20_img"
              src="../assets/dices/d20-icon.png"
              width="100"
              style="cursor: pointer;"
              data-type="20"
              @click="D20"
            ></v-img>
            <br />
            <p style="font-size: 18px; font-style: italic;">
              Resultado: {{ vinte }}
            </p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dados",
  data() {
    return {
      quatro: "",
      seis: "",
      oito: "",
      dez: "",
      doze: "",
      vinte: "",
    };
  },
  methods: {
    D4() {
      this.quatro = Math.floor(Math.random() * 4 + 1);
    },
    D6() {
      this.seis = Math.floor(Math.random() * 6 + 1);
    },
    D8() {
      this.oito = Math.floor(Math.random() * 8 + 1);
    },
    D10() {
      this.dez = Math.floor(Math.random() * 10 + 1);
    },
    D12() {
      this.doze = Math.floor(Math.random() * 12 + 1);
    },
    D20() {
      this.vinte = Math.floor(Math.random() * 20 + 1);
    },
  },
};
</script>

<style>
#dices_title {
  position: absolute;
  width: 302px;
  height: 46px;
  left: calc(50% - 302px / 2);
  top: 180px;
  font-family: "Goblin One";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  color: #6c5d3f;
  z-index: 1;
}

#dices_background {
  position: absolute;
  width: 1181px;
  height: 810px;
  left: calc(50% - 1180px / 2);
  top: 146px;
  background: linear-gradient(180deg, #dcd6c2 0%, #c4b999 100%);
  border-radius: 40px;
}

.grid-container {
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1;
  grid-column-gap: 200px;
  grid-row-gap: 100px;
  top: 110px;
  margin-left: 18%;
}
.btn-roll {
  position: relative;
  width: 128px;
  height: 29px;
  left: -12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1;
  top: 215px;
  background: #ceaa67;
  border: 1px dashed #000000;
  border-radius: 5px;
}
</style>
