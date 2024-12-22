<template>
  <v-main>

    <v-container style="background-color: #efefef;">
      <v-card variant="text">
        <!-- 分区标题 -->
        <v-card-title class="text-center justify-center py-11">
          <h1 class="font-weight-bold text-h4">
            联系信息
          </h1>
          <v-card-text style="color: #b0b0b0;">能为您服务是我们的荣幸!</v-card-text>
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
                12345678901
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
                123123@gmail.com
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
                xxxxxxxxxxxxxxxx
              </div>
              
            </div>
          </v-sheet>
        </v-col>
      </v-row>

    </v-container>

  </v-main>
</template>

<script setup lang="ts">

</script>