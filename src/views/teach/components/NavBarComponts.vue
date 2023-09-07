<template>
<q-layout container style="height: 1300px">
    <q-header>
    <q-toolbar>
        <a href="/"><img src="@/assets/logo.png" width="500" style="padding: 20px"></a>
    </q-toolbar>
    <!-- start router link -->
        <q-router-link class="q-router-link"><a href="/About">{{ About }}</a></q-router-link>
        <q-router-link class="q-router-link"><a href="/News">{{ News }}</a></q-router-link>
        <q-router-link class="q-router-link"><a href="/Events">{{ Events }}</a></q-router-link>
        <q-router-link class="q-router-link"><a href="/Search">{{ Search }}</a></q-router-link>
        <q-router-link class="q-router-link"><a href="/Member">{{ Member }}</a></q-router-link>
        <q-router-link class="q-router-link"><a href="/Teach">{{ Teach }}</a></q-router-link>
        <q-router-link class="q-router-link"><a href="/Related">{{ Related }}</a></q-router-link>
        <q-router-link class="q-router-link"><a href="/Meeting">{{ Meeting }}</a></q-router-link>
    <!-- end router link -->
        <q-banner class="bg-primary text-white" id="carousel">
            <div class="tabs">
            <h4 id="aboutTitle">衛教專區</h4>
            <li><a v-on:click="tabsel = 'home'">{{ find }}</a></li><hr>
            <li><a v-on:click="tabsel = 'surgeryinfo'">{{ surgeryinfo }}</a></li><hr>
            </div>
            <div class="content">
            <div class="tabs-content" v-show="tabsel == 'home'">
                <h4>|&nbsp;{{ find }}</h4>
                <p>縣市<input type="text" id="city" name="city">
                   區/鄉鎮<input type="text" id="town" name="town">
                   醫院<input type="text" id="hospital" name="hospital">
                </p><br>
                <p>醫院個人介紹連結
                  <input type="text" id="personUrl" name="personUrl" style="width: 30%;">
                </p><br>
                <p>查詢姓名  <input type="text" id="searchName" name="searchName" style="width: 36%;">
                  <a href="#" class="btn-submit">查詢</a>
                </p><br>
                <hr width="30%" style="margin: 0 30px"><br>
                <p>查詢結果:陳仁亮 主治醫師謙主任 現任 血液腫瘤科主治醫師</p>
                <p>陳仁亮 主治醫師謙主任 現任 血液腫瘤科主治醫師</p>
                <p>陳仁亮 主治醫師謙主任 現任 血液腫瘤科主治醫師</p>
            </div>
            <div class="tabs-content" v-show="tabsel == 'surgeryinfo'">
                <h4>|&nbsp;{{ surgeryinfo }}</h4>
                <p>胸、腹主動脈瘤微創治療新趨勢-支架血管治療主動脈瘤-</p><br>
                <p>https://www.tsvs.org/teach_detail.php?id=8</p><br>
                <p>血管支架簡介-1</p><br>
                <p>https://www.tsvs.org/teach_detail.php?id=12</p>
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
        find: '尋找醫師',
        surgeryinfo: '血管手術資訊'
    };
  }, 
}
</script>