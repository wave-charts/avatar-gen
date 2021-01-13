// vue.config.js
module.exports = {
  lintOnSave: false,

  // devServer: {
  //   // disableHostCheck: true,
  //   host: process.env.HOST || "127.0.0.1",
  //   port: 8081,
  // },

  runtimeCompiler: false,

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
