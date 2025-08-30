<script setup>
import { usePostsStore } from '@/stores/post';
import { onMounted, ref } from 'vue';



const { getAllPosts } = usePostsStore();
const posts = ref([])

onMounted(async () => {
   posts.value = await getAllPosts();
   console.log(posts);
});

</script>

<template>
  <main>
    <h1 class="title">Latest Post</h1>

    <div v-if="posts.length > 0">
      <div v-for="post in posts" :key="post.id" class="border-l-4 border-blue-500 pl-4 mb-12">
        <h2 class="font-bold text-3xl">{{ post.title }}</h2>
        <p class="text-xs text-slate-600 mb-4">
          Posted by {{ post.user.name }}
        </p>
        <p>
          {{ post.body }}
          <router-link :to="{ name: 'show', params: { id: post.id }}" class="text-blue-500 font-bold underline">Read more...</router-link>
        </p>
      </div>
    </div>
    <div v-else>
      <h2 class="title">Tidak ada postingan</h2>
    </div>

  </main>
</template>
