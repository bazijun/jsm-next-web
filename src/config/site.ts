/** @see `https://juejin.cn/post/7297665681017307190` */
const baseSiteConfig = {
  name: "成都金双茂印刷设计",
  description: "成都最具有性价比的印刷设计一站式服务平台",
  url: `${process.env.SITE_URL}`,
  keywords: [
    "成都印刷",
    "包装加工",
    "印刷设计",
    "广告设计",
    "横幅海报",
    "书籍画册",
    "各色名片",
    "教育材料",
    "办公纸张",
  ],
  authors: [
    {
      name: "bazijun",
      url: "https://bazijun.top",
    }
  ],
  creator: '@bazijun',
  themeColor: '#fff',
  // 可以在这个网站生成所有平台的ico：<https://realfavicongenerator.net/>
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // 网站展示图
  ogImage: `${process.env.SITE_URL}/g.jpg`,
  links: {
    twitter: "https://twitter.com/weijunext",
    github: "https://github.com/weijunext/nextjs-learn-demos",
  },
  formatDetection: { telephone: "yes" },
}

export const siteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
