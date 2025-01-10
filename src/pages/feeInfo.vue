<template>
    <AppBar></AppBar>
    <v-main>

        <v-container >
            <v-card variant="text">
                <!-- 分区标题 -->


                <v-card-text style="background-color: #efefef;">
                    <div style="text-indent: 4ch;line-height: 3; font-size:larger;">
                        <div v-html="feeService?.content"></div>
                </div>
                </v-card-text>


                <!-- 标题与内容分界线 -->
                <v-divider class="border-opacity-10"></v-divider>

            </v-card>

        </v-container>

    </v-main>
</template>

<script setup lang="ts">
import { feeServiceData, type feeServiceResD} from '../api'; // 导入 API
import { ref, onMounted } from 'vue';
const feeService = ref<feeServiceResD | null>(null);

const loadData = async () => {
    try {
        feeService.value = await feeServiceData(); // 调用 API 获取数据
    } catch (error) {
        console.error('数据加载失败:', error);
    }
};

onMounted(() => {
    loadData(); // 组件挂载时加载数据
});
</script>