<template>
  <div id="app">
    <navbar is="navbar" />
    <news is="news" />
    <calendar is="calendar" />
    <about is="about" />
    <bottom is="bottom" />
  </div>
</template>

<script>
import navbar from "./components/NavBarComponts.vue";
import news from "./components/NewsComponts.vue";
import calendar from "./components/CalendarComponts.vue";
import about from "./components/AboutComponts.vue";
import bottom from "./components/BottomComponts.vue";

export default {
  components: {
    navbar,
    news,
    calendar,
    about,
    bottom
  }
};
</script>

<style scoped>
@import "../../assets/css/index.css";
@import "../../assets/css/rwd.css";
</style>  
