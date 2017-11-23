module.exports = {
  siteMetadata: {
    title: `Dramatis Persona`,
    description: 'Das beste aus anderen Welten',
    siteUrl: `https://www.dramatispersona.de`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `config/typography.js`
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400
            }
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-578L26G'
      }
    }
  ]
};
