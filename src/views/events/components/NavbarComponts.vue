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
                <h4 id="aboutTitle">Events</h4>
                <li><a v-on:click="tabsel = 'home'">{{ SAE }}</a></li><hr>
                <li><a v-on:click="tabsel = 'WO'">{{ WO }}</a></li><hr>
                <li><a v-on:click="tabsel = 'UMAE'">Upcoming Meetings<br> and Events</a></li><hr>
                <li><a v-on:click="tabsel = 'EH'">{{ EH }}</a></li><hr>
              </div>
              <div class="content">
                <div class="tabs-content" v-show="tabsel == 'home'">
                  <h4>|&nbsp;{{ SAE }}</h4>

                  <div class="tabs-2">
                    <li class="tab-2"><a href="#" v-on:click="tabsel2 = 'home2'">活動訊息登陸</a></li>
                    <li class="tab-2"><a href="#" v-on:click="tabsel2 = 'pointreg'">積分申請</a></li>
                  </div>
                  
                  <div class="tabs-2-content" v-show="tabsel2 == 'home2'">
                    <p>Bank Information for International Wire Transfer</p>
                    <p>Bank Name: Taiwan Cooperative Bank, Chang Gung Branch (006)</p>
                    <p>Bank Address: 5. FU-HSING STREET. KUEI SHAN HSIANG, TAOYUAN HSIEN, TAIWAN, R.O.C.</p>
                    <p>Account Name: Taiwan Society for Vascular Surgery</p>
                    <p>Account number:  3638717000159</p>
                    <p>Swift Code: TACBTWTP543   </p>
                  </div>
                  <div class="tabs-2-content" v-show="tabsel2 == 'pointreg'">>
                    <p>N / A</p>
                  </div>
                </div>
                <div class="tabs-content" v-show="tabsel == 'WO'">
                  <h4>|&nbsp;{{ WO }}</h4>
                  <p>N/A</p>
                </div>
                <div class="tabs-content" v-show="tabsel == 'EH'">
                  <h4>|&nbsp;{{ UMAE }}</h4>
                  <p>N/A</p>
                </div>
                <div class="tabs-content" v-show="tabsel == 'UMAE'">
                  <h4>|&nbsp;{{ EH }}</h4>
                  <p>N/A</p>
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
      tabsel2: "home2",
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
        SAE: 'SUBMIT AN EVENT',
        WO: 'What’s On',
        UMAE: 'Upcoming Meetings and Events',
        EH: 'Events Highlights',
    };
  }
}
</script>