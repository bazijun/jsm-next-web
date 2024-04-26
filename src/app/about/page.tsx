import Image from "next/image";
import { HorizontalWavySvg, TelSvg } from "@/ui/svg";
import printingMachineSrc from "~/img/service_banner.jpg";
// import MapHtml from '../../../public/map.html'

export default function Blog() {
  return (
    <>
      <div className="w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10 filter">
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
      <div className="container mx-auto px-6 flex flex-wrap items-center pt-20 pb-60">
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
        <div className="w-full lg:flex-1 slide-in-fwd-bottom">
          <div className="mx-auto max-w-4xl pl-6 pr-4 py-8 bg-white rounded-xl shadow-2xl relative z-10">
            <div className="mx-auto max-w-2xl text-lg font-medium text-gray-600 leading-relaxed">
              <p className="indent-8">在成都这座历史悠久、文化底蕴深厚的城市中，我们，一家充满激情与创造力的自营印刷设计公司，正以专业和热情，为您的每一个设计需求提供量身定制的服务。我们深知，每一个设计作品都是您品牌形象的延伸，每一件印刷品都是您故事的讲述者，因此，我们致力于将您的愿景转化为现实，用我们的专业技能和创新思维，为您打造独一无二的视觉体验。</p>
              <p><b>我们的服务</b>, 项目涵盖了从图文设计制作到广告设计，从平面设计到文艺创作，再到全方位的印刷设计解决方案，我们力求在每一个细节上做到尽善尽美。无论是企业宣传册、产品包装、还是个性化的艺术品，我们都能提供一站式的服务，让您的创意在纸上绽放光彩。</p>
              <p><b>技术与设备</b>，我们始终走在行业的前沿。采用尖端的印刷技术，结合我们丰富的设计经验，确保每一件作品都能达到卓越品质，让您的创意以最完美的形态呈现在世人面前。我们的设备不仅先进，而且高效，能够满足您对速度和质量的双重要求。</p>
              <p><b>价格方面</b>，<mark>我们也与本地多家大型印刷厂建立了深度合作关系，通过自行帮您竞价，我们能够保证给您提供市场上最具竞争力的价格。我们相信，优质的设计和印刷服务不应该以牺牲价格为代价。因此，我们承诺，您得到的报价将是市场最优价，让您在享受高品质服务的同时，也能获得最实在的经济利益</mark></p>
              <p><b>诚信经营</b>, 是我们的核心价值观。我们坚信，只有建立在诚信基础上的合作，才能赢得客户的信任和支持。每一次合作，我们都坚持透明的原则，无论是设计过程还是印刷流程，我们都会与您保持密切的沟通，确保您的需求得到充分的理解和满足。我们的目标是与您建立长久的信赖关系，成为您最可靠的合作伙伴。</p>
              <p className="indent-8">选择我们，就是选择专业、选择品质、选择诚信。让我们一起，用设计和印刷的力量，讲述您的故事，展现您的风采。</p>
            </div>
          </div>
        </div>
      </div >
      {/* <iframe
        src="/map.html"
        className="h-64"
        style={{ border: 0 }}
        allowFullScreen
      /> */}
    </>
  );
}
