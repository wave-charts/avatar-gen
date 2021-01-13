<template>
  <main id="app">
    <PageHeader />
    <router-view
      @multiple-start="multipleExporting = true"
      @multiple-end="multipleExporting = false"
    />
    <PageFooter />
    <ipad-mouse
      v-if="showIpadMouse"
      :force-show-cursor="multipleExporting"
      rectSelector=".__cursor_rect"
      textSelector=".__cursor_text"
    />
  </main>
</template>

<script>
export default {
  data() {
    return {
      multipleExporting: false,
    };
  },
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
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  color: unset;
  &:visited {
    color: unset;
  }
}

@media (prefers-color-scheme: dark) {
  body,
  html {
    background-color: #292929;
  }
}
</style>
