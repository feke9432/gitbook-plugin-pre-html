let exConfig = {}
module.exports = {
  website: {
    assets: "./book",
    js: [
        "pre-html.js"
    ],
    css: [
    ]
  },
  // Map of hooks
  hooks: {
    "config": function(config) {
      if (config.pluginsConfig && config.pluginsConfig["pre-html"] != undefined) {
        exConfig = config.pluginsConfig["pre-html"];
      }
      return config;
    },
    "page": function(page) {
      if(exConfig && exConfig.hidePoweredBy) {
        page.content = page.content.replace("powered by Gitbook", "")
      }
      return page;
    },
    "finish": function () {
      return ;
    }
  },

  // Map of new blocks
  blocks: {
    pre: {
      process: function(block) {
        let kwArgs = block.kwargs;
        let elTag = 'p';
        if (kwArgs) {
          elTag = kwArgs['name'];
        }
        let args = block.args;
        let styleStr = 'font-size: 2em; font-weight: 700;';
        if (args && args.length) {
          styleStr = args[0];
        }
        return `<${elTag} style='${styleStr}'>${block.body}</${elTag}>`;
      }
    }
  },

  // Map of new filters
  filters: {}
};