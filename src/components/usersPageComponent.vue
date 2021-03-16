<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">

        <!-- delete user(row) -->
        <div v-bind:style='{"display" : (isActive? "block" : "none" )}'>
          <div class="row rows">
            <!-- user data -->
            <div class="col-md-1 columns index">
              {{ this.index + 1 }}
            </div>

            <div class="col-md-2 columns name" id="name">
              <a href="">
                {{ this.user.first_name }}
              </a>
            </div>

            <div class="col-md-2 columns surname" id="surname">
              {{ this.user.last_name }}
            </div>

            <div class="col-md-4 columns mail" id="mail">
              {{ this.user.email }}
            </div>

            <div class="col-md-1 columns avatar img-fluid">
              <img class="img-fluid" :src="this.user.avatar">
            </div>
            <!-- edit buttons -->
            <div class="col-md-2 columns edit">
              <input type="button" class="btn btn-warning mr-2" value="modify" @click="modifyElement()">
              <input type="button" class="btn btn-danger mr-2" value="delete" @click="deleteElement()">
            </div>
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
      'index',
  ],

  data: function() {
    return {
      isActive: true,
    }
  },

  methods: {
    modifyElement () {
      // take elements
      const elements = document.querySelectorAll('.columns');
      // manipulate each element
      elements.forEach(element => {
        element.contentEditable = true;
      })
    },
    // delete user(row)
    deleteElement () {
      this.isActive = !this.isActive;
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
   border-bottom: 1px black solid;
   border-left: 1px black solid;
 }
 .btn{
   max-width: 100px;
   width: 70%;
   margin: 1px;
   padding: 5px 5px;
 }
 .edit{
   border-right: 1px black solid;
   display: flex;
   flex-wrap: wrap;
 }

</style>