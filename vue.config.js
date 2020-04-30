module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? "/resource" : "/resource",
  devServer: {
    proxy: {
      "/api_resource/": {
        target: "http://apipad.31waiyu.com/resource/MyResourceService.svc/",
        pathRewrite: {
          "^/api_resource/": "",
        },
      },
    },
  },
};
