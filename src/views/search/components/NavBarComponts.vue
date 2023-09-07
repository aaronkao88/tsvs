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
                <h4 id="aboutTitle">資料查詢</h4>
                <li><a v-on:click="tabsel = 'home'">Guidelines and<br>Reporting Standards</a></li><hr>
                <li><a v-on:click="tabsel = 'movie'">{{ movie }}</a></li><hr>
                <li><a v-on:click="tabsel = 'trainning'">{{ training }}</a></li><hr>
                <li><a v-on:click="tabsel = 'mhl'">{{ mhl }}</a></li><hr>
                <li><a v-on:click="tabsel = 'download'">{{ download }}</a></li><hr>
                <li><a v-on:click="tabsel = 'infomation'">{{ infomation }}</a></li><hr>
              </div>
              <div class="content">
                <div class="tabs-content" v-show="tabsel == 'home'">
                  <h4>|&nbsp;{{ gars }}</h4>

                  <div class="tabs-2">
                    <li class="tab-2"><a href="#" v-on:click="tabsel2 = 'home2'">Guidelines</a></li>
                    <li class="tab-2"><a href="#" v-on:click="tabsel2 = 'Reporting Standards'">Reporting Standards</a></li>
                  </div>
                  
                  <div class="tabs-2-content" v-show="tabsel2 == 'home2'">
                    <p>Bank Information for International Wire Transfer</p>
                    <p>Bank Name: Taiwan Cooperative Bank, Chang Gung Branch (006)</p>
                    <p>Bank Address: 5. FU-HSING STREET. KUEI SHAN HSIANG, TAOYUAN HSIEN, TAIWAN, R.O.C.</p>
                    <p>Account Name: Taiwan Society for Vascular Surgery</p>
                    <p>Account number:  3638717000159</p>
                    <p>Swift Code: TACBTWTP543   </p>
                  </div>
                  <div class="tabs-2-content" v-show="tabsel2 == 'Reporting Standards'">>
                    <p>Reporting standards of the Society for Vascular Surgery for thoracic outlet syndrome</p>
                    <br>
                    <p>J Vasc Surg. 2016 Sep;64(3):e23–e35.</p>
                  </div>
                </div>
                <div class="tabs-content" v-show="tabsel == 'movie'">
                  <h4>|&nbsp;{{ movie }}</h4>

                  <div class="tabs-2">
                    <li class="tab-2"><a href="#" v-on:click="tabsel2 = 'home2'">2019/9/7-8</a></li>
                    <li class="tab-2"><a href="#" v-on:click="tabsel2 = 'movie'">2019/7/5-6</a></li>
                  </div>
                  
                  <div class="tabs-2-content" v-show="tabsel2 == 'home2'">
                    <p>2019年會 / 議程 (需登入即可觀看)</p>
                    <div class="moviecontent">
                    </div>
                  </div>
                  <div class="tabs-2-content" v-show="tabsel2 == 'movie'">
                    <p>2019年會 / 議程 (需登入即可觀看)</p>
                    <div class="moviecontent">
                    </div>  
                  </div>
                </div>
                <div class="tabs-content" v-show="tabsel == 'trainning'">
                  <h4>|&nbsp;{{ training }}</h4>
                  <p>108年度血管外科專科醫師訓練醫院認定合格醫院名單</p><br>
                  <p>2019/03/15理監事會議新增彰化基督教醫院, 共計29間醫院 / 102年度起，專科醫師甄試若所屬醫院不在訓練醫院合格名單，則不具備考試資格</p><br>
                  <p>三軍總醫院     大林慈濟醫院     中山醫學大學附設醫院     台大醫院     台大新竹醫院     台中慈濟醫院     台中榮民總醫院     台北市立聯合醫院仁愛院區</p><br>
                  <p>台北慈濟醫院 台北榮民總醫院  台北醫學大學附設醫院     成大醫院     亞東醫院            林口長庚醫院     花蓮慈濟醫院         振興醫院</p><br>
                  <p>馬偕醫院        高雄長庚醫院     高雄榮民總醫院                高雄醫學大學附設中和醫院   國軍高雄總醫院  基隆長庚醫院        童綜合醫院</p><br>
                  <p>新光醫院        萬芳醫院             嘉義長庚醫院                   嘉義基督教醫院                     彰化基督教醫院(108年新增認定)      雙和醫院</p><br>
                  <p>————————————————————————————————————</p><br>
                  <p>彰化秀傳紀念醫院(107年度無專科指導醫師取消訓練醫院資格)</p><br>
                  <p>臺中醫院 (103年新增認定)(107年度無專科指導醫師取消訓練醫院資格)</p>
                </div>
                <div class="tabs-content" v-show="tabsel == 'mhl'">
                  <h4>|&nbsp;{{ mhl }}</h4>
                  <p>健保血管特材給付規定(適應症/分類碼)</p><br>
                  <p>分類碼    品名表</p>
                  <p>A220-1   頸動脈支架 CAROTID STENT</p>
                  <p>A220-2   腸骨動脈血管支架</p>
                  <p>A220-3   腹主動脈瘤支架</p>
                  <p>A220-4   淺股動脈血管支架</p>
                  <p>A220-5   血管治療導管(下肢)</p>
                  <p>A220-6   胸主動脈支架系統</p>
                  <p>A220-7   藥物釋放型冠狀動脈氣球導管</p>
                  <p>A220-8   腎動脈血管支架系統之給付規定</p>
                  <p>A220-9   周邊血管支架(含人工血管)之給付規定</p>
                  <p>A220-10 開窗型客製化腹主動脈瘤支架</p>
                  <p>A220-11 周邊動脈血管支架及傳輸裝置(球擴式覆膜支架)</p>
                  <p>A216-8   高壓注射式 PORT-A NEEDLE</p>
                  <p>B301-4   血栓濾過導引線系統</p>
                  <p>B301-5   周邊動脈血栓移除系統組</p>
                </div>
                <div class="tabs-content" v-show="tabsel == 'download'">
                  <h4>|&nbsp;{{ download }}</h4>
                  <p>手術例數申報表</p><br>
                  <p><font color="#800000">點此下載 : Excel_手術例數申報表</font></p><br>
                  <p>手術例數申報表_使用介紹</p><br>
                  <p><font color="#800000">點此下載 : PDF_手術例數申報表 使用介紹</font></p>
                </div>
                <div class="tabs-content" v-show="tabsel == 'infomation'">
                  <h4>|&nbsp;{{ infomation }}</h4>
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
        gars: 'Guidelines and Reporting Standards',
        movie: '影片紀錄',
        training: '訓練醫院',
        mhl: '衛福部',
        download:'資料下載',
        infomation:'學術教育訓練'

    };
  }, 
}
</script>