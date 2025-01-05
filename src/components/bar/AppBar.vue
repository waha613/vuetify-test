<template>
  <v-container class="fixed-header" fluid>
    
      <v-app-bar class="fixed-header">

        <v-toolbar-title>
          <h1 class="font-weight-bold text-h5 text-gray">
            河南今择栖医药有限公司
          </h1>
        </v-toolbar-title>
    
        
          <v-btn variant="text" class="ms-1" color="medium-emphasis" size="large" to="/">网站首页</v-btn>
          <AboutUs />
          <ProductCenter />
          <!-- <News />
          <Fee /> -->
          <ContactUs />

        


      </v-app-bar>
    </v-container>



</template>

<script setup lang="ts">
import AboutUs from './AboutUsBar.vue';
import ContactUs from './ContactUsBar.vue';
import Fee from './FeeBar.vue';
import News from './NewsBar.vue';
import ProductCenter from './ProductCenterBar.vue';
</script>

<style scoped>
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
  justify-content: flex-start;
  /* 将按钮放置在右侧 */
  /* margin-top: auto; */
  /* 设置 margin-top 为 auto，使按钮容器撑开到底部 */
}

.fixed-header {
  position: fixed;
  /* 设置为固定定位 */
  top: 0;
  /* 距离顶部 0 像素 */
  width: 100%;
  /* 宽度占满整个窗口 */
  /* background-color: #f8f9fa; */
  /* 背景颜色 */
  /* padding: 10px; */
  /* 内边距 */
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  /* 添加阴影效果 */
  z-index: 1000;
  /* 确保在其他元素之上 */
}
</style>