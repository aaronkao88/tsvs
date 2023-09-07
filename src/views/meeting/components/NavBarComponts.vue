<template>    
<q-layout container style="height: 1300px">
    <q-header>
    <q-toolbar>
        <a href="/"><img src="../../../assets/logo.png" width="500" style="padding: 20px"></a>
    </q-toolbar>
    <!-- start router link -->
        <q-router-link class="q-router-link"><a href="/about">{{ About }}</a></q-router-link>
        <q-router-link class="q-router-link"><a href="/news">{{ News }}</a></q-router-link>
        <q-router-link class="q-router-link"><a href="/events">{{ Events }}</a></q-router-link>
        <q-router-link class="q-router-link"><a href="/search">{{ Search }}</a></q-router-link>
        <q-router-link class="q-router-link"><a href="/member">{{ Member }}</a></q-router-link>
        <q-router-link class="q-router-link"><a href="/teach">{{ Teach }}</a></q-router-link>
        <q-router-link class="q-router-link"><a href="/related">{{ Related }}</a></q-router-link>
        <q-router-link class="q-router-link"><a href="/meeting">{{ Meeting }}</a></q-router-link>
    <!-- end router link -->
        <q-banner class="bg-primary text-white" id="carousel">
            <div class="tabs">
            <h4 id="aboutTitle">年會專區</h4>
            <li><a v-on:click="tabsel = 'home'">{{ item }}</a></li><hr>
            <li><a v-on:click="tabsel = 'submit'">{{ submit  }}</a></li><hr>
            <li><a v-on:click="tabsel = 'articlesearch'">{{ articlesearch }}</a></li><hr>
            <li><a v-on:click="tabsel = 'othermeet'">{{ othermeet }}</a></li><hr>
            <li><a v-on:click="tabsel = 'awards'">{{ awards }}</a></li><hr>
            <li><a v-on:click="tabsel = 'gdmamber'">{{ gdmamber }}</a></li><hr>
            </div>
            <div class="content">
            <div class="tabs-content" v-show="tabsel == 'home'">
                <h4>|&nbsp;{{ item }}</h4>
                <h5 style="margin: 0 50px;"><font color="#800000">一○九年度第三十屆第二次會員大會暨第六十九次學術研討會 (TRS 2020)</font></h5>
            </div>
            <div class="tabs-content" v-show="tabsel == 'submit'">
                <h4>|&nbsp;{{ submit }}</h4>
            </div>
            <div class="tabs-content" v-show="tabsel == 'articlesearch'">
                <h4>|&nbsp;{{ articlesearch }}</h4>
            </div>
            <div class="tabs-content" v-show="tabsel == 'othermeet'">
                <h4>|&nbsp;{{ othermeet }}</h4>
            </div>
            <div class="tabs-content" v-show="tabsel == 'awards'">
                <h4>|&nbsp;{{ awards }}</h4>
            </div>
            <div class="tabs-content" v-show="tabsel == 'gdmamber'">
                <h4>|&nbsp;{{ gdmamber }}</h4>
            </div>
        </div>
        </q-banner>
    <!-- Carousel -->
    </q-header>
<!-- End Header -->
</q-layout>
</template>

<script>
export default {
  data () {
    return {
      tabsel: "home",
      // 導航欄位
        About: 'About TSVS',
        News: 'News',
        Events: 'Events',
        Search: '資料查詢',
        Member: '會員專區',
        Teach: '衛教專區',
        Related: '相關網站',
        Meeting: '年會專區',
      // Tab list
        item: '公布事項',
        submit: '線上投稿',
        articlesearch: '投稿查詢',
        othermeet:'歷屆年會',
        awards:'年會頒獎',
        gdmamber:'國際榮譽會員'

    };
  }, 
}
</script>