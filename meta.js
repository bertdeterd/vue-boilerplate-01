module.exports = {
  helpers: {
    if_or: function(v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },

  prompts: {
    name: {
      type: "string",
      required: true,
      message: "Project name"
    },
    description: {
      type: "string",
      required: true,
      message: "Project description",
      default: "Vue.js template project"
    },
    author: {
      type: "string",
      message: "Developer",
      default: "Creetion"
    },
    applicationtitle: {
      type: "string",
      message: "Applicatie header",
      default: "Demo"
    },
    applicationtheme: {
      type: "list",
      message: "What base theme to use?",
      choices: ['dark','light']
    }
  },
  filters: {},
  completeMessage:
    "Please perform the following steps:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\n"
};
