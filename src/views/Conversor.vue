<template>
  <div id="converter">
  <form id="Conversor">

  <div id="converter_background"></div>
  <h1 id="title_converter">Conversor</h1>

    <div>
      <v-img id="coins_icon_1" src="../assets/images/coins-icon.png"></v-img>
      <v-img id="coins_icon_2" src="../assets/images/coins-icon.png"></v-img>

      <div id="coin_selector_1"></div>
      <div id="coin_selector_2"></div>

      <v-img id="down_arrow_1" src="../assets/images/down-arrow.png"></v-img>
      <v-img id="down_arrow_2" src="../assets/images/down-arrow.png"></v-img>

      <input type="number" name="po_pc" id="input_1" v-model.number="po_pc_resultado" placeholder="Digite um Número" v-on:tab="gerar_po_pc">

      <v-img id="center_arrow" src="../assets/images/arrow-right.png"></v-img>

      <input type="number" name="po_pp" id="input_2" v-model.number="po_pp_resultado" placeholder="Digite um Número"
        v-on:tab="gerar_po_pp">

      <div id="result_background"></div>
      <h4 id="result_title">Resultado</h4>
      <h2 id="result_number">{{po_pc_resultado*100}}</h2>
      <br>
      
      <!-- <h3 id="po_pp">  Converter Ouro para Prata </h3> -->
      <!-- <v-icon class="btn" slot="append" @click="gerar_po_pp">mdi-dice-d12-outline</v-icon>
      <br>
      <h4> Resultado: {{po_pp_resultado*10}} </h4>
      <br>
      <br>
      <h3 id="po_platina">  Converter Ouro para Platina </h3>
      <input type="number" name="po_platina" id="po_platina" v-model.number="po_platina_resultado" placeholder="Digite um Número" v-on:tab="gerar_po_platina">
      <v-icon class="btn" slot="append" @click="gerar_po_platina">mdi-dice-d12-outline</v-icon>
      <br>
      <h4> Resultado: {{po_platina_resultado*0.1}} </h4> -->
    </div>
  </form>
  </div>
</template>

<script>
export default {
  data (){
    return{
      po_pc_resultado: {},
      po_pp_resultado: {},
      po_platina_resultado: {},
          }
  },
     methods:{
    gerar_po_pc() {
      this.po_pc_resultado = {}
    },
    gerar_po_pp() {
      this.po_pp_resultado = {}
    },
    gerar_po_platina() {
      this.po_platina_resultado = {}
    },
  }

}
</script>

<style>
#converter{
  background-color: #EEE9D9;
  height: 2000px;
}

#coins_icon_1{
  position: absolute;
  width: 256px;
  height: 256px;
  left: 529px;
  top: 304px;
}

#coins_icon_2{
  position: absolute;
  width: 256px;
  height: 256px;
  left: 1135px;
  top: 304px;
}

#title_converter{
  position: absolute;
  width: 200px;
  height: 42px;
  left: 860px;
  top: 216px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;  
  text-align: center;
  text-transform: uppercase;
  color: #000000;
}

#converter_background{
  position: absolute;
  width: 1181px;
  height: 810px;
  left: 370px;
  top: 146px;
  background: linear-gradient(180deg, #DCD6C2 0%, #C4B999 100%);
  border-radius: 40px;
}

#coin_selector_1{
  position: absolute;
  width: 350px;
  height: 66px;
  left: 482px;
  top: 560px;

  background: #647561;
  border-radius: 10px;
}
#down_arrow_1{
  position: absolute;
    width: 24px;
    height: 24px;
    left: 794px;
    top: 584px;
}

#input_1{
  position: absolute;
  width: 350px;
  height: 30px;
  left: 482px;
  top: 639px;
  background: #B9AE8B;
  border-radius: 5px;
}

#coin_selector_2 {
  position: absolute;
    width: 350px;
    height: 66px;
    left: 1088px;
    top: 560px;
    background: #647561;
    border-radius: 10px;
}

#down_arrow_2 {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 1402px;
  top: 584px;
}

#input_2{
  position: absolute;
  width: 350px;
  height: 30px;
  left: 1088px;
  top: 639px;
  background: #B9AE8B;
  border-radius: 5px;
}

#result_background{
  box-sizing: border-box;
    position: absolute;
    width: 200px;
    height: 50px;
    left: 859px;
    top: 799px;
    background: #B9AE8B;
    border: 1px dashed #5B4E34;
    border-radius: 5px;
}

#result_title{
  position: absolute;
  width: 148px;
  height: 37px;
  left: 885px;
  top: 762px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  color: #000000;
}

#result_number{
  position: absolute;
  width: 148px;
  height: 37px;
  left: 885px;
  top: 805px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  color: #000000;
}

#center_arrow{
  position: absolute;
    width: 120px;
    height: 120px;
    left: 900px;
    top: 534px;
}
</style>