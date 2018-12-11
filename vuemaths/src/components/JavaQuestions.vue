<template>
<div>
  <body>
    <section class="section">
      <div class="container" @change="console.log($event)">
        <h1 class="title">Java Quizzer</h1>
        <p class="subtitle">Challenge yourself with Java questions!</p>
        <div>
          <h1>{{title}}</h1>
          <el-select
            v-model="valueSelection"
            placeholder="Select"
            @change="$emit('change', 'something')"
          >
            <el-option
              v-for="question in questions"
              :key="question.id"
              :label="idCategory(question.id, question.category)"
              :value="question.id"
            ></el-option>
          </el-select>
        </div>

        <div class="columns">
          <div class="column is-narrow">
            <div class="box" style="width: 200px;">
              <p class="title is-5">Selected Question .....</p>
              <p class="subtitle">Question text .....</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      title: 'Pick a question',
      questions: [],
      valueSelection: ''
    }
  },

  computed: {
  },

  methods: {
    idCategory: function (id, category) {
      return id + ' ' + category
    }
  },

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
