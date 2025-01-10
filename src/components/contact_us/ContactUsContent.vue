<template>
  <v-main>

    <v-container style="background-color: #efefef;">
      <v-card variant="text">
        <!-- 分区标题 -->
        <v-card-title class="text-center justify-center py-11">
          <h1 class="font-weight-bold text-h4">
            {{ contactUs?.title }}
          </h1>
          <v-card-text style="color: #b0b0b0;">{{ contactUs?.content }}</v-card-text>
        </v-card-title>

        <!-- 标题与内容分界线 -->
        <v-divider class="border-opacity-10"></v-divider>

        <!-- 内容 -->
      </v-card variant="text">

      <v-row>
        <v-col cols="4">
          <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" elevation="4"
            height="250" max-width="500" width="100%" rounded>
            <div>
              <h5 class="text-h5 font-weight-black">联系方式</h5>
              <div style="height: 10px;"></div>
              
              <div class="text-h6 font-medium mb-2">
                <v-icon icon="mdi-card-account-phone" start></v-icon>
                {{ contactUs?.phoneNumber }}
              </div>

             
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="4">
          <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" elevation="4"
            height="250" max-width="500" width="100%" rounded>
            <div>
              <h5 class="text-h5 font-weight-black">企业邮箱</h5>
              <div style="height: 10px;"></div>
              <div class="text-h6 font-medium mb-2">
                <v-icon icon="mdi-card-account-mail" start></v-icon>
                {{ contactUs?.email }}
              </div>

             
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="4">
          <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" elevation="4"
            height="250" max-width="500" width="100%" rounded>
            <div>
              <h5 class="text-h5 font-weight-black">企业地址</h5>
              <div style="height: 10px;"></div>
              <div class="text-h6 font-medium mb-2">
                <v-icon icon="mdi-map-marker" start></v-icon>
                {{ contactUs?.address }}
              </div>
              
            </div>
          </v-sheet>
        </v-col>
      </v-row>

    </v-container>

  </v-main>
</template>

<script setup lang="ts">
import { contactUsData, type contactUsResD} from '../../api'; // 导入 API
import { ref, onMounted } from 'vue';
const contactUs = ref<contactUsResD | null>(null);

const loadData = async () => {
    try {
      contactUs.value = await contactUsData(); // 调用 API 获取数据
    } catch (error) {
        console.error('数据加载失败:', error);
    }
};

onMounted(() => {
    loadData(); // 组件挂载时加载数据
});
</script>