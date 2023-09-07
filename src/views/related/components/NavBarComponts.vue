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
            <h4 id="aboutTitle">相關網站</h4>
            <li><a v-on:click="tabsel = 'home'">{{ relatedteam }}</a></li><hr>
            <li><a v-on:click="tabsel = 'donater'">{{ donater }}</a></li><hr>
            </div>
            <div class="content">
            <div class="tabs-content" v-show="tabsel == 'home'">
                <h4>|&nbsp;{{ relatedteam }}</h4>
                <div class="column" style="height: 400px">
                    <div class="col-4 col-md-6">
                        <div class="relatedteam">
                        <img src="../../../assets/sita-logo-black.png">
                        <p>| 矽塔資訊有限公司</p>
                        </div>
                    </div>
                    
                    <div class="col-4 col-md-6">
                        <div class="relatedteam">
                        <img src="../../../assets/sita-logo-black.png">
                        <p>| 矽塔資訊有限公司</p>
                        </div>
                    </div>

                    <div class="col-4 col-md-6">
                    <div class="relatedteam">
                        <img src="../../../assets/sita-logo-black.png">
                        <p>| 矽塔資訊有限公司</p>
                    </div>
                    </div>

                    <div class="col-4 col-md-6">
                    <div class="relatedteam">
                        <img src="../../../assets/sita-logo-black.png">
                        <p>| 矽塔資訊有限公司</p>
                    </div>
                    </div>
                </div>
                
            </div>
            <div class="tabs-content" v-show="tabsel == 'donater'">
                <h4>|&nbsp;{{ donater }}</h4>
                <div class="column" style="height: 400px">
                    <div class="col-4 col-md-6">
                        <div class="relatedteam">
                        <img src="../../../assets/sita-logo-black.png">
                        <p>| 矽塔資訊有限公司</p>
                        </div>
                    </div>
                    
                    <div class="col-4 col-md-6">
                        <div class="relatedteam">
                        <img src="../../../assets/sita-logo-black.png">
                        <p>| 矽塔資訊有限公司</p>
                        </div>
                    </div>

                    <div class="col-4 col-md-6">
                    <div class="relatedteam">
                        <img src="../../../assets/sita-logo-black.png">
                        <p>| 矽塔資訊有限公司</p>
                    </div>
                    </div>

                    <div class="col-4 col-md-6">
                    <div class="relatedteam">
                        <img src="../../../assets/sita-logo-black.png">
                        <p>| 矽塔資訊有限公司</p>
                    </div>
                    </div>
                </div>
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
        relatedteam: '合作學會機關',
        donater: '贊助廠商'
    };
  }, 
}
</script>