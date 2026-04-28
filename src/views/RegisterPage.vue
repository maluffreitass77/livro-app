<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Cadastro</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="stacked">Nome</ion-label>
        <ion-input v-model="nome" placeholder="Seu nome"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">E-mail</ion-label>
        <ion-input type="email" v-model="email" placeholder="exemplo@email.com"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Senha</ion-label>
        <ion-input type="password" v-model="senha" placeholder="********"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Confirmar senha</ion-label>
        <ion-input type="password" v-model="confirmarSenha" placeholder="********"></ion-input>
      </ion-item>

      <ion-button expand="full" @click="cadastrar" :disabled="!cadastroValido">Cadastrar</ion-button>
      <ion-button expand="full" fill="clear" @click="voltarLogin">Já tenho conta</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';

const nome = ref('');
const email = ref('');
const senha = ref('');
const confirmarSenha = ref('');
const router = useRouter();

const cadastroValido = computed(() => {
  return nome.value.trim() !== '' &&
         email.value.includes('@') &&
         senha.value.length >= 4 &&
         senha.value === confirmarSenha.value;
});

const cadastrar = () => {
  if (cadastroValido.value) {
    alert('Cadastro simulado com sucesso! Faça login.');
    router.push('/login');
  } else {
    alert('Verifique os dados (senhas devem coincidir, e-mail válido, nome não vazio)');
  }
};

const voltarLogin = () => router.push('/login');
</script>