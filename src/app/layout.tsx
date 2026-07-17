import Header from "@/components/sections/header";
import "./globals.css";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/sections/footer";
import ThemeContextProvider from "@/context/theme-context";

const sans = Source_Sans_3({ subsets: ["latin"] });

const siteTitle = "Nethan's Website";
const siteDescription = "This is Nethan's personal website.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: siteTitle,
  authors: [{ name: "Nethaneel Patricio Linggar" }],
  creator: "Nethaneel Patricio Linggar",
  metadataBase: new URL("https://nethans-website.net/"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth relative" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem("theme");
                if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                  document.documentElement.classList.add("dark");
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${sans.className} relative bg-[#E8EBEA] pt-28 text-black dark:bg-[#0A0A0A] dark:text-white dark:text-opacity-90 sm:pt-36`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#2B2C28] blur-[10rem] dark:bg-[#2B2C28] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#EB4633] blur-[10rem] dark:bg-[#AA3E32] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
