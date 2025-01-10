<template>
    <AppBar></AppBar>
    <v-container>
        <v-card variant="tonal">
            <v-tabs align-tabs="start" color="deep-purple-accent-4" v-model="tab">
                <v-tab value="1" width="200px">公司简介</v-tab>
                <v-tab value="2" width="200px">资质证书</v-tab>
            </v-tabs>
        </v-card>

    </v-container>


    <v-container>

        <v-tabs-window v-model="tab">
            <v-tabs-window-item value="1">

                <v-row>
                    <v-col cols="12">
                        <v-card>
                            <div style="text-indent: 4ch;line-height: 3; font-size:larger;">
                                <div v-html="companyInfo?.content"></div>
                            </div>
                        </v-card>

                    </v-col>
                </v-row>

            </v-tabs-window-item>

            <v-tabs-window-item value="2">

                <v-row>
                    <v-col cols="4" v-for="(item, index) in certificate" :key="index">
                        <v-card hover style="height: 550px;" variant="text">
                            <v-card-title class="d-flex justify-center">
                                <v-img :src="item.image" width="450" height="450" contain></v-img>
                            </v-card-title>
                            <v-card-text>
                                <div style="text-align: center;"> <!-- 中心对齐文字 -->
                                    <h3>{{ item.title }}</h3>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>


            </v-tabs-window-item>
        </v-tabs-window>


    </v-container>

</template>

<script setup lang="ts">
import { companyInfoData, type companyInfoResD, certificateData, type certificateResD} from '../api'; // 导入 API
import { ref, onMounted } from 'vue';

const tab = ref(null);

const companyInfo = ref<companyInfoResD | null>(null);
const certificate = ref<certificateResD[] | null>(null);

const loadData = async () => {
    try {
        companyInfo.value = await companyInfoData(); // 调用 API 获取数据
        certificate.value = await certificateData();
    } catch (error) {
        console.error('数据加载失败:', error);
    }
};

onMounted(() => {
    loadData(); // 组件挂载时加载数据
});

const items1 = [
    {
        image: '../../static/药品经营许可证.jpg',
        title: '药品经营许可证'
    },
    {
        image: '../../static/药品经营许可证副本.jpg',
        title: '药品经营许可证副本'
    },
    {
        image: '../../static/药品经营许可证副本2.jpg',
        title: '药品经营许可证副本'
    },
]

const items2 = [
    {
        image: '../../static/营业执照.jpg',
        title: '营业执照'
    },
    {
        image: '../../static/预包装食品信息采集.jpg',
        title: '预包装食品经营者备案信息'
    },
    {
        image: '../../static/预包装食品信息采集2.jpg',
        title: '预包装食品经营者备案信息'
    },
]

const items3 = [
    {
        image: '../../static/二类医疗器械备案凭证.jpg',
        title: '二类医疗器械备案凭证'
    },
    {
        image: '../../static/执业药师注册证.jpg',
        title: '执业药师注册证'
    },
]
</script>