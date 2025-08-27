<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useAuthStore } from './stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
  authStore.getUser();
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>

        <div v-if="authStore.user" class="flex items-center space-x-6">
          <p class="text-white">Welcome back {{ authStore.user.name }}</p>

          <router-link :to="{ name: 'create'}" class="nav-link">New Post</router-link>

          <form @submit.prevent="authStore.logout()">
            <button class="nav-link">Logout</button>
          </form>
        </div>

        <div v-else>
          <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
          <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>