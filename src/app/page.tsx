import { ContactButtons, WxButtonWarp } from "@/ui/ContactButtons";
import { BigCommaSvg, HorizontalWavySvg, BusinessServiceSvgList, TelSvg, VerticalWavySvg } from "@/ui/svg";
import Image, { StaticImageData } from "next/image";
import yhLogoSrc from "~/img/yh-logo.jpg";
import xxerLogo from "~/img/xxer-logo.png";
import lhwsLogo from "~/img/lhws-logo.png";
import printingMachineSrc from "~/img/printing-machine.png";
import cd2 from "~/img/cd-3.jpg";
import zy1 from "~/img/zy-1.jpg";
import cd3 from "~/img/stand1.jpg";
import dz2 from "~/img/dz-2.jpg";
import sz1 from "~/img/sz-1.jpg";
import hk1 from "~/img/hk-1.jpg";
import mp1 from "~/img/mp-1.jpg";
import box16 from "~/img/box16.jpg";
import tag03 from "~/img/auto03.jpg";
import pj1 from "~/img/pj-1.jpg";
import tl1 from "~/img/calendar2.jpg";
import tz2 from "~/img/bar01.jpg";
import book1 from "~/img/book-1.jpg";
import zhihezi from "~/img/zhz.jpg";
import sms from "~/img/sms.jpg";
import icbLogo from "~/img/icb.png"
import equipmentsBanner from "~/img/equipments_banner.jpg"
import equipments_01Five_big from '~/img/equipments_01Five_big.jpg'
import equipments_04High_big from '~/img/equipments_04High_big.jpg'
import equipments_06Flexographic_big from '~/img/equipments_06Flexographic_big.jpg'
import equipments_02Intermittent_big from '~/img/equipments_02Intermittent_big.jpg'
import { PRIMARY_COLOR } from "@/config/theme";

type Poster = {
  logo: StaticImageData;
  name: string;
  des?: string;
  className?: string;
  style?: React.CSSProperties;
}

/** 首页广告 */
const MainAdList: Poster[] = [
  { name: "贺卡", logo: hk1 },
  { name: "收据", logo: pj1 },
  { name: "立牌广告", logo: cd3 },
  { name: "手提袋", logo: dz2 },
  { name: "台历", logo: tl1 },
  { name: "笔记本", logo: book1 },
  { name: "名片", logo: mp1 },
  { name: "条码贴纸", logo: tz2, className: 'hidden' },
  { name: "广告扇", logo: sz1 },
  { name: "折页", logo: zy1 },
  { name: "礼品盒", logo: box16 },
  { name: "食品标签", logo: tag03 },
  { name: "传单", logo: cd2 },
  { name: "纸盒", logo: zhihezi },
  { name: "说明书", logo: sms },
];

/** 合作伙伴 */
const PartnersList: Poster[] = [
  {
    logo: yhLogoSrc,
    name: '永亨科技集团',
    des: '通过精心设计的宣传册和产品包装，我们帮助永亨科技集团加强了其作为国家级绿色工厂示范单位的品牌形象，同时通过环保材料的使用，增强了其在环保家具领域的市场竞争力，提升了客户对永亨科技集团可持续发展理念的认同。',
  },
  {
    logo: xxerLogo,
    name: '肖小儿国医馆',
    des: '我们为肖小儿国医馆设计并印刷了一系列宣传物料，包括宣传单页和教育手册，这些物料采用了温馨色调和卡通元素，不仅吸引了家长和孩子的注意，也有效传达了中医文化和国医馆的专业服务，提升了品牌亲和力和客户信任度。',
    className: '!bg-[#EFE9D7]',
    style: { width: '80%' }
  },
  {
    logo: lhwsLogo,
    name: '龙华社区卫生服务中心',
    des: '我们为龙华社区卫生服务中心设计并印刷了健康教育宣传册和医疗指南，这些物料以易于理解的视觉设计，不仅增强了社区居民的健康意识，也美化了医疗环境，提升了中心的服务形象和患者满意度，为社区卫生服务的推广和教育做出了积极贡献。',
  },
  {
    logo: icbLogo,
    name: '成都爱车保信息技术有限公司',
    des: '为成都爱车保信息技术有限公司提供的印刷服务包括企业宣传册和商务名片，这些印刷品结合了公司的技术优势和创新服务，通过高端的印刷工艺，显著提升了公司在出行安全保障服务领域的专业形象和市场影响力。',
    style: { width: '80%' }
  }
]

/** 一条龙服务 */
const BusinessServiceList: Array<Omit<Poster, 'logo'> & { Svg: React.FC<React.SVGAttributes<SVGSVGElement>> }> = [
  {
    Svg: BusinessServiceSvgList.Bj,
    name: '24小时内报价',
    des: '您可以通过微信或QQ直接联系上我们，也可直接致电我们，我们承诺第一时间回复',
  },
  {
    Svg: BusinessServiceSvgList.Sjjy,
    name: '设计建议',
    des: '只有概念但未有具体设计？没问题！我们的设计师为您会提供最合适的设计方案。',
  },
  {
    Svg: BusinessServiceSvgList.Ysjy,
    name: '印刷建议',
    des: '材料，颜色，加工，包装，运输…印刷所涉及的范筹太广，太烦复…放心，烦复的印刷问题都由我们来办妥！',
  },
  {
    Svg: BusinessServiceSvgList.Zrkf,
    name: '专人客服',
    des: '由收稿到送货，都由我们的专业人员为您跟进。整个过程中您只需找同一个人便一清二楚。',
  },
  {
    Svg: BusinessServiceSvgList.Mfsh,
    name: '免費送貨',
    des: '无论货物大小，数量多寡，是打稿还是做大货，我们都会安排送到上门，无需劳动，而且费用全免！',
  },
  {
    Svg: BusinessServiceSvgList.Shfw,
    name: '售后服务',
    des: '收到货物并不等于我们的服务巳完结。相反，您可以随时联络我们并享受我们的180天售后服务承诺',
  },
]

