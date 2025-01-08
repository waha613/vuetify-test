<template>

  <v-container>
    <v-row>
      <v-col cols="2">
        <v-select clearable label="选择分类" :items="['心脑血管', '生物制品类', '抗生素类', '儿科类']" variant="solo" v-model="selectedItem"
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
          <v-card hover style="height: 575px;" variant="text">
            <v-card-title class="d-flex justify-center">
              <v-img :src="detail.image" width="450" height="450" contain></v-img>
            </v-card-title>
            <v-card-text>
              <div style="text-align: center;"> <!-- 中心对齐文字 -->
                <h3>{{ detail.title }}</h3>
                <p>{{ detail.common1 }}</p>
                <p>{{ detail.common2 }}</p>
                <p>{{ detail.common3 }}</p>
                <p>{{ detail.common4 }}</p>
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
  common1: string;
  common2: string;
  common3: string;
  common4: string;
}

interface Product {
  type: string;
  details: Detail[];
}

// 定义 prods 数组
const prods: Product[] = [
  {
    type: '心脑血管',
    details: [
      //     {
      //       title: '天舒平/奥美沙坦脂氨氯地平片',
      //       //text: '这是第一张卡片的内容。',
      //       common1:string;
      // common2:string;
      // common3:string;
      //       image: '../../static/product/天舒平.jpg'
      //     } as Detail,
      {
        title: '安宫牛黄丸',
        //text: '这是第一张卡片的内容。',
        common1: '规格：3g*1丸',
        common2: '剂型：丸剂',
        common3: '批准文号：国药准字Z22024444',
        image: '../../static/product/安宫牛黄丸.jpg'
      } as Detail,
    ]
  } as Product,
  {
    type: '生物制品类',
    details: [
      {
        title: '人血白蛋白',
        //text: '这是第二张卡片的内容。',
        common1: '规格：10g（20% 50ml）',
        common2: '剂型：注射剂',
        common3: '批准文号：国药准字S10940010',
        image: '../../static/product/人血白蛋白.jpg'
      } as Detail
    ]
  } as Product,
  {
    type: '抗生素类',
    details: [
      {
        title: '罗氏芬/注射用头孢曲松钠',
        //text: '这是第三张卡片的内容。',
        common1: '规格：1克',
        common2: '剂型：粉剂',
        common3: '批准文号：国药准字H10983036',
        image: '../../static/product/罗氏芬1g.jpg'
      } as Detail,
      {
        title: '罗氏芬/注射用头孢曲松钠',
        //text: '这是第三张卡片的内容。',
        common1: '规格：0.5克',
        common2: '剂型：粉针剂',
        common3: '批准文号：国药准字H10983037',
        image: '../../static/product/罗氏芬0.5g.jpg'
      } as Detail,
      {
        title: '舒普深/注射用头孢哌酮钠舒巴坦钠',
        //text: '这是第三张卡片的内容。',
        common1: '规格：1.5g',
        common2: '剂型：粉针剂',
        common3: '批准文号：国药准字H20020597',
        image: '../../static/product/舒普深.jpg'
      } as Detail,
      {
        title: '特治星/注射用哌拉西林钠他唑巴坦钠',
        //text: '这是第三张卡片的内容。',
        common1: '规格：4.5g',
        common2: '剂型：粉针剂',
        common3: '批准文号：国药准字H20217125',
        image: '../../static/product/特治星.jpg'
      } as Detail,
    ]
  } as Product,
  {
    type: '儿科类',
    details: [
      {
        title: '小儿消积止咳口服液',
        //text: '这是第一张卡片的内容。',
        common1: '规格：10ml*10袋',
        common2: '剂型：口服液',
        common3: '批准文号：国药准字z10970022',
        common4: '执行标准：中国药典2020年版一部',
        image: '../../static/product/小儿消积止咳口服液.jpg'
      } as Detail,
    ]
  } as Product,
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