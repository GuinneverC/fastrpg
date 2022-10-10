<template>

  <v-container fluid class=background>
    
      <v-container>

      <div class="text_profile"> Perfil </div>

      <div class=profile_background></div>

      <img class=profile_icon src="../assets/images/profile_icon.png">
      <img class=add_photo_icon src="../assets/images/add_photo_icon.png">

        
        <v-text-field class=information_fields label="Nome" ></v-text-field>
        <v-text-field class=information_fields label="Sobrenome" ></v-text-field>
        <v-text-field class=information_fields label="Turma" ></v-text-field>
       
        <v-btn class=save_profile @click="salvarPerfil" >Salvar Perfil</v-btn>
      
        <v-btn class=change_photo> Alterar Imagem </v-btn>


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

.background{
  background-color: #EEE9D9;
  height: 2000px;
}

.text_profile{
  text-align: center;
  font-size: 45px;
}

.profile_background{
  position: absolute;
  width: 1180px;
  height: 810px;
  left: 50;
  top: 150px;
  background: linear-gradient(180deg, #DCD6C2 0%, #C4B999 100%);
  border-radius: 40px;
}

.profile_icon{
  position: relative;
  width: 250px;
  height: 250px;
  left: 80px;
  top: 180px;
}

.add_photo_icon{
  position: relative;
  width: 100px;
  height: 100px;
  top: 180px;
  left: -10px;
}

.information_fields{
  display: flex;
  left: 550px;
  width: 550px;
  position: relative;
  top: -40px;
  height: 75px;
}

.save_profile{
  position: relative;
  width: 400px;
  height: 150px;
  left: 385px;
  top: 270px;
  border-radius: 10px;
  font-style: normal;
  font-size: 40px;
  text-align: center;
}

.change_photo{
  position: relative;
  width: 300px;
  height: 54px;
  left: -330px;
  top: -20px;
  border-radius: 10px;
  font-size: 40px;
  text-align: center;
}

</style>