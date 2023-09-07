<template>
  <q-layout container style="height: 700px">
    <q-header>
      <q-toolbar>
        <a href="/"
          ><img src="@/assets/logo.png" width="500" style="padding: 20px"
        /></a>
      </q-toolbar>
      <!-- start router link -->
      <router-link :to="{ name: 'about' }" class="q-router-link">{{
        About
      }}</router-link>
      <router-link :to="{ name: 'news' }" class="q-router-link">{{
        News
      }}</router-link>
      <router-link :to="{ name: 'events' }" class="q-router-link">{{
        Events
      }}</router-link>
      <router-link :to="{ name: 'search' }" class="q-router-link">{{
        Search
      }}</router-link>
      <router-link :to="{ name: 'member' }" class="q-router-link">{{
        Member
      }}</router-link>
      <router-link :to="{ name: 'teach' }" class="q-router-link">{{
        Teach
      }}</router-link>
      <router-link :to="{ name: 'related' }" class="q-router-link">{{
        Related
      }}</router-link>
      <router-link :to="{ name: 'meeting' }" class="q-router-link">{{
        Meeting
      }}</router-link>
      <!-- end router link -->
      <!-- Carousel -->
      <q-carousel animated v-model="slide" arrows navigation infinite>
        <q-carousel-slide
          :name="1"
          img-src="https://mctbbf.lionfree.net/img/STBY/carousel.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://mctbbf.lionfree.net/img/STBY/carousel.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
      <q-banner class="bg-primary text-white" id="carousel">
        <p class="text-subtitle1">{{ tsvsTitle }}</p>
        <p class="text-subtitle1">{{ tsvssubTitle }}</p>
      </q-banner>
      <!-- Carousel -->
    </q-header>
    <!-- End Header -->
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      // 導航欄位
      About: "About TSVS",
      News: "News",
      Events: "Events",
      Search: "資料查詢",
      Member: "會員專區",
      Teach: "衛教專區",
      Related: "相關網站",
      Meeting: "年會專區",
      // 照片輪播
      slide: 1,
      tsvsTitle: "台灣心血管外科學會",
      tsvssubTitle: "Taiwan Society for Vascular Surgery"
    };
  }
};
</script>