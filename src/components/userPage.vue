<template>
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-md-12 mb-3">

        <div class="row">
          <div class="col-md-10">
            <h1>Welcome to users page</h1>
          </div>

          <div class="col-md-2 logout">
            <input type="button" class="btn btn-warning" value="sign out ->" @click="logOut()">
          </div>
        </div>
        <hr>
      </div>
    </div>

<!-- example -->
    <div class="container-fluid mt-2">
      <div class="row">
        <div class="col-md-12">

          <div class="row rows">
            <div class="col-md-1 columnsExample index">index</div>
            <div class="col-md-2 columnsExample name">name</div>
            <div class="col-md-2 columnsExample surname">surname</div>
            <div class="col-md-4 columnsExample mail">mail</div>
            <div class="col-md-1 columnsExample avatar">avatar</div>
            <div class="col-md-2 columnsExample edit">edit</div>
          </div>

        </div>
      </div>
    </div>

    <hr>

<!-- start pagination -->
    <div class="card text-center">
      <div class="card-body p-0">
    <!-- component by example -->
        <usersPageComponent v-for="(user, index) in this.users"
                            v-bind:key="index"
                            v-bind:index="index"
                            v-bind:user="user">
        </usersPageComponent>
      </div>

      <div class="card-footer pb-3 pt-5">
        <jw-pagination :pageSize="2" :items="users" @changePage="onChangePage"></jw-pagination>
      </div>
    </div>
<!-- end pagination -->
  </div>
</template>

<script>
import Router from "@/router"
import usersPageComponent from "@/components/usersPageComponent.vue"
import Vue from "vue"

export default {
  name: "userPage",
  components: {
    usersPageComponent
  },

  data: function() {
    return {
      users: [],
// pagination
      exampleItems: [],
      pageOfItems: []
    }
  },

  mounted() {
    Vue .axios.get('https://reqres.in/api/users?page=2').then((response) => {
      this.users = response.data.data
      // pagination
      this.exampleItems = [...Array(this.users.length).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
      // this.users make array
      console.log(this.users)
      console.log(typeof(this.users))
    })
  },

  methods: {
    logOut() {
      Router.push('/')
    },
// pagination
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    }
  }
}
</script>

<style scoped>
 .logout{
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .columnsExample{
   padding: 5px;
   color: #ff0000;
   font-weight: bold;
 }
 .rows{
   border: 1px black solid;
 }
 .columnsExample{
   border-right: 1px black solid;
 }
 .edit{
   border-right: 0px black solid;
 }
 .card-body{
   border-top: 1px black solid;
 }
</style>