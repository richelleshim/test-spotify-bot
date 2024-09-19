"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sidebar justify-center bg-sidebar">
      <div className="w-10 h-10 bg-sidebar flex-center cursor-pointer">
        <Image
          src="/secondBrainLogo.svg"
          width={100}
          height={100}
          alt="second brain logo"
        />
        <div className="sidebar-logo pr-3">2B</div>
      </div>

      <div className="gap-4 m-2">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <div
              style={
                isActive
                  ? { textShadow: "0 0px 10px rgba(255, 255, 255, 0.8)" }
                  : {}
              }
              className="pt-4"
            >
              <Link href={item.route} key={item.label}>
                <div className="relative size-6">
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    fill
                    // className={cn({ "brightness-[3] invert-0": isActive })}
                  />
                </div>
                {/* <p className="text-gray-500">{item.label}</p> */}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
