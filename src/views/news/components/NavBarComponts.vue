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
                <h4 id="aboutTitle">News</h4>
                <li><a href="#" v-on:click="tabsel = 'home'">{{ bulletin }}</a></li><hr>
                <li><a href="#" v-on:click="tabsel = 'activety'">{{ activety }}</a></li><hr>
                <li><a href="#" v-on:click="tabsel = 'moreinfo'">{{ moreinfo }}</a></li><hr>
              </div>
              <div class="content">
                <div class="tabs-content" v-show="tabsel == 'home'">
                  <h4>|&nbsp;{{ bulletin }}</h4>

                  <div class="tabs-2">
                    <li class="tab-2"><a href="#" v-on:click="tabsel2 = 'home2'">2019/12/7</a></li>
                    <li class="tab-2"><a href="#" v-on:click="tabsel2 = '20190902'">2019/9/2</a></li>
                    <li class="tab-2"><a href="#" v-on:click="tabsel2 = '20190901'">2019/9/1</a></li>
                  </div>
                  
                  <div class="tabs-2-content" v-show="tabsel2 == 'home2'">
                    <p>第八屆理監事暨學會幹部名單</p><br>
                    <p>甘宗旦 理事長          李芳艷 副理事長          陳益祥 副理事長          吳毅暉 常務理事          魏崢 常務理事          柯博仁 常務理事          張睿智 常務理事</p><br>
                    <p>李國楨 理事              林致源 理事                 張兼華 理事                 陳沂名 理事                  陳映澄 理事             陳哲伸 理事                 黃耀廣 理事</p><br>
                    <p>詹志洋 理事              劉國聖 理事                 蔡宜廷 理事                 鄭伯智 理事                  謝世榮 理事             顏旭霆 理事                 李中毅 理事</p><br>
                    <p>張忠毅 常務監事       李秋陽 監事                 林暉翰 監事                 許傳智 監事                  陳柏霖 監事             蔡忠霖 監事                 羅健洺 監事</p><br>
                    <p>許喬博 秘書長          劉國聖 副秘書長          黃建偉 副秘書長          曾政哲 財務長</p>
                  </div>

                  <div class="tabs-2-content" v-show="tabsel2 == '20190902'">
                    <p>2019 血管外科專科醫師甄試 通過名單</p><br>
                    <p>(依會員編號順序排列)</p><br>
                    <p>S00622 吳欣岱 屏東醫院     S00638 林俊閔 台北馬偕     S00642 張瑞宗 三軍總醫院     S00643 林敬惟 三軍總醫院     S00650 陳迪詠 成大醫院</p>
                    <p>S00654 陳泰位 台北榮總     S00660 陳嘉葦 台北榮總     S00665 陳宇恒 台北馬偕         S00669 黃俊銘 安南醫院        S00673 吳崇丞 林口長庚</p>
                    <p>S00677 蘇以理 林口長庚     S00686 孟繁傑 台北榮總     S00689 文豪   成大醫院</p><br>
                    <p>◎會員編號自動由Ａ→Ｓ</p><br>
                    <p>◎請9/5(四)前劃撥繳交專科醫師考試證書費：3000元 / 郵局劃撥帳號:  19944001   台灣血管外科學會 / 劃撥單上請註明(姓名/專科證書費)</p><br>
                    <p>◎收據上傳：email收據圖檔至4tsvs@tsvs.org，方完成繳費程序</p><br>
                    <p>◎專科醫師證書將於2019/9/7(六) 11:40 會員大會頒發 (因事無法出席, 請由專人代領)</p>
                  </div>

                  <div class="tabs-2-content" v-show="tabsel2 == '20190901'">
                    <p>血管外科健保申報共識</p><br>
                    <p>檔案載點 (需登入)</p>
                  </div>
                </div>

                <div class="tabs-content" v-show="tabsel == 'activety'">
                  <h4>|&nbsp;{{ activety }}</h4>

                  <div class="tabs-2">
                    <li><a href="#" v-on:click="tabselActive = 'home3'">2019/10/18</a></li>
                    <li><a href="#" v-on:click="tabselActive = 'date1'">2019/10/18</a></li>
                  </div>

                  <div class="tabs-2-content" v-show="tabselActive == 'home3'">
                    <p>TSVS課程 2020/6/3-5@花蓮慈濟 Aorta & Peripheral Artery Cadaver Workshop</p>
                    <br>
                    <p class="small">2020/6/3-5@花蓮慈濟 Aorta & Peripheral Artery Cadaver Workshop</p>
                  </div>

                  <div class="tabs-2-content" v-show="tabselActive == 'date1'">
                    <p>TSVS活動 11/9(六)下午3點_北區困難病例討論會@維多麗雅酒店3F, 歡迎報名參加</p><br>
                    <p>報名連結：<a href="https://forms.gle/fNwyAp4Zpfb7gc7R7" target="_blank">https://forms.gle/fNwyAp4Zpfb7gc7R7</a></p><br>
                    <p>主題：北區困難病例討論會</p><br>
                    <p>時間：2019/11/9 (六) 15:00-21:00</p><br>
                    <p>地點：維多麗亞酒店 3F天璽廳</p><br>
                    <p>地址：台北市中山區敬業四路168號 (捷運文湖線: 劍南路站)</p>
                    <p>議程將後續公告…</p>
                  </div>
                </div>
                <div class="tabs-content" v-show="tabsel == 'moreinfo'">
                  <h4>|&nbsp;{{ moreinfo }}</h4>
                  <p>Hybrid Endovascular Approach for Aberrant Subclavian Arterial Aneurysm</p><br>
                  <p>檔案載點</p><br>
                  <p>A 10-year Experience Using a Hybrid Endovascular Approach to Treat Aberrant Subclavian Arterial Aneurysms[1]</p>
                  <p>Mathew Wooster et al., Ann Vasc Surg 2018; 46: 60–64</p>
                  <p>花蓮慈濟 鄭伊佐醫師整理</p>
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
      tabselActive: "home3",
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
        bulletin: '秘書處公告',
        activety: '活動通知',
        moreinfo: '醫學新知',
    };
  }
}
</script>

<style scoped>

</style>