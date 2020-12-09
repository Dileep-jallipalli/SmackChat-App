<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn icon="arrow_back" flat l dense label="Back" />
        <q-toolbar-title class="absolute-center"> {{ title }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  computed: {
    title() {
      console.log(this.$route);
      let currentPath = this.$route.fullPath;
      if (currentPath == "/") return "SmackChat";
      else if (currentPath == "/chat") return "Chat";
      else if (currentPath == "/auth") return "Auth ";
    },
  },
};
</script>
