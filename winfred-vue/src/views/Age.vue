<template>
  <div id="age">
    <h1>Age Compute</h1>
    <div id="box">
      <input type="date" id="dt" v-model="birthday" >
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
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data () {
    return {
      birthday: '01/01/2021'
    }
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    calcAge: function () {
      const today = new Date()
      const inputDate = new Date(this.birthday)
      let yearDiff = today.getFullYear() - inputDate.getFullYear()
      const monthDiff = today.getMonth() - inputDate.getMonth()
      if (yearDiff <= 0) return 0
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < inputDate.getDate())) {
        yearDiff = yearDiff - 1
      }
      return yearDiff
    }
  }
}
</script>
