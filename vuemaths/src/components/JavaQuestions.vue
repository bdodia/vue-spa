<template>
  <div>
    <h1>{{title}}</h1>
    <select>
      <option
        v-for="question in questions"
        :key="question.id"
        value="question.id"
      >{{question.question}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      title: 'Java Questions',
      questions: []
    }
  },

  methods: {},

  mounted () {
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
