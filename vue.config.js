// vue.config.js
module.exports = {
  lintOnSave: false,

  devServer: {
    // disableHostCheck: true,
    host: process.env.DEV_SERVER_HOST || "127.0.0.1",
    port: process.env.DEV_SERVER_PORT || 8081,
  },

  runtimeCompiler: false,

  pages: {
    index: {
      entry: "src/main.ts",
      title: "Wave-头像生成器",
    },
  },

  pluginOptions: {
    i18n: {
      locale: "zh",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
};
