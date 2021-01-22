module.exports = {
  async redirects() {
    return [

      {
        source: '/github',
        destination: 'https://github.com/ajayliu/',
        permanent: false,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/ajayliu/',
        permanent: false,
      },
      {
        source: '/googleplay',
        destination: 'https://play.google.com/store/apps/developer?id=Troy+Game+Development+Club',
        permanent: false,
      },
      {
        source: '/donate',
        destination: 'https://www.buymeacoffee.com/ajayliu',
        permanent: false,
      },
      
      {
        source: '/inspirationjar',
        destination: 'https://www.inspirationjar.com/',
        permanent: false,
      },
      {
        source: '/sheepgoat',
        destination: 'https://sheepgoat.herokuapp.com/',
        permanent: false,
      },
      {
        source: '/jetlag',
        destination: 'https://jetlag.netlify.app/',
        permanent: false,
      },
      {
        source: '/10seconds',
        destination: 'https://10seconds.netlify.app/',
        permanent: false,
      },
      {
        source: '/ichiban',
        destination: 'https://ichiban.netlify.app/',
        permanent: false,
      },

    ]
  },
}
