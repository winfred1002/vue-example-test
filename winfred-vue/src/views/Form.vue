<template>
  <div class="form">
    <h1>Form Test</h1>
    <form
      id="app"
      @submit="checkForm"
      action="https://vuejs.org/"
      method="post">
      <span v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <span v-for="error in errors" :key="error">{{ error }}</span>
          <br>
      </span>
      <label for="name">Name:</label>
      <input id="name" type="text" v-model="name" />
      <div v-if="submitted && !$v.name.required" class="invalid-feedback">Name is required</div>
      <br>
      <label for="email">Email:</label>
      <input type="email" v-model="email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.email.$error }" />
      <div v-if="submitted && $v.email.$error" class="invalid-feedback">
        <span v-if="!$v.email.required">Email is required</span>
        <span v-if="!$v.email.email">Email is invalid</span>
      </div>
      <br>
      <label for="sex">Sex:</label>
      <input type="radio" name="" id="female" value="Female" v-model="sex" />
      <label for="female">Female</label>
      <input type="radio" name="" id="male" value="Male" v-model="sex" />
      <label for="male">Male</label>
      <br>
      <p>
        <input type="submit" value="Submit">
      </p>
    </form>
    <hr>
    <p>name: {{name}}</p>
    <p>email: {{email}}</p>
    <p>sex is: {{sex}}</p>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data () {
    return {
      name: '',
      email: '',
      sex: 'Male',
      errors: []
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    checkForm: function (e) {
      this.errors = []
      if (!this.name) {
        this.errors.push('Name required.')
      }
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid Email required.')
      }
      if (!this.errors.length) {
        alert('Submit Successful!!!\r\n Name is ' +
          this.name + '\r\n Email is ' + this.email +
          ' \r\n Sex is ' + this.sex)
        // return
      }
      e.preventDefault()
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>
