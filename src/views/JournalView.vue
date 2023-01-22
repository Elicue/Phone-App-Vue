<template>
  <div class="journal w-9/12 mx-auto">
    <div class="uppercase font-bold mt-6">
      <h1 class="text-4xl">Journal</h1>
    </div>
    <div class="grid grid-cols-2 w-11/12 mx-auto  mt-32 ">
      <div class="flex flex-row mb-10 w-11/12 justify-between border-b-[1px] border-black p-4" v-for="call in historicall" :key="call.number">
        <p>{{call.number}}</p>
        <p>{{call.name}}</p>
        <p>{{call.date}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JournalView',

  computed:{
    historicall(){
      return this.$store.state.historicall
    }
  },
}
</script>
