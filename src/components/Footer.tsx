"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#131313] px-4 py-12 md:px-[50px] lg:px-[80px] lg:py-24 2xl:px-[220px]">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-52">
        <div className="flex flex-col gap-5 lg:gap-24">
          <h2 className="font-playfair text-3xl font-[400] italic text-[#FBEAD2] lg:text-5xl">
            Subscribe to <br />
            our newsletter
          </h2>
          <div className="flex flex-row gap-14 lg:gap-40">
            <div className="flex flex-col gap-3">
              <Link href={""}>
                <span className="font-manrope text-sm font-[400] tracking-[1px] text-[#FBEAD2]">
                  Home
                </span>
              </Link>
              <Link href={""}>
                <span className="font-manrope text-sm font-[400] tracking-[1px] text-[#FBEAD2]">
                  About
                </span>
              </Link>
              <Link href={""}>
                <span className="font-manrope text-sm font-[400] tracking-[1px] text-[#FBEAD2]">
                  Contact
                </span>
              </Link>
              <Link href={""}>
                <span className="font-manrope text-sm font-[400] tracking-[1px] text-[#FBEAD2]">
                  Booking
                </span>
              </Link>
              <Link href={""}>
                <span className="font-manrope text-sm font-[400] tracking-[1px] text-[#FBEAD2]">
                  Menu
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-6 lg:gap-10">
              <div className="flex flex-col gap-3">
                <h6 className="font-manrope text-base font-[700] uppercase tracking-[1px] text-[#FBEAD2]">
                  Contact
                </h6>
                <Link href={""}>
                  <span className="font-manrope text-sm font-[400] tracking-[1px] text-[#FBEAD2]">
                    0151 245 1500
                  </span>
                </Link>
                <Link href={""}>
                  <span className="font-manrope text-sm font-[400] tracking-[1px] text-[#FBEAD2]">
                    Info@bavetteliverpool.co.uk
                  </span>
                </Link>
                <Link href={""} target="_blank">
                  <span className="font-manrope text-sm font-[400] tracking-[1px] text-[#FBEAD2]">
                    $9 Allerton Rd, Liverpool L25 7RE
                  </span>
                </Link>
              </div>
              <div className="flex flex-row items-center gap-2 lg:gap-4">
                <Link href={""} target="_blank">
                  <Icons.instagram className="text-[#FBEAD2]" />
                </Link>
                <Link href={""} target="_blank">
                  <Icons.unknown className="text-[#FBEAD2]" />
                </Link>
                <Link href={""} target="_blank">
                  <Icons.google className="text-[#FBEAD2]" />
                </Link>
                <Link href={""} target="_blank">
                  <Icons.facebook className="text-[#FBEAD2]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4 lg:gap-8">
            <p className="w-full max-w-[500px] font-manrope text-sm font-[300] tracking-[1px] text-[#FBEAD2] lg:text-base">
              By subscribing to the newsletter, you will always be up to date.
              Find out about new products, events, and specials.
            </p>
            <div className="flex flex-row gap-4">
              <input
                className="w-full border-b border-[#FBEAD2] bg-transparent px-2 py-2 text-[#FBEAD2] placeholder-[#FBEAD2] outline-none"
                type="text"
                placeholder="Email Address"
              />
              <div>
                <Button className="flex flex-row gap-2 rounded-none border border-[#FBEAD2] bg-transparent py-6 font-manrope text-xs font-[600] uppercase tracking-[1.90px] text-[#FBEAD2]">
                  Subscribe <ArrowRight className="text-[#FBEAD2]" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.svg"}
                width={228}
                height={78}
                alt="logo"
                className="w-24 lg:w-40"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
