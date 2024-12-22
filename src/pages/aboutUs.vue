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
                        <v-card  height="500px">
                            公司简介
                        </v-card>
                       
                    </v-col>
                </v-row>

            </v-tabs-window-item>

            <v-tabs-window-item value="2">

                <v-row>
                    <v-col cols="12">
                        <v-card  height="500px">
                            资质证书
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
</script>