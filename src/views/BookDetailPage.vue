<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Detalhes</ion-title>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div v-if="livro">
        <ion-img :src="livro.image" style="max-height: 300px; object-fit: cover;"></ion-img>
        <ion-card>
          <ion-card-header>
            <ion-card-title>{{ livro.title }}</ion-card-title>
            <ion-card-subtitle>{{ livro.author }}</ion-card-subtitle>
          </ion-card-header>
        <ion-card-content>
  <h3 style="color: #4a2c1a; margin-bottom: 8px;">📖 Sinopse</h3>
  <p style="line-height: 1.5; text-align: justify;">{{ livro.description }}</p>
</ion-card-content>
        </ion-card>
      </div>
      <div v-else>
        <p>Livro não encontrado.</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButtons, IonBackButton } from '@ionic/vue';
import { books } from '../mock/books';

const props = defineProps<{ id: string }>();  // recebe o id via props (por causa do props: true na rota)

const livro = computed(() => {
  return books.find(b => b.id === Number(props.id));
});
</script>