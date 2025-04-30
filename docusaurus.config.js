const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: 'Prycing',
    tagline: 'Pricing done right',
    url: 'https://docs.prycing.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'prycing', // Usually your GitHub org/user name.
    projectName: 'prycing-docs', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/prycing/prycing-docs/edit/main/',
                },
                blog: {
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/prycing/prycing-docs/edit/main/',
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
                title: 'Prycing',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/prycing.svg',
                    href: 'https://prycing.eu/',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'introduction',
                        position: 'left',
                        label: 'Documentation',
                    },
                    // {to: '/blog', label: 'Blog', position: 'left'},
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/prycing/prycing-docs',
                            },
                        ],
                    },
                ],
                copyright: `© Copyright ${new Date().getFullYear()} – Prycing`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
});
