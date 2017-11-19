module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `config/typography.js`
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
