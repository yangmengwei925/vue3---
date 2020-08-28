module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
    proxy: {
      "/api": {
        target: "http://web.juhe.cn:8080/",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  lintOnSave: false,
};