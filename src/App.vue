<template>
  <nav class="flex flex-col h-screen fixed border-r-[1px] border-black left-0 top-0 w-32">
    <div class="flex flex-col h-screen left-0 top-0 justify-center items-center w-max">
      <router-link to="/">Journal</router-link> 
      <router-link class="mt-8" to="/contact">Contact</router-link> 
      <router-link class="mt-8" to="/clavier">Clavier</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #f3af56;
}
</style>
