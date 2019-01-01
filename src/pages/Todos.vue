
<template >
  <layout>
    <Card v-for="(todo, index) in todos" :key="index" @click.native="onClick(todo)">
      <h3>{{ todo.node.title }}</h3>
    </Card>
  </layout>
</template>


<page-query>
query {
  allTodo {
    totalCount
    edges {
      node {
        id
        title
        slug
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
    todos() {
      return this.$page.allTodo.edges;
    },
    totalCount() {
      return this.$page.allTodo.totalCount;
    }
  },
  methods: {
    onClick(todo) {
      this.$router.push({ path: todo.node.path });
    }
  }
};
</script>