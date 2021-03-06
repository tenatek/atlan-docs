const siteConfig = {
  title: 'Atlan',

  tagline: 'Build a CRUD API in 10 minutes. No kidding.',

  url: 'https://atlan.tenatek.com',
  baseUrl: '/',

  projectName: 'atlan-docs',
  organizationName: 'tenatek',

  headerLinks: [
    { doc: 'installation', label: 'Getting started' },
    { doc: 'models', label: 'Guide' },
    // { doc: 'models', label: 'API' },
    { href: 'https://github.com/tenatek/atlan', label: 'GitHub' }
  ],
  cleanUrl: true,

  headerIcon: 'img/logo-white.png',
  disableHeaderTitle: true,
  footerIcon: 'img/triangle-white.png',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#9456ab',
    secondaryColor: '#d1ccdc'
  },

  copyright:
    'Copyright © ' + new Date().getFullYear() + ' Ludovic Cyril Michel',

  highlight: {
    theme: 'default'
  },

  algolia: {
    apiKey: 'f27d42b42859a69aa7a862f877f39125',
    indexName: 'atlan',
    algoliaOptions: {
      facetFilters: ['language:en']
    }
  },

  scripts: ['https://embed.runkit.com', '/js/custom.js'],

  gaTrackingId: 'UA-116065494-2',
  gaGtag: true,

  onPageNav: 'separate',

  ogImage: 'img/cover.jpg',
  twitterImage: 'img/cover.jpg'
};

module.exports = siteConfig;
