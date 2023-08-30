"use client";
import { Dropdown, MenuProps } from "antd";
import Link from "next/link";
import React from "react";
import { MenuSvg } from "./svg";

export default function NavBar() {
  const NavItems: MenuProps["items"] = [
    {
      label: (
        <Link
          href="/"
          className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400"
        >
          首页
        </Link>
      ),
      key: "0",
    },
    // {
    //   label: (
    //     <Link
    //       href="#"
    //       className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400"
    //     >
    //       资讯
    //     </Link>
    //   ),
    //   key: "1",
    // },
    {
      label: (
        <Link
          href="/about"
          className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400"
        >
          关于
        </Link>
      ),
      key: "3",
    },
  ];

  return (
    <div className="w-1/2 text-left py-4 flex justify-end items-start">
      <div className="hidden md:block">
        {NavItems.map((m: any) => (
          <React.Fragment key={m.key}>{m.label}</React.Fragment>
        ))}
      </div>
      <div className="block md:hidden">
        <Dropdown arrow menu={{ items: NavItems }}>
          <a onClick={(e) => e.preventDefault()}>
            <button>
              <MenuSvg />
            </button>
          </a>
        </Dropdown>
      </div>
    </div>
  );
}
