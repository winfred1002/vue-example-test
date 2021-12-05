<template>
  <div>
    <h1>Calculate Age</h1>
    <div>
      <input type="date" id="birthday" v-model="birthday" />
    </div>
    <div>Your birthday is {{ birthday }}</div>
    <div>The result of age is {{ age }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return { birthday: '01/01/2021' }
  },
  computed: {
    age () {
      const today = new Date()
      const birthday = new Date(this.birthday)

      if (birthday > today) {
        return -1
      }

      const yearDiff = today.getFullYear() - birthday.getFullYear()
      const monthDiff = today.getMonth() - birthday.getMonth()
      const dayDiff = today.getDate() - birthday.getDate()

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        return yearDiff - 1
      }
      return yearDiff
    }
  }
}
</script>
