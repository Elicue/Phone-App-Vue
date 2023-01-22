<template>
  <div class="uppercase font-bold mt-6">
    <h1 class="text-4xl">Contact</h1>
  </div>

  <router-link class="mt-8 absolute top-2 right-16 contactadd" to="/form"><ion-icon class="w-8 h-8" name="add-circle-outline"></ion-icon></router-link> 

  <div class="contact w-full mx-auto relative mt-32">
    <table class="contactTable w-10/12 mx-auto">
      <div class="w-11/12 grid grid-cols-3 mx-auto">
        <tr CLASS=" border-b-[1px] border-black w-10/12 flex flex-row justify-between mb-6" v-for="(contact, index) in contacts" :key="index">
          <div class="flex flex-row">
            <p class="capitalize text-xl">{{contact.name}}</p>
            <p class="ml-4 text-xl">{{contact.number}}</p>
          </div>
          <div class="flex flex-row justify-between w-1/5 items-center">
            <button @click="deleteContact(index)"><ion-icon class="w-6 h-6 hover:animate-bounce" name="close-circle-outline"></ion-icon></button>
            <button @click="doCall()"><ion-icon class="w-5 h-5 hover:animate-bounce" name="call"></ion-icon></button>
          </div>
        </tr>
      </div>
    </table>
  </div>

</template>

<script>
export default {
  name: "ContactView",

  computed: {
     contacts() {
        return this.$store.state.registered
      }
    },

  data(){
    return {
      call:{
        number: '',
        name: '',
        date: ''
      }
    }
  },

  methods: {
    deleteContact(index) {
      this.contacts.splice(index, 1)
    },

    //call the number when the docall button is pressed
    doCall() {
      if (this.call.number.length < 10){
        this.call.number = ""
        return
      }
      this.call.date = new Date().toLocaleString()
      this.$store.commit('addHistoricall', this.call)
      this.call.number = ''
    }
    
  },
}
</script>