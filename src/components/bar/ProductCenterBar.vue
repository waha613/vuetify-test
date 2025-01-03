<template>
  <div class="text-center">
    <!-- <v-menu open-on-hover>
      <template v-slot:activator="{ props }"> -->
    <!-- <v-btn class="ms-1" color="medium-emphasis" size="large" v-bind="props" to="/productCenter"> -->
    <!-- {{title}} -->
    <!-- <v-icon icon="mdi-menu-down" end></v-icon> -->
    <!-- </v-btn> -->

    <!-- </template>
<v-list>
  <v-list-item v-for="(item, index) in items" :key="index">
    <div v-if=item.title>
      <v-btn variant="text">{{item.title}}</v-btn>
    </div>
    <div v-if=item.subheader class="text start">
      <h5>{{ item.subheader }}</h5>
    </div>
    <div v-if=item.divider>
      <v-divider class="border-opacity-10"></v-divider>
    </div>
  </v-list-item>
</v-list>
</v-menu> -->

    <v-btn class="ms-1" color="medium-emphasis" size="large" to="/productCenter">
      {{ title }}
    </v-btn>
  </div>
  <!-- <v-btn class="ms-1" color="medium-emphasis" size="large">

    {{ title }}

    <v-menu :items="items" activator="parent" width="220">

    </v-menu>
  </v-btn> -->
</template>

<script setup lang="ts">
const title = '产品中心'
const items = computed(() => ([
  { subheader: '类别一' },
  {
    title: '产品一',
    // to: rpath('/introduction/enterprise-support/'),
    // appendIcon: 'mdi-shield-star-outline',
  },
  {
    title: '产品二',
    // href: 'https://issues.vuetifyjs.com/',
    // appendIcon: 'mdi-bug-outline',
  },
  {
    title: '产品三',
    // to: rpath('/getting-started/frequently-asked-questions/'),
    // appendIcon: 'mdi-head-question-outline',
  },
  { divider: true },
  { subheader: '类别二' },
  {
    title: '产品三',
    // href: 'https://github.com/vuetifyjs/vuetify/issues/',
    // appendIcon: 'mdi-alert-circle-outline',
  },
  {
    title: '产品四',
    // href: 'https://status.vuetifyjs.com/',
    // appendIcon: 'mdi-cloud-outline',
  },
  {
    title: '产品五',
    // href: 'https://github.com/vuetifyjs/vuetify/releases',
    // appendIcon: 'mdi-package-variant',
  },
]))
</script>