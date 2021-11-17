<template>
  <div class="container">
    <h1>Temperature Conversion</h1>
    <input id="toggleTemperature" type="checkbox" v-model="isCelsius">
    <label for="toggleTemperature">Convert：{{ toggleTemperature }}</label>
    <br>
    <div class="celsius">
      <span v-show="!isCelsius">Input Value of Degree Celsius：</span>
      <span v-show="isCelsius">Input Value of Degree Fahrenheit :</span>
      <input type='number' v-model="userInput" />
    </div>
    <br>
    <h2 v-if="isCelsius">Celsius：{{ showFahrenheitToCelsius }} °C</h2>
    <h2 v-if="!isCelsius">Fahrenheit：{{ showCelsiusToFahrenheit }} °F</h2>
    <button @click="countResult()">
      Count
    </button>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data () {
    return {
      userInput: 0,
      isCelsius: false
    }
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    showCelsiusToFahrenheit () {
      return this.userInput * 9 / 5 + 32
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    showFahrenheitToCelsius () {
      return (this.userInput - 32) * 5 / 9
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toggleTemperature () {
      return this.isCelsius ? '°F convert to °C' : '°C convert to °F'
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    countResult: function () {
      if (this.isCelsius) {
        alert('The value of Celsius is ' + this.showFahrenheitToCelsius)
      } else {
        alert('The value of Fahrenheit is ' + this.showCelsiusToFahrenheit)
      }
    }
  }
}
</script>