/** 先进设备 */
export const EquipmentList: Poster[] = [
  {
    logo: equipments_01Five_big,
    name: 'equipments_01Five_big',
  },
  {
    logo: equipments_04High_big,
    name: 'equipments_04High_big',
  },
  {
    logo: equipments_06Flexographic_big,
    name: 'equipments_06Flexographic_big',
  },
  {
    logo: equipments_02Intermittent_big,
    name: 'equipments_02Intermittent_big',
  },
]

export default function Home() {
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
          <h1 className="text-3xl lg:text-7xl mb-4 font-bold uppercase italic text-primary text-shadow slide-in-bck-center">
            成都老字号印刷设计
          </h1>
          <p className="text-lg lg:text-3xl md:text-lg text-center font-bold uppercase italic text-primary text-shadow slide-in-bck-center">
            深耕行业二十余载
          </p>
          <ContactButtons />
          SvgList</div>
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
      <div className="p-4 grid grid-cols-2 grid-rows-5 md:grid-cols-5 md:grid-rows-2 gap-4 md:px-16">
        {MainAdList?.map(({ name, logo, className = '' }, index) => (
          <a
            href="#"
            key={index}
            className={`relative block bg-black aspect-square md:block md:col-span-1 ${className}`}
          >
            <div className="absolute top-0 right-0 left-0 m-auto z-10 text-center">
              <div className="inline-block w-full bg-black/20 text-gray-700 text-sm tracking-widest font-heading px-4 py-2">
                <h3 className="font-display text-2xl text-white">{name}</h3>
              </div>
            </div>
            <Image
              fill
              alt={name}
              src={logo}
              priority
              className="absolute inset-0 w-full h-full object-cover"
            />
          </a>
        ))}
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-6 md:grid-rows-3 md:px-80 gap-8">
        <div className="text-gray-700 text-center md:col-span-6 flex items-center justify-center">
          <div className="relative z-10 pt-12">
            <h3 className="font-display font-semibold text-3xl mt-2 text-brand">印刷设计一条龙服务</h3>
            <p className="mt-3 mx-auto max-w-md">
              我们专注印刷20年，为您解决一切印刷上的需要，令您能把专注力集中在其他更重要的事上！
            </p>
          </div>
        </div>
        {
          BusinessServiceList?.map(({ Svg, name, des }, index) => <div key={index} className="md:col-span-2 md:row-span-1 relative">
            <div className="grid grid-cols-2 md:grid-cols-1 items-center justify-items-center">
              <Svg width={50} height={50} fill={PRIMARY_COLOR} />
              <div className="font-bold">{name}</div>
              <div className="text-gray-500 col-span-2 md:col-span-1">{des}</div>
            </div>
          </div>)
        }
      </div>
      <div className="container mx-auto px-6 pt-16 pb-12">
        <h2 className="font-display font-semibold text-3xl text-center text-brand">合作伙伴</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mt-12 text-gray-700">
          {
            PartnersList.map(({ logo, name, des, className = '', style = {} }, index) => {
              return <div className="relative" key={index}>
                <div className={`cooperation-logo-box ${className}`}>
                  <Image
                    fill={style.width ? false : true}
                    alt={name}
                    style={{ objectFit: "contain", ...style }}
                    src={logo}
                  />
                </div>
                <div className="relative z-10 text-[0.95em] flex flex-col items-center">
                  <div className="text-base font-bold pt-4 pb-1">{name}</div>
                  <VerticalWavySvg />
                  <span className="text-gray-600">{des}</span>
                  {/* <BigCommaSvg /> */}
                </div>
              </div>

            })
          }
        </div>
      </div>
      <div className="h-10 md:h-10 relative mt-10">
        <Image
          fill
          alt="equipments_01Five_big"
          src={equipmentsBanner}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-8 gap-4 md:h-screen pb-20">
        <div className="text-gray-700 text-center md:col-span-4 md:row-span-4 flex items-center justify-center">
          <div className="relative z-10 p-12">
            <h3 className="font-display font-semibold text-3xl mt-2 text-brand">先进设备</h3>
            <p className="mt-3 mx-auto max-w-md">
              本公司拥有德国KBA五色+UV印刷机，多台日本五色+过油间歇式轮转印刷机，六色全轮转商标印刷机，四色商标士担机，全自动圈装丝网印刷机，半自动张装丝网印刷机，烫金机，平啤机，复膜机，分切机，双啤头膜切机等，配置了世界印刷行业先进的电脑控制中心，把人与机械联系起来，生产效率高、灵活性强的触摸屏技术，可以集中、并且快速地控制印刷机的所有功能，显著地提高生产的效率。
            </p>
            <WxButtonWarp>
              <div
                className="inline-block bg-primary/60 text-white text-sm tracking-widest font-heading px-8 py-4 mt-6"
              >
                立即咨询
              </div>
            </WxButtonWarp>
          </div>
        </div>
        {EquipmentList?.map(({ name, logo }, index) => <div key={index} className="h-64 md:h-auto col-span-2 row-span-2 relative">
          <Image
            fill
            alt={name}
            src={logo}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>)}
      </div>
    </>
  );
}
