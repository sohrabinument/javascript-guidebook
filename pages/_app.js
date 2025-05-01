import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/providers/LanguageProvider";

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
