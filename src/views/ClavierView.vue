<template>
  <div class="uppercase font-bold mt-6">
    <h1 class="text-4xl">Clavier</h1>
  </div>
  <div class="clavier items-center flex flex-col justify-center mt-[20vh]">
    <div>
      <h2 class="border-[1px] px-4 py-2 w-[25vh] h-[6vh] border-black">{{ checkIfExist }}</h2>
      <p class="border-b-[1px] w-[25vh] h-[6vh] pt-6 pb-2 border-black" id="num">{{ call.number }}</p>
    </div>
    <div class="grid grid-cols-3 gap-16 w-1/4 mx-auto mt-16">
      <button @click="AddNum('1')">1</button>
      <button @click="AddNum('2')">2</button>
      <button @click="AddNum('3')">3</button>
      <button @click="AddNum('4')">4</button>
      <button @click="AddNum('5')">5</button>
      <button @click="AddNum('6')">6</button>
      <button @click="AddNum('7')">7</button>
      <button @click="AddNum('8')">8</button>
      <button @click="AddNum('9')">9</button>
      <button></button>
      <button @click="AddNum('0')">0</button>
      <button></button>
    </div>
    <div class="mt-10 hover:rotate-12">
      <ion-icon @click="doCall()" class="w-8 h-8 animate-bounce" name="call"></ion-icon>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ClavierView',
  computed:{
    checkIfExist(){
      let check = this.$store.state.registered.find((item) => item.number === this.call.number)
      if (check){
        return check.name
      }else{
        return 'Unknown'
      }
    },
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
    AddNum(num) {
      if (this.call.number.length < 10){
        this.call.number += num
      }
    },

    doCall(){
      if (this.call.number.length < 10){
        this.call.number = ""
        return
      }
      this.call.name = this.checkIfExist
      this.call.date = new Date().toLocaleString()
      this.$store.commit('call', this.call)
      // this.call.number = ''
    }
  }
}
</script>
