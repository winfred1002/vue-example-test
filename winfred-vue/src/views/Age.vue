<template>
  <div id="age">
    <h1>Age Compute</h1>
    <div id="box">
      <input type="date" id="date" v-model="birthday" >
    </div>
    <div id="input">
      <span>Your Birthday is {{ birthday }}</span>
    </div>
    <div class="display">
      The Result of Calculate Age is {{ calcAge }}
    </div>
  </div>
</template>

<script>
export default {
  el: '#box',
  data () {
    return {
      birthday: '01/01/2021'
    }
  },
  computed: {
    calcAge: function () {
      const today = new Date()
      const inputDate = new Date(this.birthday)

      const yearDiff = today.getFullYear() - inputDate.getFullYear()
      const monthDiff = today.getMonth() - inputDate.getMonth()
      const dayDiff = today.getDate() - inputDate.getDate()

      let age
      if (yearDiff <= 0) {
        return 0
      }
      // console.log('[DBG]monthDiff=' + monthDiff + ' ,dateDiff=' + dayDiff)
      if ((monthDiff < 0) || (monthDiff === 0 && dayDiff <= 0)) {
        age = yearDiff - 1
      } else {
        age = yearDiff
      }
      return age
    }
  }
}
</script>
