import { ref } from 'vue';

export const usuarioLogado = ref({
  nome: '',
  email: ''
});

export function setUsuario(nome: string, email: string) {
  usuarioLogado.value = { nome, email };
}

export function logout() {
  usuarioLogado.value = { nome: '', email: '' };
}