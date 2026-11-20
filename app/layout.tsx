import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-outfit"
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"], variable: "--font-ovo"
});

export const metadata: Metadata = {
  title: "Michael Blanco's Portfolio",
  description: "GitHub profile and portfolio of Michael Blanco, a software engineer and web developer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className='scroll-smooth '>
      <body   
      className={`${outfit.variable} ${ovo.variable} h-full antialiased leading-8 
      overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >{children}
      </body>
    </html>
  );
}
