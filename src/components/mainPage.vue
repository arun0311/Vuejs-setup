<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <div class="parallax">
    </div>
    <div>
      <h1>How's it, isn't it good</h1>
    </div>
    <div class="parallax1">
    </div>
    <div>
      <button class="button2" color="primary" @click="submit">Submit</button>
    </div>
    <div id="mainselection">
      <select dropdown v-model="selected">
        <option v-for="data in json" v-bind:value="data.name">
          {{data.name}}
        </option>
      </select>
    </div>
    <div>
      <p>{{selected}}</p>
    </div>
  </div>
</template>

<script>
import json from '../state.json'
import Header from '@/components/header'

export default {
  data() {
    return {
      selected: '',
      json
    }
  },
  components:{
    Header
  },
  methods: {
    submit() {
      let states = json
      console.log('states', states)
    }
  }
}
</script>

<style>
#mainselection select {
  border: 0;
  color: black;
  background: transparent;
  font-size: 20px;
  font-weight: bold;
  padding: 2px 10px;
  width: 378px;
  *width: 350px;
  *background: #58B14C;
  -webkit-appearance: none;
}

#mainselection {
  overflow: hidden;
  width: 350px;
  -moz-border-radius: 9px 9px 9px 9px;
  -webkit-border-radius: 9px 9px 9px 9px;
  border-radius: 9px 9px 9px 9px;
  box-shadow: 1px 1px 11px #330033;
  background: #58B14C url("http://i62.tinypic.com/15xvbd5.png") no-repeat scroll 319px center;
}

.parallax {
  background: url("../assets/sunrise.jpg") 50% 0 fixed;
  background-size: cover;
  height: auto;
  margin: 0 auto;
  width: 100%;
  padding: 180px 0px;
}

.parallax1 {
  background: url("../assets/sunset.jpg") 50% 0 fixed;
  background-size: cover;
  height: auto;
  margin: 0 auto;
  width: 100%;
  padding: 180px 0px;
}
</style>
