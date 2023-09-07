<template>
 <!-- stsart news -->
    <div >
      <div class="text-h4">News｜最新消息</div>
      <!-- 公告內容 -->

      <div class="row bg-card justify-center">
        <div class="card col-4">
            <q-card class="column justify-center">
              <q-card-section>  
                <p>{{ newsTitle }}</p>
                <hr>
                <p>{{ newsSubTitle }}</p>
              </q-card-section>
            </q-card>
        </div>

        <div class="card col-4">
          <q-card class="column justify-center">
            <q-card-section>
              <p>{{ newsTitle }}</p>
              <hr>
              <p>{{ newsSubTitle }}</p>
            </q-card-section>
          </q-card>
        </div>

        <div class="card col-4">
          <q-card class="column justify-center">
            <q-card-section>
              <p>{{ newsTitle }}</p>
              <hr>
              <p>{{ newsSubTitle }}</p>
            </q-card-section>
          </q-card>
        </div>

        <div class="card col-4">
          <q-card class="column justify-center">
            <q-card-section>
              <p>{{ newsTitle }}</p>
              <hr>
              <p>{{ newsSubTitle }}</p>
            </q-card-section>
          </q-card>
        </div>

        <div class="card col-4">
          <q-card class="column justify-center">
            <q-card-section>
              <p>{{ newsTitle }}</p>
              <hr>
              <p>{{ newsSubTitle }}</p>
            </q-card-section>
          </q-card>
        </div>

        <div class="card col-4">
          <q-card class="column justify-center">
            <q-card-section>
              <p>{{ newsTitle }}</p>
              <hr>
              <p>{{ newsSubTitle }}</p>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>
    <!-- end news -->    
</template>

<script>
export default {
  data () {
      return{
      // 最新消息
      newsTitle: '秘書處公告',
      newsSubTitle: '第八屆理監事暨學會幹部名單',
    }   
  }
    
}
</script>

<style scope>
.bg-card .card {
  margin: 0;
  padding: 2em;
}

/*rwd*/
@media screen and (min-width: 1024px){
  .bg-card {
    padding: 0 10rem 0 10rem;
  }
}

@media screen and (min-width: 1440px){
  .bg-card {
    padding: 0 15rem 0 15rem;
  }
}

@media screen and (min-width: 1920px){
  .bg-card {
    padding: 0 30rem 0 30rem;
  }
}
</style>