import "@/app/globals.css";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
