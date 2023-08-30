import Image from "next/image";
import { HorizontalWavySvg, TelSvg } from "@/ui/svg";
import printingMachineSrc from "~/img/printing-machine.png";
// import MapHtml from '../../../public/map.html'

export default function Blog() {
  return (
    <>
      <div className="w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10">
        <Image
          fill
          alt="关于-banner"
          src={printingMachineSrc}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="container max-w-4xl mx-auto text-center relative z-20">
          <h1 className="text-3xl lg:text-7xl mb-4 font-bold uppercase italic text-white text-shadow slide-in-bck-center">
            关于我们
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-6 flex flex-wrap items-center py-24">
        <div className="w-full lg:flex-1">
          <div className="uppercase text-base text-gray-700 tracking-widest slide-in-bck-center">
            有印刷设计需求?
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-display mt-3">
            <span className="slide-in-left inline-block">
              <TelSvg />
              立刻联系：
            </span>
            <span className="text-4xl text-right block text-shadow mt-4 md:text-5xl lg:mt-0 lg:inline-block slide-in-right">
              13908178322
            </span>
          </h2>
        </div>
        <div className="w-full lg:w-auto text-right lg:text-center slide-in-bottom">
          <HorizontalWavySvg />
        </div>
        <div className="w-full lg:flex-1 slide-in-bck-center">
          <p>
            我们是一家位于成都的自营印刷设计公司，我们提供专业的印刷设计服务，包括图文设计制作、广告设计、平面设计、文艺创作等。我拥有先进的印刷设备和技术，可以为你打造高品质的印刷品，满足你的各种需求。供全方位的印刷设计解决方案。我是一家诚信、专业、创新的印刷设计厂，我期待与你建立长期的合作关系，为你提供优质的印刷设计服务！
          </p>
        </div>
      </div>
      {/* <iframe
        src={MapHtml as unknown as string}
        className="h-64"
        style={{ border: 0 }}
        allowFullScreen
      /> */}
    </>
  );
}
