import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "জাভাস্ক্রিপ্ট গাইডবুক";
const APP_DEFAULT_TITLE = "জাভাস্ক্রিপ্ট গাইডবুক - A Comprehensive Guide";
const APP_TITLE_TEMPLATE = "%s – জাভাস্ক্রিপ্ট গাইডবুক";
const APP_DESCRIPTION =
  "জাভাস্ক্রিপ্ট শেখার জন্য একটি সম্পূর্ণ গাইড, যা বাংলা এবং ইংরেজি ভাষায় উপলব্ধ। এটি ডেভেলপারদের জাভাস্ক্রিপ্ট সহজভাবে শিখতে সাহায্য করবে।";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#F7DF1E", // JavaScript's brand color
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
