<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>

        <div>
          <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>