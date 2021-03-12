<template>
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-md-12">

        <div class="row rows">
          <div class="col-md-1 columns index">{{ this.index + 1 }}</div>
          <div class="col-md-2 columns name">{{ this.user.first_name }}</div>
          <div class="col-md-2 columns surname">{{ this.user.last_name }}</div>
          <div class="col-md-4 columns mail">{{ this.user.email }}</div>
          <div class="col-md-1 columns avatar img-fluid">
            <img class="img-fluid" :src="this.user.avatar">
          </div>
          <div class="col-md-2 columns edit">
            <input type="button" class="btn btn-warning mr-2" value="modify" @click="modifyElement()">
            <input type="button" class="btn btn-danger ml-2" value="delete" @click="deleteElement()">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "usersPageComponent",

  props: [
      'user',
      'index'
  ],

  data: function() {
    return {

    }
  },

  methods: {
    modifyElement () {

    },
    deleteElement () {

    }
  }
}
</script>

<style scoped>
  img{
    height: 100%;
  }
 .columns{
   max-height: 100px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 5px;
   color: green;
   border-right: 1px black solid;
 }
 .rows{
   border: 1px black solid;
 }
</style>