<template>
  <!-- 行事曆 & 活動消息 -->
  <div class="row">
    <div class="col-5">
      <div class="column calendar-boder">
        <div class="col header q-mr-xl q-my-xl q-ml-auto text-white">
          <span id="calendar">行事曆</span>
        </div>
        <div class="col content row justify-end items-center">
          <q-date
            class="no-shadow transparent q-ma-xl"
            v-model="date"
            text-color="white"
            minimal
          />
        </div>
        <div class="col footer row justify-end q-ma-xl">
          <a href="#" class="text-white">more >></a>
        </div>
      </div>
    </div>
    <!-- 行事曆 -->
    <div class="col-7">
      <div class="column activerty-boder">
        <div class="col header q-ml-xl q-my-xl text-white">
          <span>活動消息</span>
        </div>
        <div class="col content">
          <div class="event-item row justify-center items-center text-white">
            <div class="col-2">
              <div class="ymmd q-mx-auto">
                <p class="date text-center">3-6</p>
                <span class="month">Jun.</span>
                <span class="years">2020</span>
              </div>
            </div>
            <div class="text col-8">
              <p class="title">TSVS課程</p>
              <p class="subtext">
                2020/6/3-5@花蓮慈濟 Aorta & Peripheral Artery Cadaver Workshop
              </p>
            </div>
          </div>
          <div class="event-item row justify-center items-center text-white">
            <div class="col-2">
              <div class="ymmd q-mx-auto">
                <p class="date text-center">6</p>
                <span class="month">Jun.</span>
                <span class="years">2020</span>
              </div>
            </div>
            <div class="text col-8">
              <p class="title">TSVS課程</p>
              <p class="subtext">
                2020/6/3-5@花蓮慈濟 Aorta & Peripheral Artery Cadaver Workshop
              </p>
            </div>
          </div>
          <div class="event-item row justify-center items-center text-white">
            <div class="col-2">
              <div class="ymmd q-mx-auto">
                <p class="date text-center">7-9</p>
                <span class="month">Jun.</span>
                <span class="years">2020</span>
              </div>
            </div>
            <div class="text col-8">
              <p class="title">TSVS課程</p>
              <p class="subtext">
                2020/6/3-5@花蓮慈濟 Aorta & Peripheral Artery Cadaver Workshop
              </p>
            </div>
          </div>
        </div>
        <div class="col footer row justify-end q-ma-xl">
          <a href="#" class="text-white">more >></a>
        </div>
      </div>
    </div>
    <!-- 結束-行事曆 & 活動消息 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "2019/02/01"
    };
  }
};
</script>

<style lang="scss" scope>
.header {
  max-height: 50px;

  span {
    padding-bottom: 20px;

    font-size: 34px;
    border-bottom: 1px white solid;
  }
}

.footer a {
  text-decoration: none;
}

.calendar-boder {
  height: 100%;
  background-color: #b8c0d9;

  .content {
    min-height: 400px;

    background-color: #a4aecc;
    .q-date__view {
      height: 300px;
    }
    .q-date__content {
      background-color: transparent;
    }
  }
}

.activerty-boder {
  height: 100%;
  background-color: #404f80;
  .content {
    min-height: 400px;
    padding: 25px 100px 25px 100px;

    background-color: #1f2c58;
    .event-item {
      margin-top: 10px;
      .ymmd {
        position: relative;
        width: 75px;
        .date {
          font-size: 46px;
          margin: 0;
        }
        .month {
          min-width: 45px;
        }
        .years {
          position: relative;
          min-width: 30px;
          right: -12px;
        }
      }

      .text {
        padding-left: 20px;
        .title {
          font-size: 20px;
        }
        .subtext {
          margin: 0px;
          font-size: 13px;
          word-wrap: break-word;
        }
      }
    }
  }
}
</style>
