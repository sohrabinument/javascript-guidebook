import { LanguageSwitcher } from "./components/LanguageSwitcher";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logo: <span>জাভাস্ক্রিপ্ট গাইডবুক</span>,
  project: {
    link: "https://github.com/yourusername/javascript-guidebook",
  },
  docsRepositoryBase:
    "https://github.com/yourusername/javascript-guidebook/tree/main",
  footer: {
    text: `MIT ${new Date().getFullYear()} © জাভাস্ক্রিপ্ট গাইডবুক.`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – জাভাস্ক্রিপ্ট গাইডবুক",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="জাভাস্ক্রিপ্ট গাইডবুক - A comprehensive guide to JavaScript"
      />
      <meta name="og:title" content="জাভাস্ক্রিপ্ট গাইডবুক" />
    </>
  ),
  search: {
    placeholder: "Search documentation...",
  },
  feedback: {
    content: null,
  },
  banner: {
    key: "2.0-release",
    text: (
      <a href="https://github.com/md-sohrab-hossain/" target="_blank">
        🎉 follow my github →
      </a>
    ),
    dismissible: true,
  },
  toc: {
    backToTop: true,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
  navbar: {
    extraContent: <LanguageSwitcher />,
  },
};
