import "@/styles/custom.css";
import { useRouter } from "next/router";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import SidebarToggleButton from "./components/SidebarToggleButton";

const Logo = () => {
  const { asPath } = useRouter();
  const isEnglish = asPath.includes("-en");
  return isEnglish ? "Javascript GuideBook" : "জাভাস্ক্রিপ্ট গাইডবুক";
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logo: Logo,
  project: {
    link: "https://github.com/md-sohrab-hossain/javascript-guidebook",
  },
  docsRepositoryBase:
    "https://github.com/md-sohrab-hossain/javascript-guidebook",
  footer: {
    text: `Sohrab Hossain ${new Date().getFullYear()} © Javascript GuideBook.`,
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
    emptyResult: "No results found. Try different keywords.",
  },
  toc: {
    backToTop: true,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    toggleButton: <SidebarToggleButton />,
  },
  navbar: {
    extraContent: <LanguageSwitcher />,
  },
};
