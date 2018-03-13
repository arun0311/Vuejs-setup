
<template>
  <div class="flex-container">
    <div class="module">
      <h3 class="stripe-4">Personal Details</h3>
    </div>
    <div>
      <label class="form__label col-sm-3">Name</label>
      <input class="col-sm-3 box" v-model="form.name" @blur="$v.form.name.$touch" @keyup.enter="submit" :error="$v.form.name.$error" />
      <span v-if="form.name.required">Field is required</span>
    </div>
    <div>
      <label class="form__label col-sm-3">Email ID</label>
      <input class="col-sm-3 box" v-model="form.email" @blur="$v.form.email.$touch" @keyup.enter="submit" :error="$v.form.email.$error" />
      <span v-if="form.email.required">Field is required</span>
    </div>
    <div>
      <label class="form__label col-sm-3">Password</label>
      <input class="col-sm-3 box" v-model="form.password" @blur="$v.form.password.$touch" @keyup.enter="submit" :error="$v.form.password.$error" />
      <span v-if="form.password.required">Field is required</span>
    </div>
    <div>
      <label class="form__label col-sm-3">Mobile No.</label>
      <input class="col-sm-3 box" v-model="form.mobile" @blur="$v.form.mobile.$touch" @keyup.enter="submit" :error="$v.form.mobile.$error" />
      <span v-if="form.mobile.required">Field is required</span>
    </div>
    <button class="button2" color="primary" @click="submit">Submit</button>
      <ul class="navigation">
    <a href="/home">People</a>
  </ul>
  </div>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
import Router from 'vue-router';

export default {
  data() {
    return {
      form: {
        email: '', name: '', password: '', mobile: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      name: { required },
      password: { required },
      mobile: { required }
    }
  },
  methods: {
    submit() {
      let self = this
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        console.log('form error', this.form)
        return
      } else {
        console.log('form valid', this.form)
        this.$route.router.push('/home');
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.module {
  background: white;
  border: 1px solid #ccc;
  margin: 3%;
}
.module > h2 {
  padding: 1rem;
  margin: 0 0 0.5rem 0;
}

.stripe-4 {
    color: #0a93ff;
    background: repeating-linear-gradient(-55deg, #222, #222 10px, #333 10px, #333 24px);
}
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.dropdown-state {
  -webkit-appearance: none;
  padding: 10px;
  border-color: #41b883;
  background: white;
  width: 200px;
}

.form__label {
  padding: 25px;
  float: left;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 0 !important;
  background: #056d3f;
  background-image: none;
}

.col-sm-3 {
  width: 25%;
}
.button2 {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
}
.box {
    border-color: red;
    border-width: inherit;
    box-shadow: 0 0 5px 1px #ff57226b;
    border: 2px solid #73AD21;
    float: right;
    width: 64%;
    box-sizing: border-box;
    padding: 10px;
    position: absolute;
    margin: 42px 0 0 -207px;
}
.button2:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

.flex-container {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    background-color: #dee0e2;
    width: 600px;
    float: left;
    left: 35%;
    position: absolute;
}

.flex-container > div {
    background-color: #f1f1f1;
    width: 97%;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 27px;
}



/* Custom Select */

.select {
  position: relative;
  display: block;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #41b883;
  overflow: hidden;
  border-radius: .25em;
}

select {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 .5em;
  color: #fff;
  cursor: pointer;
}

select::-ms-expand {
  display: none;
}
/* Arrow */

.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 1em;
  background: #41b883;
  pointer-events: none;
}
/* Transition */

.select:hover::after {
  color: #f39c12;
}

.select::after {
  -webkit-transition: .25s all ease;
  transition: .25s all ease;
}
</style>
