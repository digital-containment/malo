import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "SCP-1471 MalO ver1.0.0",
  tagline: "AI Companion App for Android",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://scp-1471.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "SCP-Foundation", // Usually your GitHub org/user name.
  projectName: "scp-1471-app", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    () => ({
      name: "inject-tag",
      injectHtmlTags() {
        return {
          headTags: [
            // Google Analytics
            {
              tagName: "script",
              attributes: { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-XWQJNEH9KG" },
            },
            {
              tagName: "script",
              innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XWQJNEH9KG');`,
            },
            {
              tagName: "script",
              innerHTML: `(function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104372760', 'ym');

    ym(104372760, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`,
            },
            {
              tagName: "noscript",
              innerHTML: `<div><img src="https://mc.yandex.ru/watch/104372760" style="position:absolute; left:-9999px;" alt="" /></div>`,
            },
          ],
        };
      },
    }),
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.jpg",
    navbar: {
      title: "SCP-1471",
      logo: {
        alt: "SCP-1471 MalO Application",
        src: "img/malo-logo.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://play.google.com/store/apps/details?id=com.scp.malo",
          label: "Download APK",
          position: "left",
        },
        { to: "/blog", label: "Updates", position: "left" },
        { to: "/contacts", label: "Contact", position: "left" },
        { to: "/privacy", label: "Privacy", position: "right" },
        {
          type: "html",
          position: "right",
          value: `<a href="https://github.com/SCP-Foundation/scp-1471-app" target="_blank" rel="noopener noreferrer"
           class="navbar__item navbar__link">GitHub<svg 
           width="13.5" height="13.5" aria-hidden="true" 
           viewBox="0 0 24 24" 
           class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>`,
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Quick Start",
              to: "/docs/intro",
            },
            {
              label: "Installation",
              to: "/docs/installation",
            },
            {
              label: "FAQ",
              to: "/docs/faq",
            },
          ],
        },
        {
          title: "SCP Foundation",
          items: [
            {
              label: "SCP-1471 Article",
              href: "http://scp-wiki.wikidot.com/scp-1471",
            },
            {
              label: "Privacy Policy",
              to: "/privacy",
            },
            {
              label: "Terms of Service",
              to: "/terms",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "GitHub Issues",
              href: "https://github.com/digital-containment/malo/issues",
            },
            {
              label: "Updates",
              to: "/blog",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
