<template>

  <v-container>
    <v-row>
      <v-col cols="2">
        <v-select clearable label="选择分类" :items="prodTypeArray" variant="solo" v-model="selectedItem"
          @change="changeType"></v-select>
      </v-col>
      <v-col cols="2">
        <v-text-field label="产品名称" clearable v-model="selectName"></v-text-field>
      </v-col>
    </v-row>

  </v-container>

  <v-container>
    <v-card variant="text" v-for="(prod, index) in changeType()" :key="index">

      <!-- 分区标题 -->
      <v-card-title class="text-start justify-center py-11">
        <h4 class="font-weight-bold text-h4">
          {{ prod.prodType }}
        </h4>
      </v-card-title>

      <!-- 标题与内容分界线 -->
      <v-divider class="border-opacity-10"></v-divider>

      <!-- 内容 -->
      <v-row>
        <v-col v-for="(detail, detailIndex) in prod.details" :key="detailIndex" cols="4">
          <v-card hover style="height: 575px;" variant="text">
            <v-card-title class="d-flex justify-center">
              <v-img :src="detail.prodImgAddress" width="450" height="450" contain></v-img>
            </v-card-title>
            <v-card-text>
              <div style="text-align: center;"> <!-- 中心对齐文字 -->
                <h3>{{ detail.prodTitle }}</h3>
                <p>{{ detail.prodCommon1 }}</p>
                <p>{{ detail.prodCommon2 }}</p>
                <p>{{ detail.prodCommon3 }}</p>
                <p>{{ detail.prodCommon4 }}</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card variant="text">

  </v-container>

</template>

<script setup lang="ts">
import { prodCenterData, type prodCenterDataResD, type prodCenterDataResDdetals } from '../../api'; // 导入 API
import { ref, onMounted } from 'vue';

const prodCenterList = ref<prodCenterDataResD[]>();
const prodTypeArray = ref<string[]>(new Array());

function getProdTypeArray(prodCenterDataResD: prodCenterDataResD) {
  if (!prodTypeArray.value.includes(prodCenterDataResD.prodType)) {
    prodTypeArray.value.push(prodCenterDataResD.prodType)
    return true;
  } else {
    return false;
  }
}
const loadData = async () => {
  try {
    prodCenterList.value = await prodCenterData(); // 调用 API 获取数据
    for (const item of prodCenterList.value) {
      getProdTypeArray(item);
    }

  } catch (error) {
    console.error('数据加载失败:', error);
  }
};

onMounted(() => {
  loadData(); // 组件挂载时加载数据
});

const selectedItem = ref<string>();

const selectName = ref<string>();

function changeType() {

  if (selectedItem.value == null || selectedItem.value == undefined) {
    return prodCenterList.value;
  } else {
    return prodCenterList.value?.filter(prod => prod.prodType === selectedItem.value)
      .map(prod => (
        {
          prodType: prod.prodType,
          details: prod.details.filter(detail => selectName.value == null || selectName.value == "" ? true : detail.prodTitle.includes(selectName.value))

        }))
  }

  function changeName() {
    if (selectedItem.value == null || selectedItem.value == undefined) {
      return prodCenterList;
    } else {
      return prodCenterList.value?.filter(prod => prod.prodType === selectedItem.value)
        .map(prod => (
          {
            type: prod.prodType,
            details: prod.details.filter(detail => selectName.value == null || selectName.value == "" ? true : detail.prodTitle.includes(selectName.value))

          }))
    }
  }

}

</script>