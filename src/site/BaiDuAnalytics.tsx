"use client";
import Script from "next/script";
/** 百度站点分析 */
const BaiDuAnalytics = () => {
  return (
    <>
      <Script
        id="baidu-tongji"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "<https://hm.baidu.com/hm.js?${process.env.BAIDU_TONGJI}>";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
          `,
        }}
      />
    </>
  );
};
export default BaiDuAnalytics;

