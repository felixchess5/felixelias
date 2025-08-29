module.exports = {
  siteMetadata: {
    title: "Felix Elias - felixelias.com",
    author: "Felix Elias",
    description: "Felix Elias Portfolio",
    version: "2.1.0" // Increment this to force cache refresh
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
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: [`/`, `/404/`],
        workboxConfig: {
          globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,gif,ico,svg,woff,woff2,eot,ttf}']
        },
        // Fix mobile caching issues
        runtimeCaching: [
          {
            urlPattern: /^https?:.*\/page-data\/.*\.json$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'page-data',
              networkTimeoutSeconds: 3,
            },
          },
          {
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'assets',
            },
          },
        ],
      },
    }
  ], 
  pathPrefix: "/felixelias"
}
