// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
let config = {
  title: 'Zumito',
  tagline: 'Speed focused discord.js framework',
  url: 'https://zumito-documentation.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ZumitoTeam', // Usually your GitHub org/user name.
  projectName: 'zumito-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  themes: [
    '@vegaprotocol/docusaurus-theme-github-codeblock'
  ],

  plugins: [
    
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fernandomema/zumito-docs/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Zumito',
        logo: {
          alt: 'Zumito',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'quick-start',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/fernandomema/zumito',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/quick-start',
              },
            ],
          },
          {
            title: 'External Links',
            items: [
              {
                label: 'Discord.js docs',
                href: 'https://discord.js.org/#/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zumito, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

// if folder ../zumito-framework exists, generate typedoc
if (require('fs').existsSync('../zumito-framework') && config && config.plugins) {
  config.plugins.push([
    'docusaurus-plugin-typedoc',

    // Plugin / TypeDoc options
    {
      entryPoints: ['../zumito-framework/src/index.ts'],
      tsconfig: '../zumito-framework/tsconfig.json',
      out: 'framework/tsdocs/',
      sidebar: {
        categoryLabel: 'TypeDoc',
        position: 100,
      },
    },
  ]);
}

module.exports = config;
