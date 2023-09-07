<template>
  <q-layout container style="height: 1300px">
    <q-header>
      <q-toolbar>
        <a href="/"
          ><img src="../../../assets/logo.png" width="500" style="padding: 20px"
        /></a>
      </q-toolbar>
      <!-- start router link -->
      <q-router-link class="q-router-link"
        ><a href="/about">{{ About }}</a></q-router-link
      >
      <q-router-link class="q-router-link"
        ><a href="/news">{{ News }}</a></q-router-link
      >
      <q-router-link class="q-router-link"
        ><a href="/events">{{ Events }}</a></q-router-link
      >
      <q-router-link class="q-router-link"
        ><a href="/search">{{ Search }}</a></q-router-link
      >
      <q-router-link class="q-router-link"
        ><a href="/member">{{ Member }}</a></q-router-link
      >
      <q-router-link class="q-router-link"
        ><a href="/teach">{{ Teach }}</a></q-router-link
      >
      <q-router-link class="q-router-link"
        ><a href="/related">{{ Related }}</a></q-router-link
      >
      <q-router-link class="q-router-link"
        ><a href="/meeting">{{ Meeting }}</a></q-router-link
      >
      <!-- end router link -->
      <q-banner class="bg-primary text-white" id="carousel">
        <div class="tabs">
          <h4 id="aboutTitle">About&nbsp;TSVS</h4>
          <li>
            <a href="#" v-on:click="tabsel = 'home'">{{ contactInfo }}</a>
          </li>
          <hr />
          <li>
            <a href="#" v-on:click="tabsel = 'bankInfo'">{{ bankInfo }}</a>
          </li>
          <hr />
          <li>
            <a href="#" v-on:click="tabsel = 'aboutTsvs'">{{ aboutTsvs }}</a>
          </li>
          <hr />
          <li>
            <a href="#" v-on:click="tabsel = 'mission'">{{ mission }}</a>
          </li>
          <hr />
          <li>
            <a href="#" v-on:click="tabsel = 'decree'">{{ decree }}</a>
          </li>
          <hr />
          <li>
            <a href="#" v-on:click="tabsel = 'team'">{{ team }}</a>
          </li>
          <hr />
          <li>
            <a href="#" v-on:click="tabsel = 'meetrc'">{{ meetrc }}</a>
          </li>
        </div>
        <div class="content">
          <div class="tabs-content" v-show="tabsel == 'home'">
            <h4>|&nbsp;{{ contactInfo }}</h4>
            <p>台內社字第0940037888號</p>
            <br />
            <p>秘書 Secretary</p>
            <p>許心慈 Hsin-Tzu Hsu</p>
            <br />
            <p>ADD：111 台北市士林區文昌路95號 新光B3心臟外科辦公室</p>
            <p>95 Wen Chang Rd, Shih Lin District, Taipei, TAIWAN 11101</p>
            <p>TEL: +886-2-28332211#2083</p>
            <p>CEL: +886-966-877552</p>
            <p>OFFICE HOUR: 9AM-5PM</p>
            <p>Email: 4tsvs@tsvs.org</p>
          </div>
          <div class="tabs-content" v-show="tabsel == 'bankInfo'">
            <h4>|&nbsp;{{ bankInfo }}</h4>
            <p>抬頭：台灣血管外科學會</p>
            <p>統編：48682216</p>
            <br />
            <p>中華郵政劃撥</p>
            <br />
            <p>帳號：19944001</p>
            <p>戶名：台灣血管外科學會</p>
            <br />
            <p>銀行電滙</p>
            <p>合作金庫代號：006</p>
            <p>立帳銀行：長庚分行</p>
            <p>帳號：3638-717-000159</p>
            <p>戶名：台灣血管外科學會</p>
            <br />
            <p>Bank Information for International Wire Transfer</p>
            <p>Bank Name: Taiwan Cooperative Bank, Chang Gung Branch (006)</p>
            <p>
              Bank Address: 5. FU-HSING STREET. KUEI SHAN HSIANG, TAOYUAN HSIEN,
              TAIWAN, R.O.C.
            </p>
            <p>Account Name: Taiwan Society for Vascular Surgery</p>
            <p>Account number: 3638717000159</p>
            <p>Swift Code: TACBTWTP543</p>
          </div>
          <div class="tabs-content" v-show="tabsel == 'aboutTsvs'">
            <h4>|&nbsp;{{ aboutTsvs }}</h4>
            <p>
              台灣血管外科學會Taiwan Society for Vascular
              Surgery，簡稱TSVS。成立於 2005年，目前共有活動
            </p>
            <p>
              會員 438 人 (其中有效之血管外科專科醫師 326 人，計算至
              2019/11/15)。以聯絡國內外人士共同發
            </p>
            <p>
              揚血管外科醫學之研究、教學、及應用，增進全民健康及國際學術交流為宗旨。
            </p>
          </div>
          <div class="tabs-content" v-show="tabsel == 'mission'">
            <h4>|&nbsp;{{ mission }}</h4>
            <p>
              1.
              促進、鼓勵及改善所有血管疾病健康知識的傳遞，並教育所有大眾血管疾病的保健及照顧。
            </p>
            <p>2. 提供血管外科醫師對於新的手術技術以及知識的教育。</p>
            <p>3. 做為所有會員在血管外科所有領域，包括血管內手術的支持組織。</p>
            <p>4. 促進改善血管疾病病人的診斷及治療。</p>
            <p>
              5.
              清楚的定位出外科手術、血管內手術、以及藥物治療對於血管疾病的治療與預防。
            </p>
            <p>6. 鼓勵血管疾病的臨床及基礎研究。</p>
            <p>
              7.
              鼓勵對於血管疾病診斷及治療上新技術的發展及執行，並協助建立血管診察室。
            </p>
            <p>
              8.
              審議有關血管疾病命名及標準，並協助政府與民間制定血管疾病之政策及方案。
            </p>
            <p>9. 規範血管外科有關的社會倫理及法律事項。</p>
            <p>10. 提供對血管外科有興趣的外科醫師專門的訓練。</p>
            <p>11. 舉辦學術演講及討論。</p>
            <p>12. 編輯會訊及有關書刊。</p>
            <p>
              13.
              甄審血管外科醫師、血管外科專科指導醫師,以及評鑑培訓血管外科醫師教學醫院，並有頒發證書之資格。
            </p>
            <p>14. 獎助血管外科人才及舉辦其他有關事宜。</p>
          </div>
          <div class="tabs-content" v-show="tabsel == 'decree'">
            <h4>|&nbsp;{{ decree }}</h4>
          </div>
          <div class="tabs-content" v-show="tabsel == 'team'">
            <h4>|&nbsp;{{ team }}</h4>
            <p>理監事</p>
            <br />
            <p>第八屆理監事暨學會幹部名單</p>
            <p>
              甘宗旦 理事長 李芳艷 副理事長 陳益祥 副理事長 吳毅暉 常務理事 魏崢
              常務理事 柯博仁 常務理事 張睿智 常務理事 李國楨 理事
            </p>
            <p>
              林致源 理事 張兼華 理事 陳沂名 理事 陳映澄 理事 陳哲伸 理事 黃耀廣
              理事 詹志洋 理事 劉國聖 理事
            </p>
            <p>
              蔡宜廷 理事 鄭伯智 理事 謝世榮 理事 顏旭霆 理事 李中毅 理事 張忠毅
              常務監事 李秋陽 監事 林暉翰 監事
            </p>
            <p>
              許傳智 監事 陳柏霖 監事 蔡忠霖 監事 羅健洺 監事 許喬博 秘書長
              劉國聖 副秘書長
            </p>
            <p>黃建偉 副秘書長 曾政哲 財務長</p>
            <p>歷屆名單 / 第七屆</p>
            <p>
              林佳勳 理事長 李芳艷 副理事長 柯博仁 副理事長 林致源 常務理事
              許喬博 常務理事 陳沂名 常務理事 魏崢 常務理事 李國楨 理事
            </p>
            <p>
              吳毅暉 理事 李中毅 理事 康沛倫 理事 黃耀廣 理事 詹志洋 理事 劉國聖
              理事 陳偉華 理事 陳益祥 理事
            </p>
            <p>
              謝世榮 理事 蔡宜廷 理事 謝炯昭 理事 顏旭霆 理事 鄭伯智 理事 張忠毅
              常務監事 李秋陽 監事 林暉翰 監事
            </p>
            <p>
              許傳智 監事 陳柏霖 監事 蔡忠霖 監事 羅健洺 監事 甘宗旦 秘書長
              陳映澄 副秘書長 張兼華 副秘書長 陳彥仰 財務長
            </p>
            <br /><br />
            <p>委員會</p>
            <br /><br />
            <p>第八屆委員會名單</p>
            <br />
            <p>
              臨床委員會 主委 蔡宜廷 副主委 李國楨 委員 顏旭霆 溫日昇 謝炯昭
              林宜璋 蔡孝恩
            </p>
            <p>
              學術委員會 主委 陳沂名 副主委 張睿智 委員 陳懷民 吳毅暉 蔡忠霖
              蘇大維 蔡宜廷 孫珅 謝世榮
            </p>
            <p>
              教育委員會 主委 陳映澄 副主委 陳哲伸 委員 李明禮 吳南鈞 劉殷佐
              謝福謙
            </p>
            <p>研究委員會 主委 林致源 副主委 劉國聖 委員 阮俊能 許俊傑</p>
            <p>
              編輯委員會 主委 張兼華 副主委 陳柏霖 委員 林寶彥 陳泰位 蘇大維
              張得一 黃世銘 楊智鈞
            </p>
            <p>
              國際及公共事務委員會 主委 吳毅暉 副主委 蔡忠霖 委員 袁明琦 柯博仁
              陳偉華 陳沂名 蔡孝恩
            </p>
            <p>甄審委員會 主委 詹志洋 副主委 許傳智 委員 康沛倫</p>
            <br />
            <p>歷屆名單 / 第七屆</p>
            <br />
            <p>
              臨床委員會 主委 蔡宜廷 副主委 姜智耀 委員 李中毅 溫日昇 賴金湖
              陳哲伸 楊翔宇
            </p>
            <p>
              學術委員會 主委 許喬博 副主委 吳毅暉 委員 謝炯昭 孫珅 黃竣暘
              袁于婷
            </p>
            <p>
              編輯委員會 主委 張睿智 副主委 賴韋良 委員 李宗龍 陳柏霖 翁世憲
              鄭伊佐 黃振銘
            </p>
            <p>
              教育委員會 主委 陳沂名 副主委 蔡宜廷 委員 賴韋良 張睿智 陳柏霖
            </p>
            <p>
              研究委員會 主委 林致源 副主委 許俊傑 委員 柯宏彥 陳紹緯 賴昭翰
            </p>
            <p>
              公共事務委員會 主委 劉國聖 副主委 黃耀廣 委員 蔡宗霖 李秋陽 蘇大維
            </p>
          </div>
          <div class="tabs-content" v-show="tabsel == 'meetrc'">
            <h4>|&nbsp;{{ meetrc }}</h4>
            <p>2019/10/15 / 第八屆第一次理監事會議紀錄</p>
            <br />
            <p>2019/9/11 / 第八屆第一次會員大會紀錄</p>
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
  data() {
    return {
      tabsel: "home",
      // 導航欄位
      About: "About TSVS",
      News: "News",
      Events: "Events",
      Search: "資料查詢",
      Member: "會員專區",
      Teach: "衛教專區",
      Related: "相關網站",
      Meeting: "年會專區",
      // Tab list
      contactInfo: "聯絡資訊",
      bankInfo: "帳號資訊",
      aboutTsvs: "學會簡介",
      mission: "主要任務",
      decree: "章程法令規章",
      team: "組織名單",
      meetrc: "會議記錄"
    };
  }
};
</script>