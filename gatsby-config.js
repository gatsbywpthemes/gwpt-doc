module.exports = {
  siteMetadata: {
    title: `GatsbyWpThemes Doc`,
    name: `GatsbyWpThemes Doc`,
    siteUrl: `https://gatsby-theme-document.netlify.com`,
    description: `Gatsby WordPress themes Docs`,
    social: [
      // {
      //   name: `github`,
      //   url: `https://github.com/codebushi/gatsby-theme-document`,
      // },
      {
        name: `twitter`,
        url: `https://twitter.com/alexadark`,
      },
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/themes", "/plugins"],
      ignoreIndex: true,
    },
  },
  plugins: [{ resolve: `gatsby-theme-document` }],
}
