<template>
<q-layout container style="height: 1400px">
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
            <h4 id="aboutTitle">會員專區</h4>
            <li><a v-on:click="tabsel = 'home'">{{ join }}</a></li><hr>
            <li><a v-on:click="tabsel = 'login'">會員登入</a></li><hr>
            </div>
            <div class="content">
            <div class="tabs-content" v-show="tabsel == 'home'">
                <h4>|&nbsp;{{ join }}</h4>

                <div class="tabs-2">
                <li class="tab-2"><a href="#" v-on:click="tabsel2 = 'home2'">入會須知</a></li>
                <li class="tab-2"><a href="#" v-on:click="tabsel2 = 'joinus'">會員入會</a></li>
                <li class="tab-2"><a href="#" v-on:click="tabsel2 = 'reqjoin'">申請入會</a></li>
                </div>
                
                <div class="tabs-2-content" v-show="tabsel2 == 'home2'">
                <p>本會會員分類及入會方式如下：</p><br>
                <p>一、一般會員：</p><br>
                &nbsp;&nbsp;<p>1.   對血管外科有興趣者，經本會理事會通過並繳納會費者，得為本會一般會員。</p>
                &nbsp;&nbsp;<p>2.   欲入會者請填妥入會申請表，或線上申請入會，本會將透過電子郵件通知審核結果及繳費訊息。</p>
                &nbsp;&nbsp;<p>3.   一般會員入會費為1,500元，年費為500元。</p><br>
                <p>二、專科醫師會員：</p>
                &nbsp;&nbsp;<p> 1.  凡在國內、外醫學院系以上畢業，具外科專科醫師資格，且具本會一般會員資格至少一年以上，以及積分達100分以上者，可申請為專科醫師會員。</p>
                &nbsp;&nbsp;<p>2.  欲申請為專科醫師之會員，請填妥專科醫師甄審申請表，或線上申請專科醫師資格。</p>
                &nbsp;&nbsp;<p>3. 自2011年開始，本會開始實施次專科醫師甄試，會員除符合上述條件外，需通過本會之考試，方可取得專科醫師資格。</p>
                &nbsp;&nbsp;<p>4. 專科醫師每六年需換證。</p>
                &nbsp;&nbsp;<p>5. 專科醫師甄審審查費為1,500元，年費2,000元，證書費3,000元，換證費500元。</p><br>
                <p>三、贊助會員：凡對本會在經濟或其他方面有實際贊助者，經本會理事會通過者，得聘請為二年期贊助會員。</p><br>
                <p>四、榮譽會員：凡對本會有特殊貢獻，經本會理事會通過者，得聘請為榮譽會員。</p><br>
                <p>郵政劃撥帳號：19944001</p>
                <p>戶名：台灣血管外科學會</p>
                </div>
                <div class="tabs-2-content" v-show="tabsel2 == 'joinus'">
                <p>本會會員分類及入會方式如下：</p><br>
                <p>一、一般會員：</p><br>
                &nbsp;&nbsp;<p>1.   對血管外科有興趣者，經本會理事會通過並繳納會費者，得為本會一般會員。</p>
                &nbsp;&nbsp;<p>2.   欲入會者請填妥入會申請表，或線上申請入會，本會將透過電子郵件通知審核結果及繳費訊息。</p>
                &nbsp;&nbsp;<p>3.   一般會員入會費為1,500元，年費為500元。</p><br>
                <p>二、專科醫師會員：</p>
                &nbsp;&nbsp;<p> 1.  凡在國內、外醫學院系以上畢業，具外科專科醫師資格，且具本會一般會員資格至少一年以上，以及積分達100分以上者，可申請為專科醫師會員。</p>
                &nbsp;&nbsp;<p>2.  欲申請為專科醫師之會員，請填妥專科醫師甄審申請表，或線上申請專科醫師資格。</p>
                &nbsp;&nbsp;<p>3. 自2011年開始，本會開始實施次專科醫師甄試，會員除符合上述條件外，需通過本會之考試，方可取得專科醫師資格。</p>
                &nbsp;&nbsp;<p>4. 專科醫師每六年需換證。</p>
                &nbsp;&nbsp;<p>5. 專科醫師甄審審查費為1,500元，年費2,000元，證書費3,000元，換證費500元。</p><br>
                <p>三、贊助會員：凡對本會在經濟或其他方面有實際贊助者，經本會理事會通過者，得聘請為二年期贊助會員。</p><br>
                <p>四、榮譽會員：凡對本會有特殊貢獻，經本會理事會通過者，得聘請為榮譽會員。</p><br>
                <p>郵政劃撥帳號：19944001</p>
                <p>戶名：台灣血管外科學會</p>
                </div>
                <div class="tabs-2-content" v-show="tabsel2 == 'reqjoin'">
                <div class="tabs-2">
                    <li class="tab-2-step"><a href="#" v-on:click="tabselStep = 'step'">STEP 1</a></li>
                    <li class="tab-2-step"><a href="#" v-on:click="tabselStep = 'step2'">STEP 2</a></li>
                    <li class="tab-2-step"><a href="#" v-on:click="tabselStep = 'step3'">STEP 3</a></li>
                </div>
                    
                <!-- 步驟一 -->
                <div class="step" v-show="tabselStep == 'step'">
                    <p>
                    請選擇欲申請會員別
                    <a href="#" class="btn" v-on:click="tabselSpChange = 'friend'">學會之友</a>
                    <a href="#" class="btn" v-on:click="tabselSpChange = 'member'">正式會員</a>
                    </P>
                </div>

                <!-- 步驟二 -->
                <div class="step" v-show="tabselStep == 'step2'">
                    <!-- 學會之友 -->
                    <div class="friend" v-show="tabselSpChange == 'friend'">
                    <p>填寫資料 / 學會之友申請</p>
                    <p>申請類別
                        <a href="#" class="btn-select" id="person">個人申請</a>
                        <a href="#" class="btn-select" id="team">學會/公司/團體</a>
                    </P>
                    <p>申請日期<input type="date" id="regdate" name="regdate" style="width: 30%;"></p>
                    <p>姓名(中文)<input type="text" id="regname" name="regname">
                    姓名(英文)<input type="text" id="regEngname" name="regEngname">
                    性別
                    </p>
                    <p>出生年月日  
                       年<input type="number" id="years" name="years">
                       月<input type="number" id="month" name="month">
                       日<input type="number" id="date" name="date">
                    </p>
                    <p>身分證字號 國民身份證 / 外僑統一證號
                     <input type="text" id="idnumber" name="idnumber" style="width: 40%;">
                    </p>
                    <p>戶籍地址
                      <input type="text" id="address" name="address" style="width: 58.5%;">
                    </p>
                    <p>通訊地址
                    <input type="text" id="address" name="address" style="width: 58.5%;">
                    </p>
                    <p>公司電話
                       <input type="text" id="number" name="number">
                       行動電話
                       <input type="text" id="number" name="number">
                    </p>
                    <p>電子信箱
                        <input type="text" id="email" name="email" style="width: 50%;">
                    </p>
                    <p>現職服務醫院 縣/市 區/鄉鎮 醫院
                        <input type="text" id="yourJob" name="yourJob">
                    </p>
                    <p>科別<input type="text" id="yourJob" name="yourJob">
                      現任職務<input type="text" id="yourJob" name="yourJob">
                      學歷<input type="text" id="yourJob" name="yourJob">
                    </P>
                    <p>醫院個人介紹連結
                       <input type="text" id="yourJob" name="yourJob" style="width: 50%;">
                    </p>
                    <span id="join-error">＊提交失敗，資料檢核有誤，請重新輸入。</span>
                    <a href="#" class="btn-submit">提交</a>
                    </div>
                    <!-- 正式會員申請 -->
                    <div class="member" v-show="tabselSpChange == 'member'">
                    <p>123123123123</p> 
                    </div>
                </div>

                <!-- 步驟三 -->
                <div class="step" v-show="tabselStep == 'step3'">
                    <p>您已完成申請程序，請耐心等待審核，謝謝您。</p>
                </div>


                </div>
            </div>
            
            <div class="tabs-content" v-show="tabsel == 'login'">
                <h4>|&nbsp;{{ login }}</h4>
                <p>帳號：<input type="text" id="username" name="username"></p><br>
                <p>密碼：<input type="password" id="password" name="password"></p><br>
                <p>驗證碼:</p>
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
      tabselStep: "step",
      tabselSpChange:"friend",
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
        join: '會員入會',
        login: '會員登入｜Login',
    };
  }, 
    
}
</script>