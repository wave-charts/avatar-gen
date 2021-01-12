<template>
  <main id="app">
    <PageHeader />
    <router-view />
    <PageFooter />
    <ipad-mouse
      v-if="showIpadMouse"
      rectSelector=".__cursor_rect"
      textSelector=".__cursor_text"
    />
  </main>
</template>

<script>
export default {
  components: {
    IpadMouse: () => import("@/components/IpadMouse"),
    PageHeader: () => import("./views/PageHeader"),
    PageFooter: () => import("./views/PageFooter"),
  },

  computed: {
    showIpadMouse() {
      return !/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(
        navigator.userAgent
      );
    },
  },
};
</script>

<style lang="scss">
body,
html {
  width: 100%;
  height: 100%;
  background-color: #eee;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
