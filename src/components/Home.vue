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
  </head>


  <v-app>

    <AppBar />

    <v-main>
      <v-container fluid>
        <v-carousel show-arrows="hover" height="700px" :cycle="true" :interval="3000">
          <v-carousel-item v-for="(item, index) in mainCarousel" :key="index" :src="item.image" cover></v-carousel-item>

          <!-- <v-carousel-item src="../../static/product/轮播2.jpg" cover></v-carousel-item>

          <v-carousel-item src="../../static/product/轮播3.jpg" cover></v-carousel-item> -->
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
                <v-img :src="item.prodImgAddress" width="450" height="450" contain></v-img>
              </v-card-title>
              <v-card-text>
                <div style="text-align: center;"> <!-- 中心对齐文字 -->
                  <h3>{{ item.prodTitle }}</h3>
                  <!-- <p>{{ item.text }}</p> -->
                  <p>{{ item.prodCommon1 }}</p>
                  <p>{{ item.prodCommon2 }}</p>
                  <p>{{ item.prodCommon3 }}</p>
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
                <v-img :src="item.prodImgAddress" width="550" height="550" contain></v-img>
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
                <h1>{{mainAboutUs?.title }}</h1>
              </v-card-title>
              <v-card-text class="d-flex justify-start">
                <div style="text-indent: 4ch;line-height: 3; font-size:x-large;">
                  {{ mainAboutUs?.descbsion }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="6">
            <v-card variant="text" style="height: 700px;">
              <v-card-title class="d-flex justify-center">
                <v-img :src="mainAboutUs?.image" width="100%" height="700" contain></v-img>
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
import { mainProdCenterData, mainProdPostersData, mainAboutUsData, type mainAboutUsResD, mainCarouselData, type mainCarouselResD, type mainProdCenterDataRes, type mainProdCenterDataResD } from '../api'; // 导入 API
import { ref, onMounted } from 'vue';

const prods = ref<mainProdCenterDataResD[] | null>(null);
const prodPosterss = ref<mainProdCenterDataResD[] | null>(null);
const mainAboutUs = ref<mainAboutUsResD | null>(null);
const mainCarousel = ref<mainCarouselResD[] | null>(null);

const loadData = async () => {
  try {
    prods.value = await mainProdCenterData(); // 调用 API 获取数据
    prodPosterss.value = await mainProdPostersData();
    mainAboutUs.value = await mainAboutUsData(); // 调用 API 获取数据
    mainCarousel.value = await mainCarouselData();
    console.info(prods)
  } catch (error) {
    console.error('数据加载失败:', error);
  }
};

onMounted(() => {
  loadData(); // 组件挂载时加载数据
});

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