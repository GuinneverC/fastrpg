<template>
  <v-container class="pa-8" fluid id="background">
    
      <v-container>

      <div id="profile_background"></div>

      <img id="profile_icon" src="../assets/images/profile_icon.png">
      <img  id="add_photo_icon" src="../assets/images/add_photo_icon.png">

        
        <v-text-field id="information_fields" label="Nome" ></v-text-field>
        <v-text-field id="information_fields" label="Sobrenome" ></v-text-field>
        <v-text-field id="information_fields" label="Turma" ></v-text-field>
        <v-btn id="save_profile" @click="salvarPerfil" >Salvar Perfil</v-btn>
      
      <v-btn id="change_photo">Alterar Imagem</v-btn>


      </v-container>
    
  </v-container>

</template>

<script>
import * as fb from '@/plugins/firebase'
export default {
  data() {
    return {
      nome: '',
      sobrenome: '',
      turma: '',
      uid: '',
      temPerfil: false,
    };
  },
  async mounted(){
    this.uid = fb.auth.currentUser.uid;
    const userProfile = await fb.profileCollection.where("uid", "==", this.uid).get();
  if (userProfile.docs.length > 0) {
    this.temPerfil = true;
    const perfil = userProfile.docs[0];
    this.profileId = perfil.id;
    this.nome = perfil.data().nome;
    this.sobrenome = perfil.data().sobrenome;
    this.turma = perfil.data().turma;
  }
  },
  methods: {
    async salvarPerfil() {
      if (this.temPerfil) {
        await fb.profileCollection.doc(this.profileId).update({
          nome: this.nome,
          sobrenome: this.sobrenome,
          turma: this.turma,
        });
      } else {
        await fb.profileCollection.add({
          uid: this.uid,
          nome: this.nome,
          sobrenome: this.sobrenome,
          turma: this.turma,
        })
      }
    }
  }
}
</script>

<style>

#background{
  background-color: #EEE9D9;
  height: 2000px;
}

#information_fields{
  display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 46px;

position: absolute;
width: 428.03px;
height: 372.5px;
left: calc(50% - 428.03px/2 + 311.02px);
top: calc(50% - 372.5px/2 - 28.75px);
}

#profile_background{
  position: absolute;
  width: 1181px;
  height: 810px;
  left: 370px;
  top: 146px;
  background: linear-gradient(180deg, #DCD6C2 0%, #C4B999 100%);
  border-radius: 40px;
}

#profile_icon{
  position: absolute;
width: 353px;
height: 353px;
left: 449px;
top: 251px;
}

#add_photo_icon{
  position: absolute;
width: 110px;
height: 110px;
left: 684px;
top: 489px;

}

#name_field{
  position: absolute;
  width: 428px;
  height: 54px;
  left: 1057px;
  top: 325px;

  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
}

#last_name_field{
  position: absolute;
  width: 313px;
  height: 89px;
  left: 1057px;
  top: 425px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  color: #000000;

}

#class_field{
  position: absolute;
  width: 313px;
  height: 89px;
  left: 1057px;
  top: 560px;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  color: #000000;
}

#save_profile{
  position: absolute;
width: 413.36px;
height: 90.27px;
left: calc(50% - 413.36px/2 - 0.32px);
top: 810px;
background: #6C5D3F;
border-radius: 10px;

font-family: 'Karla';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 47px;
text-align: center;

color: #EEE9D9;
}

#change_photo{
  position: absolute;
width: 325px;
height: 53.33px;
left: 470px;
top: 640px;
background: #AE9D7E;
border-radius: 10px;

font-family: 'Karla';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 37px;
text-align: center;
color: #423825;
}

</style>