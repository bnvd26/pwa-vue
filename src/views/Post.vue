<template>
  <div class="home">
    <Listing msg="Welcome to the post page" />
  </div>
</template>

<script>

import Listing from "@/components/Listing.vue";

export default {
  name: "Post",
  components: {
    Listing
  }
};
</script>
