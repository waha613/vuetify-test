<template>

    <v-btn variant="text" class="ms-1" color="medium-emphasis" size="large"  to="/aboutUs">关于我们</v-btn>
    <!-- <v-btn
    :to="rpath('/about/meet-the-team/')"
    class="ms-1"
    color="medium-emphasis"
    text="team"
    variant="text"
    @click="onClick"
  /> -->
</template>

<script setup lang="ts">

import { useDisplay } from 'vuetify';
const size = useDisplay().width;
</script>

<style>
.my-card {
  max-width: 90%; /* 在不同分辨率下，限制卡片的最大宽度 */
  margin: auto;
}
</style>