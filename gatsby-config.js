module.exports = {
  siteMetadata: {
    title: "Felix Elias - felixelias.com",
    author: "Felix Elias",
    description: "Felix Elias Portfolio and Credentials"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'felix-elias',
        short_name: 'felixelias.com',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/prog_ico.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ], 
  pathPrefix: "/felixelias",
}
