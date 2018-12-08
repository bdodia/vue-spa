<template>
  <div>
    <h1>{{title}}</h1>
    <li v-for="question in questions" :key="question.id">
      <div>{{question.category}}</div>
    </li>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      title: 'Java Questions',
      questions: []
    }
  },

  methods: {},

  mounted() {
    fetch('http://localhost:3000/java')
      .then(response => response.json())
      .then(data => {
        this.questions = data
      })
  }
}
</script>

<style  scoped>
</style>
