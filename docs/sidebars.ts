// @ts-ignore
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    "getting-started",
    "theming",
    {
      type: "category",
      label: "Layout Components",
      collapsed: false,
      collapsible: false,
      items: [
        "components/container",
        "components/box",
        "components/stack",
        "components/spacer",
        "components/divider",
      ],
    },
    {
      type: "category",
      label: "Typography",
      collapsed: false,
      collapsible: false,
      items: ["components/text"],
    },
    {
      type: "category",
      label: "Form Components",
      collapsed: false,
      collapsible: false,
      items: [
        "components/input",
        "components/password-input",
        "components/text-area",
        "components/select",
        "components/checkbox",
        "components/switch",
        "components/radio-group",
        "components/slider",
        "components/stepper-input",
        "components/date-picker",
        "components/masked-input",
        "components/tag-input",
        "components/otp-input",
      ],
    },
    {
      type: "category",
      label: "Interactive Components",
      collapsed: false,
      collapsible: false,
      items: ["components/button", "components/accordion"],
    },
    {
      type: "category",
      label: "Feedback Components",
      collapsed: false,
      collapsible: false,
      items: ["components/slide-down-toast", "components/snackbar"],
    },
    {
      type: "category",
      label: "Form Management",
      collapsed: false,
      collapsible: false,
      items: [
        "components/form",
        "components/controlled-input",
        "components/controlled-select",
      ],
    },
  ],
};

export default sidebars;
