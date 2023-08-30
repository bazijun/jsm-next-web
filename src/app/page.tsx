import { ContactButtons } from "@/ui/ContactButtons";
import { BigCommaSvg, HorizontalWavySvg, TelSvg, VerticalWavySvg } from "@/ui/svg";
import Image, { StaticImageData } from "next/image";
import yhLogoSrc from "~/img/yh-logo.jpg";
import xxerLogo from "~/img/xxer-logo.png";
import lhwsLogo from "~/img/lhws-logo.png";
import printingMachineSrc from "~/img/printing-machine.png";
import cd2 from "~/img/cd-2.jpg";
import zy1 from "~/img/zy-1.jpg";
import cd3 from "~/img/cd-3.jpg";
import dz2 from "~/img/dz-2.jpg";
import sz1 from "~/img/sz-1.jpg";
import hk2 from "~/img/hk-2.jpg";
import hk3 from "~/img/hk-3.jpg";
import hk4 from "~/img/hk-4.jpg";
import mp1 from "~/img/mp-1.jpg";
import mp2 from "~/img/mp-2.jpg";
import pj1 from "~/img/pj-1.jpg";
import tl1 from "~/img/tl-1.jpg";
import tz2 from "~/img/tz-2.jpg";
import book1 from "~/img/book-1.jpg";

type ADListType = Array<{ name: string; url: StaticImageData; className?: string }>;

