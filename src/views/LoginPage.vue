<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="stacked">E-mail</ion-label>
        <ion-input type="email" v-model="email" placeholder="exemplo@email.com"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Senha</ion-label>
        <ion-input type="password" v-model="senha" placeholder="********"></ion-input>
      </ion-item>

      <ion-button expand="full" @click="entrar" :disabled="!formValido">Entrar</ion-button>
      <ion-button expand="full" fill="clear" @click="irParaCadastro">Criar conta</ion-button>
      <ion-button expand="full" fill="clear" @click="irParaRecuperacao">Esqueceu a senha?</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { usuarioLogado } from '../composables/userStore';

const email = ref('');
const senha = ref('');
const router = useRouter();

const formValido = computed(() => {
  return email.value.includes('@') && senha.value.length >= 4;
});

const entrar = () => {
  if (!formValido.value) {
    alert('E-mail válido e senha com 4+ caracteres');
    return;
  }
  
  // Verifica se o e-mail digitado é o mesmo do cadastro
  if (email.value !== usuarioLogado.value.email) {
    alert('E-mail não cadastrado. Faça o cadastro primeiro.');
    router.push('/register');
    return;
  }
  
  // Login OK
  router.push('/home');
};

const irParaCadastro = () => router.push('/register');
const irParaRecuperacao = () => router.push('/forgot-password');
</script>

<style scoped>
ion-item {
  margin-bottom: 16px;
}
</style>