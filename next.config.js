module.exports = {
  generateBuildId() {
    return "testing-build-id";
  },
  i18n: {
    locales: ["nl-NL", "nl-BE", "nl", "fr-BE", "fr", "en-US", "en"],
    defaultLocale: "en-US",
    domains: [
      {
        domain: "example.be",
        defaultLocale: "nl-BE",
      },
      {
        domain: "example.fr",
        defaultLocale: "fr",
      },
    ],
  },
};
