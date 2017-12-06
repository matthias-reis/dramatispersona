module.exports = {
  siteMetadata: {
    title: `Dramatis Persona`,
    description: 'Das beste aus anderen Welten',
    siteUrl: `https://www.dramatispersona.de`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/config/typography.js`
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-578L26G'
      }
    }
  ]
};
