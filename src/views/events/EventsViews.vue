<template>
    <div id="app">
      <navbar is="navbar"/>
      <bottom is="bottom"/>
    </div>
</template>

<script>
import navbar from './components/NavbarComponts.vue'
import bottom from './components/BottomComponts.vue'

export default {
  components:{
    navbar,
    bottom
  }
}
</script>

<style scoped>
@import '../../assets/css/main.css';
@import '../../assets/css/mainrwd.css';
</style>