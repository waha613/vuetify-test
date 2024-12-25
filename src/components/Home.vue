<template>

  <head>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="format-detection" content="telephone=no">
    <title>河南今择栖医药有限公司</title>
    <meta name="keywords" content="河南今择栖医药有限公司">
    <meta name="description" content="河南今择栖医药有限公司">
    <meta name="author" content="www.adminbuy.cn K522">
  </head>


  <v-app>

    <AppBar />

    <v-main>
      <v-container fluid>
        <v-carousel show-arrows="hover" height="500px" :cycle="true" :interval="3000">
          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
        </v-carousel>

      </v-container>
    </v-main>

    <v-main>

      <v-container>
        <v-card variant="text">
          <!-- 分区标题 -->
          <v-card-title class="text-center justify-center py-11">
            <h1 class="font-weight-bold text-h4">
              产品中心
            </h1>
          </v-card-title>

          <!-- 标题与内容分界线 -->
          <v-divider class="border-opacity-10"></v-divider>

          <!-- 内容 -->
        </v-card variant="text">
        <v-row>
          <v-col cols="4" v-for="(item, index) in prods" :key="index">
            <v-card hover style="height: 550px;" variant="text">
              <v-card-title class="d-flex justify-center">
                <v-img :src="item.image" width="450" height="450" contain></v-img>
              </v-card-title>
              <v-card-text>
                <div style="text-align: center;"> <!-- 中心对齐文字 -->
                  <h3>{{ item.title }}</h3>
                  <!-- <p>{{ item.text }}</p> -->
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-card variant="text">
          <!-- 分区标题 -->
          <v-card-title class="text-center justify-center py-11">
            <h1 class="font-weight-bold text-h4">
              产品海报
            </h1>
          </v-card-title>

          <!-- 标题与内容分界线 -->
          <v-divider class="border-opacity-10"></v-divider>

          <!-- 内容 -->
        </v-card variant="text">
        <v-row>
          <v-col cols="4" v-for="(item, index) in prodPosterss" :key="index">
            <v-card hover style="height: 550px;" variant="text">
              <v-card-title class="d-flex justify-center">
                <v-img :src="item.image" width="550" height="550" contain></v-img>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>


      <v-container>
        <v-card variant="text">

          <!-- 标题与内容分界线 -->
          <v-divider class="border-opacity-10"></v-divider>

          <!-- 内容 -->
        </v-card variant="text">
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="4">
            <div style="height: 100px;"></div>
            <v-card style="height: 600px;" variant="text">
              <v-card-title class="d-flex justify-start">
                <h1>关于我们</h1>
              </v-card-title>
              <v-card-text class="d-flex justify-start">
                <div style="text-indent: 4ch;line-height: 3; font-size:x-large;">
                  河南今择栖医药有限公司成立于2023年5月15日，注册地位于河南省郑州市金水区姚砦路133号金成时代广场3号楼一层103、104号，是一家专业从事药品零售和保健品销售的企业，致力于为广大消费者提供优质的药品和专业的医疗保健服务。公司始终秉承“客户至上，品质第一”的经营理念，确保提供安全、可靠的药品和保健品。
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="6">
            <v-card variant="text" style="height: 700px;">
              <v-card-title class="d-flex justify-center">
                <v-img src="../../static/1713624894495518.jpg" width="100%" height="700" contain></v-img>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>

      </v-container>

    </v-main>






  </v-app>
</template>


<script setup lang="ts">


let prods = [
  {
    title: '罗氏芬/注射用头孢曲松钠',
    //text: '这是第三张卡片的内容。',
    image: '../../static/product/罗氏芬1g.jpg'
  },
  {
    title: '罗氏芬/注射用头孢曲松钠',
    //text: '这是第三张卡片的内容。',
    image: '../../static/product/罗氏芬0.5g.jpg'
  },
  {
    title: '舒普深/注射用头孢哌酮钠舒巴坦钠',
    //text: '这是第三张卡片的内容。',
    image: '../../static/product/舒普深.jpg'
  },
]

let prodPosterss = [
{
    //title: '罗氏芬/注射用头孢曲松钠',
    //text: '这是第三张卡片的内容。',
    image: '../../static/product/罗氏芬1g.jpg'
  },
  {
    //title: '罗氏芬/注射用头孢曲松钠',
    //text: '这是第三张卡片的内容。',
    image: '../../static/product/罗氏芬0.5g.jpg'
  },
  {
    //title: '舒普深/注射用头孢哌酮钠舒巴坦钠',
    //text: '这是第三张卡片的内容。',
    image: '../../static/product/舒普深.jpg'
  },
]

let items = [
  {
    title: '轮播图 1',
    text: '这是第一张轮播图的内容。',
    image: 'https://via.placeholder.com/800x400/FF5733/FFFFFF?text=轮播图+1'
  },
  {
    title: '轮播图 2',
    text: '这是第二张轮播图的内容。',
    image: 'https://via.placeholder.com/800x400/33FF57/FFFFFF?text=轮播图+2'
  },
  {
    title: '轮播图 3',
    text: '这是第三张轮播图的内容。',
    image: 'https://via.placeholder.com/800x400/3357FF/FFFFFF?text=轮播图+3'
  }
]

</script>

<style scoped>
.v-carousel {
  border-radius: 8px;
  /* 可以调整轮播的圆角 */
  overflow: hidden;
  /* 隐藏溢出部分 */
}

.custom-app-bar {
  min-height: 80px;
  /* 设置导航栏的高度 */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* 将内容向底部对齐 */
}

.button-container {
  display: flex;
  justify-content: flex-end;
  /* 将按钮放置在右侧 */
  margin-top: auto;
  /* 设置 margin-top 为 auto，使按钮容器撑开到底部 */
}
</style>