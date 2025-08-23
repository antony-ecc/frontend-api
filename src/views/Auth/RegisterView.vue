<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted, reactive } from "vue";

const formData = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const { authenticate, checkApi } = useAuthStore();
onMounted(() => {
  checkApi()
})
</script>

<template>
  <main>
    <h1 class="title">Register New Account</h1>

    <form @submit.prevent="authenticate(formData)" class="w-1/2 mx-auto space-y-6">
      <div>
        <input type="text" placeholder="Name" v-model="formData.name">
      </div>
      <div>
        <input type="email" placeholder="Email" v-model="formData.email">
      </div>
      <div>
        <input type="password" placeholder="Password" v-model="formData.password">
      </div>
      <div>
        <input type="password" placeholder="Confirm Password" v-model="formData.password_confirmation">
      </div>

      <button class="primary-btn">Register</button>
    </form>
  </main>
</template>