<template>

  <v-container>
    <v-row>
      <v-col cols="2">
        <v-select clearable label="选择分类" :items="['分类一', '分类二', '分类三']" variant="solo" v-model="selectedItem"
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
          {{ prod.type }}
        </h4>
      </v-card-title>

      <!-- 标题与内容分界线 -->
      <v-divider class="border-opacity-10"></v-divider>

      <!-- 内容 -->
      <v-row>
        <v-col v-for="(detail, detailIndex) in prod.details" :key="detailIndex" cols="4">
          <v-card hover style="height: 550px;" variant="text">
            <v-card-title class="d-flex justify-center">
              <v-img :src="detail.image" width="450" height="450" contain></v-img>
            </v-card-title>
            <v-card-text>
              <div style="text-align: center;"> <!-- 中心对齐文字 -->
                <h3>{{ detail.title }}</h3>
                <p>{{ detail.text }}</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card variant="text">

  </v-container>
  
</template>

<script setup lang="ts">

const selectedItem = ref<string>();

const selectName = ref<string>();

interface Detail {
  title: string;
  text: string;
  image: string;
}

interface Product {
  type: string;
  details: Detail[];
}

// 定义 prods 数组
const prods: Product[] = [
  {
    type: '分类一',
    details: [
      {
        title: '产品 1',
        text: '这是第一张卡片的内容。',
        image: '../../static/1711181250147392.jpg'
      } as Detail,
      {
        title: '产品 1.1',
        text: '这是第一张卡片的内容。',
        image: '../../static/1711181250147392.jpg'
      } as Detail
    ]
  } as Product,
  {
    type: '分类二',
    details: [
      {
        title: '产品 2',
        text: '这是第二张卡片的内容。',
        image: '../../static/1711181445925025.jpg'
      } as Detail
    ]
  } as Product,
  {
    type: '分类三',
    details: [
      {
        title: '产品 3',
        text: '这是第三张卡片的内容。',
        image: '../../static/背景图片.png'
      } as Detail
    ]
  } as Product
];

function checkType(value: String) {

  if (value == null || value == "" || selectedItem.value == null || selectedItem.value == "") {
    return true;
  } else {
    return value === selectedItem.value;
  }
}

function checkName(value: String) {
  if (value == null || value == "" || selectName.value == null || selectName.value == "") {
    return true;
  } else {
    return value.includes(selectName.value);
  }
}

function changeType() {
 
  if (selectedItem.value == null || selectedItem.value == undefined) {
    return prods;
  } else {
    return prods.filter(prod => prod.type === selectedItem.value)
      .map(prod => (
        {
          type: prod.type,
          details: prod.details.filter(detail => selectName.value == null || selectName.value == "" ? true : detail.title.includes(selectName.value))

        }))
  }

  function changeName() {
    if (selectedItem.value == null || selectedItem.value == undefined) {
      return prods;
    } else {
      return prods.filter(prod => prod.type === selectedItem.value)
        .map(prod => (
          {
            type: prod.type,
            details: prod.details.filter(detail => selectName.value == null || selectName.value == "" ? true : detail.title.includes(selectName.value))

          }))
    }
  }

}

</script>