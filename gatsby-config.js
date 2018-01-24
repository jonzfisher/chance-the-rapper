module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/songs/`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
};
