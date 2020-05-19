<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Listing",
  data() {
    return { posts: null };
  },
  props: {},
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => (this.state = response.json()))
      .then(json => (this.posts = json));
  }
};
</script>

