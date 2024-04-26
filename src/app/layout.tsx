import "./globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import policeBadgeSrc from "~/img/police-badge.png";
import jsmLogoSrc from "~/img/jsm-logo.png";
import Link from "next/link";
import NavBar from "@/ui/navBar";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  themeColor: siteConfig.themeColor,
  icons: siteConfig.icons,
  formatDetection: siteConfig.formatDetection,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="canonical" href={process.env.SITE_URL} />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen">
          <nav className="w-full bg-white md:pt-0 px-6 shadow-lg z-20 border-b border-gray-400 sticky top-0">
            <div className="container mx-auto flex justify-between items-center text-sm md:text-md">
              <header className="w-full text-center md:p-0 flex items-center">
                <div className="rounded-[50%] overflow-hidden">
                  <Image src={jsmLogoSrc} alt="logo" priority width={25} height={25} />
                </div>
                <Link
                  href="/"
                  className="py-3 pl-2 w-full text-lg text-center md:text-left md:w-auto text-gray-600 no-underline flex justify-start items-center"
                >
                  成都金双茂印刷设计
                </Link>
              </header>
              <NavBar />
            </div>
          </nav>
          {children}
          <footer className="w-full bg-white px-6 border-t">
            <div className="container mx-auto max-w-4xl py-3 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm">
              <div className="flex gap-1 items-center">
                <Image
                  //   src="https://cdn.bazijun.top/img/police_beian.png"
                  src={policeBadgeSrc}
                  alt="警徽"
                  className="dark:invert"
                  width={16}
                  height={16}
                />
                <a href="http://beian.miit.gov.cn/" className="hover:underline">
                  蜀ICP备2023012930号
                </a>
              </div>
              <div className="md:p-0 text-center md:text-right text-xs">
                <a
                  href="tel:13908178322"
                  className="text-black no-underline hover:underline ml-4"
                >
                  联系我们：13908178322
                </a>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
