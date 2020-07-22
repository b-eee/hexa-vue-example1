module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "hexa-vue-example1"
    }
  },
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/linker-api": {
        target: process.env.VUE_APP_HEXACLOUD_URL,
        pathRewrite: {
          "^/linker-api": process.env.VUE_APP_HEXACLOUD_PATH
        },
        logLevel: "debug",
      },
    },
  }
};
