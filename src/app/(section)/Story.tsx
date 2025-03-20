import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Story: React.FC = () => {
  return (
    <section className="h-full w-full">
      <div className="flex flex-col">
        <div className="flex h-full w-full flex-col lg:h-[50vh] lg:flex-row">
          <div className="flex w-full flex-col justify-center gap-4 bg-[#161616] px-4 py-12 lg:w-[40%] lg:gap-6 lg:px-[50px]">
            <h3
              className="font-playfair text-3xl font-[400] capitalize lg:text-5xl"
              style={{
                background:
                  "linear-gradient(180deg, #A5894B 68.46%, #221D12 99.87%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Scroll our Story
            </h3>
            <p className="w-full max-w-[420px] font-inter text-sm font-[300] text-[#C1B6A6] lg:text-base">
              At Brinchi, every dish is crafted with passion, using the finest
              ingredients and time-honored recipes that transport you to the
              bustling streets of Turkey.{" "}
            </p>
            <div>
              <Link href={"#"}>
                <Button className="rounded-none bg-[#D5A859] px-8 py-5 text-center text-xs font-[400] uppercase tracking-[5px] text-[#000]">
                  @BIRCHISTEAK
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden w-full bg-[#FBEAD2] lg:block lg:w-[30%]">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/home/story/image1.png"
                width={948}
                height={880}
                alt="private dining"
                className="h-[300px] w-[270px] rounded-t-full"
              />
            </div>
          </div>
          <div className="w-full bg-[#FBEAD] lg:w-[30%]">
            <Image
              src="/images/home/story/image2.png"
              width={948}
              height={880}
              alt="private dining"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex h-full w-full flex-col lg:h-[50vh] lg:flex-row">
          <div className="w-full bg-[#FBEAD2] lg:w-[30%]">
            <Image
              src="/images/home/story/image3.png"
              width={948}
              height={880}
              alt="private dining"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full bg-[#161616] lg:w-[40%]">
            <Image
              src="/images/home/story/image4.png"
              width={948}
              height={880}
              alt="private dining"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden w-full lg:block lg:w-[30%]">
            <Image
              src="/images/home/story/image5.png"
              width={948}
              height={880}
              alt="private dining"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