export default function Home() {
  const MainAdList: ADListType = [
    { name: "贺卡", url: hk2 },
    { name: "收据", url: pj1 },
    { name: "宣传单", url: cd3 },
    { name: "手提袋", url: dz2 },
    { name: "台历", url: tl1 },
    { name: "笔记本", url: book1 },
    { name: "名片", url: mp1 },
    { name: "贴纸标签", url: tz2 },
    { name: "广告扇", url: sz1 },
    { name: "折页", url: zy1 },
  ];
  return (
    <>
      <div className="w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10">
        <Image
          fill
          alt="首页-banner"
          src={printingMachineSrc}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          priority
        />
        <div className="container max-w-4xl mx-auto text-center relative z-20">
          <h1 className="text-3xl lg:text-7xl mb-4 font-bold uppercase italic text-white text-shadow slide-in-bck-center">
            成都老字号印刷设计
          </h1>
          <p className="text-lg lg:text-3xl md:text-lg text-center font-bold uppercase italic text-white text-shadow slide-in-bck-center">
            深耕行业二十余载
          </p>
          <ContactButtons />
        </div>
      </div>
      <div className="container mx-auto px-6 flex flex-wrap justify-center items-center py-16">
        <div className="hidden lg:block slide-in-bottom">
          <HorizontalWavySvg />
        </div>
        <div>
          <div className="uppercase text-base text-gray-700 tracking-widest slide-in-bck-center">
            有印刷设计需求?
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold font-display mt-3">
            <span className="slide-in-left inline-block">立即联系, 直接跟老板谈！</span>
            <span className="text-4xl text-right block text-shadow mt-4 md:text-5xl lg:mt-0 lg:inline-block slide-in-right mr-7">
              <TelSvg />
              13908178322
            </span>
          </h2>
        </div>
        <div className="hidden lg:block slide-in-bottom">
          <HorizontalWavySvg className="lg:rotate-[-90deg]" />
        </div>
      </div>
      <div className="p-4 grid grid-cols-2 grid-rows-5 md:grid-cols-5  md:grid-rows-2 gap-4 md:px-16">
        {MainAdList?.map((ad, index) => (
          <a
            href="#"
            key={index}
            className="relative block bg-black aspect-square  md:col-span-1"
          >
            <div className="absolute top-0 right-0 left-0 m-auto z-10 text-center">
              <div className="inline-block w-full bg-black/20 text-gray-700 text-sm tracking-widest font-heading px-4 py-2">
                <h3 className="font-display text-2xl text-white">{ad.name}</h3>
              </div>
            </div>
            <Image
              fill
              alt={ad.name}
              src={ad.url}
              priority
              className="absolute inset-0 w-full h-full object-cover"
            />
          </a>
        ))}
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-screen">
        <div className="text-gray-700 text-center md:col-span-2 flex items-center justify-center">
          <div className="relative z-10 p-12">
            <div className="uppercase text-sm text-gray-700 tracking-widest">
              Limited Run
            </div>
            <h3 className="font-display font-semibold text-3xl mt-2">Moisturise</h3>
            <p className="mt-3 mx-auto max-w-md">
              Whether in the sun or on the couch, hydration is key to maintaining happy,
              healthy skin.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-200 text-white text-sm tracking-widest font-heading px-8 py-4 mt-6"
            >
              Shop now
            </a>
          </div>
        </div>
        <div className="h-64 md:h-auto md:col-span-2 md:row-span-2 relative">
          <Image
            fill
            alt="微信二维码"
            src={hk2}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="h-64 md:h-auto col-span-1 row-span-1 relative">
          <Image
            fill
            alt="微信二维码"
            src={hk3}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="h-64 md:h-auto col-span-1 row-span-1 relative">
          <Image
            fill
            alt="微信二维码"
            src={hk4}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <h2 className="font-display font-semibold text-3xl text-center">合作伙伴</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mt-12">
          <div className="relative">
            <div className="cooperation-logo-box">
              <Image
                fill
                alt="永亨logo"
                style={{ objectFit: "contain" }}
                src={yhLogoSrc}
              />
            </div>
            <div className="relative z-10 text-sm flex items-center justify-end">
              <HorizontalWavySvg className="w-6 h-6" />
              <span>永亨科技集团</span>
            </div>
            <VerticalWavySvg />
          </div>
          <div className="relative">
            <div className="cooperation-logo-box">
              <Image
                fill
                alt="肖小儿国logo"
                style={{ objectFit: "contain" }}
                src={xxerLogo}
              />
            </div>
            <div className="relative z-10 text-sm flex items-center justify-end">
              <BigCommaSvg />
              <span>Elle Spearman</span>
            </div>
            <VerticalWavySvg />
          </div>
          <div className="relative">
            <div className="cooperation-logo-box">
              <Image
                fill
                alt="成都市龙泉驿区龙华社区卫生服务中心Logo"
                style={{ objectFit: "contain" }}
                src={lhwsLogo}
              />
            </div>
            <div className="relative z-10 text-sm flex items-center justify-end">
              <BigCommaSvg />
              <span></span>
            </div>
            <VerticalWavySvg />
          </div>
          <div className="relative">
            <div className="cooperation-logo-box">
              <Image fill alt="学校" style={{ objectFit: "contain" }} src={lhwsLogo} />
            </div>
            <div className="relative z-10 text-sm flex items-center justify-end">
              <BigCommaSvg />
              <span>为成都本地多所中小学以及教育机构提供环保且清晰的教学资料</span>
            </div>
            <VerticalWavySvg />
          </div>
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-screen">
        <div className="h-64 md:h-auto md:col-span-2 md:row-span-2 relative">
          <Image
            fill
            alt="微信二维码"
            src={mp1}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="text-gray-700 text-center md:col-span-2 flex items-center justify-center">
          <div className="relative z-10 p-12">
            <div className="uppercase text-sm text-gray-700 tracking-widest">
              Only the best
            </div>
            <h3 className="font-display font-semibold text-3xl mt-2">Cleansers</h3>
            <p className="mt-3 mx-auto max-w-md">
              Were humans too and we understand that skin care and cosmetics should
              rejuvenate and rehydrate in the short and long run.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-200 text-white text-sm tracking-widest font-heading px-8 py-4 mt-6"
            >
              Shop now
            </a>
          </div>
        </div>
        <div className="h-64 md:h-auto col-span-1 row-span-1 relative">
          <Image
            fill
            alt="微信二维码"
            src={mp2}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="h-64 md:h-auto col-span-1 row-span-1 relative">
          <Image
            fill
            alt="微信二维码"
            src={tl1}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
