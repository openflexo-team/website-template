// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme  = require('prism-react-renderer/themes/github');
const darkCodeTheme   = require('prism-react-renderer/themes/dracula');
const url             = 'https://docusaurus.openflexo.org'
const baseUrl         = '/my-site/'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: url,
  baseUrl: baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Documentation',
          },
          {
            label: 'Contributors', 
            to: 'https://docusaurus.openflexo.org/contributors',
            position: 'left'
          },
          {
            label: 'Downloads', 
            to: 'https://docusaurus.openflexo.org/downloads', 
            position: 'left'
          },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right'
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Production tools',
            items: [
              {
                label: 'Jenkins production environment',
                to: 'https://jenkins.openflexo.org',
              },
              {
                label: 'Continuous/nightly builds',
                to: 'https://downloads.openflexo.org/openflexo/',
              },
              {
                label: 'Openflexo artifactory',
                to: 'https://maven.openflexo.org/artifactory',
              },
              {
                label: 'Sonar',
                to: 'https://sonar.openflexo.org/',
              },
            ],
          },
          {
            title: 'Javadoc',
            // items: [
            //   {
            //     label: 'Components 1',
            //     to: url + baseUrl + 'javadoc/component-1/',
            //   },
            // ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Openflexo.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      require.resolve('docusaurus-lunr-search'),
    ]
};

module.exports = config;
