import { defineStore } from "pinia";

export const usePostsStore = defineStore('postsStore', {
  state: () => {
    return {
      errors: {}
    }
  },

  actions: {
    async getAllPosts() {
      const res = await fetch('/api/posts');
      const data = await res.json();

      return console.log(data);
    },

    // To API for create a post
    async createPost(formData) {
      const res = await fetch('/api/posts', {
        method: 'post',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json();
      if(data.errors) {
        this.errors = data.errors
      } else {
        this.router.push({ name: 'home' })
      }
    }
  }
})