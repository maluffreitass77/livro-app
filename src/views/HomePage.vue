<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Meus Livros Favoritos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-card v-for="livro in livros" :key="livro.id" @click="abrirDetalhe(livro.id)">
          <ion-card-header>
            <ion-card-title>{{ livro.title }}</ion-card-title>
            <ion-card-subtitle>{{ livro.author }}</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
      </ion-list>

      <ion-button expand="full" fill="clear" @click="sair">Sair</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from '@ionic/vue';
import { books } from '../mock/books';

const livros = ref(books);
const router = useRouter();

const abrirDetalhe = (id: number) => {
  router.push(`/book/${id}`);
};

const sair = () => {
  router.push('/login');
};
</script>

<style scoped>
ion-card {
  cursor: pointer;
  margin-bottom: 12px;
}
</style>