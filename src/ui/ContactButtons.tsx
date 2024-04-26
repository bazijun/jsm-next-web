"use client";

import { useClientType, useMounted } from "@/util";
import Image from "next/image";
import { Modal } from "antd";
import qrCodeSrc from "~/img/qr-code.png";
import { QQSvg, TelSvg, WxSvg } from "./svg";
import "@/styles/ui.css";
import { Loading } from "./dotLoading";

const useContactButtons = () => {
  const { isH5, isPC, isWX } = useClientType();
  const isMounted = useMounted();
  const QQ = "574214190";
  const h5OpenQQHref = `mqqwpa://im/chat?chat_type=wpa&uin=${QQ}&version=1&src_type=web&web_src=oicqzone.com`;
  const pcOpenQQHref = `tencent://message/?uin=${QQ}&Site=jsmyssj.cn&Menu=yes`;
  const wxCardOpen = () => {
    Modal.confirm({
      title: isPC
        ? "扫一扫开始咨询"
        : isH5
          ? "长按图片保存后在微信中打开"
          : "长按图片添加好友开始咨询",
      maskClosable: true,
      closable: true,
      modalRender: () => <Image
        src={qrCodeSrc}
        alt="微信二维码"
        priority
        style={{ width: "350px" }}
      />,
    });
  };
  return { QQ, isH5, isPC, isWX, wxCardOpen, h5OpenQQHref, isMounted, pcOpenQQHref }
}

export function ContactButtons() {
  const { QQ, isH5, isPC, isWX, wxCardOpen, h5OpenQQHref, isMounted, pcOpenQQHref } = useContactButtons()
  return isMounted ? (
    <div className="flex gap-3 w-full justify-center slide-in-bck-center">
      {!isPC && (
        <a href="tel:13908178322" className="contact-buttons hover:bg-[#00FEFF]">
          <TelSvg className="w-6" fill="#5D5D5D" />
          {`${isPC ? "电话" : ""}咨询`}
        </a>
      )}
      {!isWX && (
        <a href={isH5 ? h5OpenQQHref : pcOpenQQHref} className="contact-buttons hover:bg-[#FEFE00]">
          <QQSvg />
          {`${isPC ? "QQ" : ""}咨询`}
        </a>
      )}
      <a onClick={wxCardOpen} className="contact-buttons hover:bg-[#ff00fb] cursor-pointer">
        <WxSvg />
        {`${isPC ? "微信" : ""}咨询`}
      </a>
    </div>
  ) : (
    <Loading />
  );
}

export function WxButtonWarp({ children }: { children: React.ReactNode }) {
  const { wxCardOpen } = useContactButtons()
  return <a onClick={wxCardOpen} className="cursor-pointer">
    {children}
  </a>
}
