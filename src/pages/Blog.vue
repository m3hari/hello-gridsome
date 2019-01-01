
<template >
  <layout>
    <Card v-for="(post, index) in posts" :key="index" @click.native="onClick(post)">
      <h3>{{ post.node.title }}</h3>
    </Card>
  </layout>
</template>


<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        slug
        path
        date
      }
    }
  }
}
</page-query>


<script>
import Card from "~/components/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      imgUrl: require("@/favicon.png")
    };
  },
  computed: {
    posts() {
      return this.$page.allPost.edges;
    },
    totalCount() {
      return this.$page.allPost.totalCount;
    }
  },
  methods: {
    onClick(post) {
      this.$router.push({ path: post.node.path });
    }
  }
};
</script>