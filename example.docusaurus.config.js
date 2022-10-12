// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme  = require('prism-react-renderer/themes/github');
const darkCodeTheme   = require('prism-react-renderer/themes/dracula');
const url             = 'https://openflexo.org'
const baseUrl         = '/my-site/'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Openflexo is cool',
  url: url,
  baseUrl: baseUrl,
  onBrokenLinks: 'warn',
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
        // docs: {
        //   includeCurrentVersion:false,
        // },
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
            to: '/javadoc', 
            label: 'Javadoc', 
            position: 'left'
          },
          {
            label: 'Contributors', 
            to: 'https://openflexo.org/contributors',
            position: 'left'
          },
          {
            label: 'Downloads', 
            to: 'https://openflexo.org/downloads', 
            position: 'left'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right'
          },
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
            ],
          },
          {
            items: [
              {
                html: `
                  <div class="tagline">
                  <p>Something is broken? let us know</p>
                    <a class="githubButton" href="https://github.com/openflexo-team/website/issues" target="_blank">
                      <img alt="GitHub logo" height="22" src="${baseUrl}img/github.svg" title="GitHub" width="22">  Start a Github issue
                    </a>
                  </div>
                  `,
              },
            ]
          }
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
