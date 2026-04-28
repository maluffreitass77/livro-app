<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Recuperar Senha</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="stacked">E-mail cadastrado</ion-label>
        <ion-input type="email" v-model="email" placeholder="exemplo@email.com"></ion-input>
      </ion-item>

      <ion-button expand="full" @click="recuperar" :disabled="!email.includes('@')">Recuperar Senha</ion-button>
      <ion-button expand="full" fill="clear" @click="voltarLogin">Voltar ao login</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';

const email = ref('');
const router = useRouter();

const recuperar = () => {
  alert(`Um link de recuperação foi enviado para ${email.value} (simulado).`);
  router.push('/login');
};

const voltarLogin = () => router.push('/login');
</script>