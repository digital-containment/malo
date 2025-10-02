import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Основная документация MalO
  tutorialSidebar: [
    "intro",
    "installation",
    "usage",
    "technical-specs",
    "about-scp",
    "faq",
    {
      type: "category",
      label: "📚 Дополнительные материалы",
      items: ["tutorial-basics/create-a-document", "tutorial-basics/create-a-page"],
    },
  ],
};

export default sidebars;
