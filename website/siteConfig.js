const siteConfig = {
  title: 'Atlan',

  tagline: 'Build a CRUD API in 10 minutes. No kidding.',

  url: 'https://atlan.tenatek.com',
  baseUrl: '/',

  projectName: 'atlan',
  organizationName: 'tenatek',

  headerLinks: [
    { doc: 'installation', label: 'Getting started' },
    { doc: 'models', label: 'Guide' },
    { doc: 'models', label: 'API' },
    { href: 'https://github.com/tenatek/atlan', label: 'GitHub' }
  ],

  headerIcon: 'img/atlan-white.svg',
  footerIcon: 'img/atlan-white.svg',
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

  onPageNav: 'separate',

  ogImage: 'img/atlan-purple.svg',
  twitterImage: 'img/atlan-purple.svg'
};

module.exports = siteConfig;
