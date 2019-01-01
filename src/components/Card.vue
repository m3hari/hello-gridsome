<template>
  <div class="card">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      message: "Try change me!"
    };
  },
  methods: {
    onClick() {
      this.message = "Here you go :)";
    }
  }
};
</script>

<style>
.card {
  cursor: pointer;
  padding: 20px;
  margin: 4px;
  background: #fff;
  border: 1px solid gray;
}
</style>