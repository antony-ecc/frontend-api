import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      // menyimpan data variable yang diproses oleh action
      errors: {}
    }
  },
  actions: {
    async checkApi() {
      try {
        const res = await fetch("/api/health"); // endpoint sederhana
        if (!res.ok) throw new Error("API tidak merespon");
        this.apiStatus = "ok";
        return console.log(res);
      } catch (err) {
        this.apiStatus = "down";
        this.errors = { connection: "Tidak dapat terhubung ke server" };
        return false;
      }
    },
    async authenticate(formData) {
      const res = await fetch('/api/register', {
        method: 'post',
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
    }
  }
})