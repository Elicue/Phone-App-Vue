<template>
  <router-link class="mt-8 absolute top-2 right-16" to="/contact"><ion-icon class="w-8 h-8" name="close-circle-outline"></ion-icon></router-link> 
  <div class="modal mx-auto w-1/4 absolute translate-x-[150%] h-max z-50 translate-y-[50%]" id="modal">
    <div class="modalcontent relative">
      <h2 class="uppercase font-bold text-3xl">Add to contact</h2>
      <form class="modalform pt-8 flex flex-col items-start" @submit.prevent="addContact">
        <label for="name">Nom</label>
        <input class="bg-transparent border-[1px] border-black w-full my-4 focus:outline-none px-4 py-2" type="text" id="name" name="name" v-model="name" required>
        <label for="number">Numéro</label>
        <input class="bg-transparent border-[1px] border-black w-full my-4 focus:outline-none px-4 py-2" type="number" id="number" name="number"  v-model="number" required>
        <button class="mt-12 bg-black text-white items-center w-1/2 mx-auto py-2" type="submit">Add</button>
      </form>
    </div>
  </div>

</template>

<script>

export default {
  name: 'FormView',
  
  computed: {
     contacts() {
        return this.$store.state.registered
      }
    },

  methods:{
    addContact() {
      this.contacts.push({
        name: this.name,
        number: this.number,
      })
      this.name = ''
      this.number = ''
    },
  }
}
</script>
