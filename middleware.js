import { NextResponse } from "next/server";

export function middleware(request) {
  const { origin } = request.nextUrl;
  const selectedLanguage =
    request.cookies.get("selectedLanguage")?.value || "bn";

  const routes = {
    bn: "/javascript-guide-en",
    en: "/javascript-guide-bn",
  };

  if (selectedLanguage) {
    return NextResponse.redirect(new URL(routes[selectedLanguage], origin));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/javascript-guide-en", "/javascript-guide-bn"],
};
