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
      message: "Project naam"
    },
    description: {
      type: "string",
      required: true,
      message: "Project beschrijving",
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
      message: "What theme to use as base?",
      choices: ['dark','light']
    }
  },
  filters: {},
  completeMessage:
    "Nabewerkingen:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\n"
};
