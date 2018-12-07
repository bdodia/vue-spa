<template>
  <div>
    <h1>{{title}}</h1>
    <li v-for="question, i in questions">
      <div>{{question}}</div>
    </li>
  </div>
</template>

!<script>
export default {
  name: "",
  data() {
    return {
      title: "Java Questions",
      questions: []
    };
  },

  methods: {},

  mounted() {
    fetch("http://localhost:3000/java")
      .then(response => response.json())
      .then(data => {
        this.questions = data;
      });
  }
};
</script>

<style  scoped>
</style>

