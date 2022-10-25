<template>
  <v-container>
    <v-container class="content">


      
      
      <div class="image">
        <div cols="auto">
          <v-img src="../assets/images/logo-rpg.png"></v-img>
        </div>
      </div>
      
      <div class="login_form">
        <v-row>
          <div class="text_login">
            <h1 class="h1">Login</h1>
          </div>
        </v-row>
        <v-form>
            <v-text-field class="email_field" label="Email" color=#8b0292 v-model="user.email"></v-text-field>

            <v-text-field
            class="password_field"
              color=#8b0292
              label="Senha"
              @keyup.enter="login"
              v-model="user.password"
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
              >
            </v-text-field>

            <v-btn class="login_btn" @click="login">Login</v-btn>

            <v-btn class="cancel_btn" @click="reset">Cancelar</v-btn>
          
          </v-form>
        </div>

    </v-container>
    <v-snackbar 
    color="orange" 
    v-model="errorLogin" 
    
    timeout="2000"> Usuário ou senha inválidos
    </v-snackbar>
    <v-dialog v-model="novaConta" persistent max-width="300">
      <v-card>
        <v-card-title>Conta não encontrada</v-card-title>
        <v-card-text>A conta não foi localizada. Deseja criar uma nova 
          conta com os dados informados?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="criarNovaConta">Sim</v-btn>
          <v-btn color="red darken-1" text @click="novaConta = false">Não</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as fb from '@/plugins/firebase'
export default {
  data(){
    return{
      user: {},
      show: false,
      errorLogin: false,
      novaConta: false,
    };
  },
  methods: {
    reset() {
      this.user = {};
    },
    async login() {
      try {
        await fb.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
        this.$router.push({name:'Home'})
      } catch(error) {
        const errorCode = error.code
        switch(errorCode) {
          case "auth/wrong-password":
            this.errorLogin = true
            break
          case "auth/invalid-email":
            this.errorlogin = true
            break
          case "auth/user-not-found":
            this.novaConta = true
            break
          default:
            this.errorLogin = true
            break
        }
      }
    },
    async criarNovaConta (){
      this.novaConta = false
      await fb.auth.createUserWithEmailAndPassword(
        this.user.email, 
        this.user.password);
      this.login();
    }
  }
}
</script>

<style>

.content {
/* pagina inteira */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 
  'image login_form';
}

.text_login {
  /* titulo login */
}

.image {
  /* imagem */
  display: grid;
  grid-area: image;
}

.v-responsive__content {
  width: 800px;
}

.image img {
  /* width: 10px; */
}

.login_form {
  /* formulario de login */
  display: grid;
  grid-area: login_form;
}

.email_field {
  /* campo de email */
}

.password_field {
  /* campo de senha */
}

.login_btn{
  /* botao de login */
}

.cancel_btn {
  /* botao de cancelar */
}

</style>