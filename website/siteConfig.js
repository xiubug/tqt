/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: '',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/logo-tqt.png',
    infoLink: 'http://www.sosout.com/',
    pinned: true
  }
]

const siteConfig = {
  editUrl: 'https://github.com/sosout/tqt/edit/master/docs/',
  title: 'TQT' /* title for your website */,
  tagline: '铜雀台 · 文档管理系统',
  url: 'http://www.sosout.com/' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'tqt',
  organizationName: 'sosout',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'README', label: '文档'},
    {doc: 'components-desc', label: '组件库'},
    {doc: 'apis/about/desc', label: 'API'},
    {search: true},
    {href: 'https://github.com/sosout/tqt', label: 'GitHub'}
  ],

  algolia: {
    apiKey: '45ccc89b4b1e0e9463c80a66f168ae6d',
    indexName: 'sosout_tqt'
  },

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo-tqt.png',
  footerIcon: 'img/logo-tqt.png',
  favicon: 'img/favicon.ico',

  /* colors for website */
  colors: {
    primaryColor: '#0000c2',
    secondaryColor: '#4a72ea'
  },

  /* custom fonts for website */
  /* fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  }, */

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: 'Copyright © ' + new Date().getFullYear() + ' ltp11',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    // theme: 'tomorrow-night',
    theme: 'Vs'
  },

  usePrism: true,

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    'https://buttons.github.io/buttons.js',
    'js/url.js',
    {
      src: 'js/tongji.js',
      async: true
    }
  ],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/logo-tqt.png',
  twitterImage: 'img/logo-tqt.png',

  scrollToTop: true,
  docsSideNavCollapsible: true

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
}

module.exports = siteConfig
