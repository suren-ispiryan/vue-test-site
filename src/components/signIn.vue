<template>
  <div class="container-fluid mt-5 signIn">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <form class="form pr-4 pl-4">
              <h1 class="mt-5">Sign In</h1>
              <input type="mail" class="mt-3 form-control" placeholder="Email" v-model='mail'>
              <input type="pass" class="mt-3 form-control" placeholder="Password" v-model='password'>
              <input type="button" class="mt-4 mb-1 btn btn-primary form-control" value="submit" @click="login()">
              <br>
              <router-link to="/signUp"><h6 class="mb-3 mt-2">Sign Up</h6></router-link>
            </form>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Router from "@/router";
// import $ from 'jquery'
export default {
  name: 'signIn',

  data: function() {
    return {
      mail: '',
      password: ''
    };
  },

  methods: {
    login() {
      Vue.axios.get('https://reqres.in/api/users?page=2')
          .then((response) => {
            // show all users data
            console.log(response.data)
            // check if user exists
            for (let i = 0; i < response.data.data.length; i++) {
              if (this.mail == response.data.data[i]['email'] && this.password  == response.data.data[i]['id']) {
                // push to page
                Router.push('/userPage')
              }
          }
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form{
    border-radius: 3px;
    border: 1px black solid;
    width: 400px;
    margin: 100px 0 0 0;
  }
  .btn{
    width: 200px;
  }
  .col-md-6{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
