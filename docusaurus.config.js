// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DailyPB',
  tagline: 'Pickleball session management made easy',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chuckyte-prog',
  projectName: 'dailypb-site',

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'DailyPB',
          src: 'img/dailypb-logo.png',
        },
        items: [
          {
            to: '/docs/',
            position: 'left',
            label: 'Help Center',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://dailypb.com',
            label: 'DailyPB.com',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Help Center',
            items: [
              { label: 'Browse All Topics', to: '/docs/' },
              { label: 'Payments', to: '/docs/payments/automatic-payments' },
              { label: 'Sessions', to: '/docs/sessions/creating-recurring-events' },
              { label: 'Session Apps', to: '/docs/session-apps/flex-play' },
            ],
          },
          {
            title: 'DailyPB',
            items: [
              { label: 'DailyPB.com', href: 'https://dailypb.com' },
              { label: 'Host Dashboard', href: 'https://dailypb.com/host' },
              { label: 'Blog', to: '/blog' },
            ],
          },
          {
            title: 'Contact',
            items: [
              { label: 'WhatsApp (fastest)', href: 'https://wa.me/16198952588' },
              { label: 'Email Support', href: 'mailto:chuck@dailypb.com' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DailyPB. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
