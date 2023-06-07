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
            'https://github.com/ZumitoTeam/zumito-docs/tree/main/packages/create-docusaurus/templates/shared/',
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
          src: 'https://images-ext-2.discordapp.net/external/kPORDs0-YzHMbuef3WOcTuC-hRRy4noiukIFdUgqwPs/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/878950861122985996/d05ce5c0de25fd9afb4f5492f31f21fe.webp?width=800&height=800',
          width:'40',
          height:'40',
        },
        items: [
          {
            type: 'doc',
            docId: 'quick-start',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/fernandomema/zumito',
            label: 'GitHub ',
            position: 'left',
          },
        ],
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
