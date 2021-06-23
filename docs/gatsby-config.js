module.exports = {
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "Smooth DOC Starter",
        description: "Use your own description...",
        siteUrl: "https://example.com",
      },
    },
    `gatsby-plugin-react-native-web`,
    `gatsby-plugin-react-helmet`,
  ],
};
