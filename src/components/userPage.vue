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
            <div class="col-md-2 columnsExample avatar">edit</div>
          </div>

        </div>
      </div>
    </div>


<!-- start pagination -->
    <div class="card text-center m-3">
      <div class="card-body">

  <!-- component by example -->
        <usersPageComponent v-for="(user, index) in this.users"
                            v-bind:key="index"
                            v-bind:index="index"
                            v-bind:user="user"
        />

      </div>

      <div class="card-footer pb-0 pt-3">
        <jw-pagination :items="exampleItems" @changePage="onChangePage"></jw-pagination>
      </div>
    </div>
<!-- end pagination -->

  </div>
</template>

<script>
import Router from "@/router"
import usersPageComponent from "@/components/usersPageComponent.vue"
import Vue from "vue";


export default {
  mounted() {
    Vue.axios.get('https://reqres.in/api/users?page=2').then((response) => {
      this.users = response.data.data
// pagination
      this.count.push(Math.ceil(this.users.length/2))
      this.exampleItems = [...Array( this.count * 10)];
    })
  },

  name: "userPage",

  components: {
    usersPageComponent
  },

  data: function() {
    return {
      users: [],
// pagination
      count: [],
      exampleItems: [],
      pageOfItems: []
    }
  },


  methods: {
    logOut() {
      Router.push('/')
    },
// pagination
    onChangePage(pageOfItems) {
      // update page of items
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
</style>