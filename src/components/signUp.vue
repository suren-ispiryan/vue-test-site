<template>
  <div class="container-fluid mt-5 signUp">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <form class="form pr-4 pl-4">
              <h1 class="mt-5">Sign Up</h1>
              <input type="mail" class="mt-3 form-control" placeholder="Email">
              <input type="pass" class="mt-3 form-control" placeholder="Password">
              <input type="Conf" class="mt-3 form-control" placeholder="Confirm Password">
              <input type="button" class="mt-4 mb-1 btn btn-primary form-control" value="register" @click="register()">
              <br>
              <router-link to="/"><h6 class="mb-3 mt-2">Sign In</h6></router-link>
            </form>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Router from '@/router/index.js'

export default {
  name: 'signUp',
  methods: {
    register () {
      Router.push('/')
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
