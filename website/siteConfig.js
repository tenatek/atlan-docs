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

  scripts: ['https://buttons.github.io/buttons.js'],

  gaTrackingId: 'UA-116065494-2',
  gaGtag: true,

  onPageNav: 'separate',

  ogImage: 'img/logo-purple.png',
  twitterImage: 'img/logo-purple.png'
};

module.exports = siteConfig;
