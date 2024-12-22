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
                        <v-card height="500px">
                            <div style="text-indent: 4ch;line-height: 3; font-size:larger;">
                                <p>河南今择栖医药有限公司成立于2023年5月15日，注册地位于河南省郑州市金水区姚砦路133号金成时代广场3号楼一层103、104号，是一家专业从事药品零售和保健品销售的企业，致力于为广大消费者提供优质的药品和专业的医疗保健服务。公司始终秉承“客户至上，品质第一”的经营理念，确保提供安全、可靠的药品和保健品。
                                </p>
                                <p>
                                    主要经营范围：
                                </p>
                                <div style="text-indent: 8ch;">
                                    <ol>
                                        <li>
                                            <strong>1. 药品零售：</strong> 包括处方药、非处方药：中成药，化学药制剂，抗生素，生化药品，生物制品（除疫苗）
                                        </li>
                                        <li>
                                            <strong>2. 保健品销售：</strong>提供多种保健品，满足消费者健康需求。
                                        </li>
                                        <li>
                                            <strong>3. 医疗器械：</strong>销售与医疗相关的器械和设备。
                                        </li>
                                        <li>
                                            <strong>4. 健康咨询服务：</strong>提供专业的用药指导和健康咨询服务，帮助客户更好地了解药品的使用方法和注意事项。
                                        </li>
                                        <li>
                                            <strong>5. 药品零售：</strong>包括处方药、非处方药：中成药，化学药制剂，抗生素，生化药品，生物制品（除疫苗）
                                        </li>
                                    </ol>
                                </div>

                                <p>河南今择栖医药有限公司是一家拥有一支经验丰富、技术精湛的医药团队，开展多元化业务，与多家知名药企建立长期的合作关系，确保提供优质、正规的药品和医疗器械，将客户需求放在首位，努力为客户提供满意的产品和服务，赢得广大客户得信赖和支持。
                                </p>
                            </div>
                        </v-card>

                    </v-col>
                </v-row>

            </v-tabs-window-item>

            <v-tabs-window-item value="2">

                <v-row>
                    <v-col cols="4" v-for="(item, index) in items1" :key="index">
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

                <v-row>
                    <v-col cols="4" v-for="(item, index) in items2" :key="index">
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


                <v-row>
                    <v-col cols="4" v-for="(item, index) in items3" :key="index">
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
import { ref } from 'vue';
const tab = ref(null);

const items1 = [
    {
        image:'../../static/药品经营许可证.jpg',
        title:'药品经营许可证'
    },
    {
        image:'../../static/药品经营许可证副本.jpg',
        title:'药品经营许可证副本'
    },
    {
        image:'../../static/药品经营许可证副本2.jpg',
        title:'药品经营许可证副本'
    },
]

const items2 = [
    {
        image:'../../static/营业执照.jpg',
        title:'营业执照'
    },
    {
        image:'../../static/预包装食品信息采集.jpg',
        title:'预包装食品经营者备案信息'
    },
    {
        image:'../../static/预包装食品信息采集2.jpg',
        title:'预包装食品经营者备案信息'
    },
]

const items3 = [
    {
        image:'../../static/二类医疗器械备案凭证.jpg',
        title:'二类医疗器械备案凭证'
    },
    {
        image:'../../static/执业药师注册证.jpg',
        title:'执业药师注册证'
    },
]
</script>