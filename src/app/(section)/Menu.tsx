import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#131313] px-4 py-12 lg:px-20 lg:py-24">
      <div
        className="absolute bottom-[23%] right-[10%] z-50 hidden lg:block"
        style={{
          background: "linear-gradient(180deg, #A5894B 0%, #191919 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <h1 className="text-center font-playfair text-[150px] font-[400] lowercase tracking-[11px]">
          MENU
        </h1>
      </div>
      <div className="flex flex-col gap-8 lg:gap-14">
        <div className="lg:ml-16">
          <span className="text-center font-playfair text-sm font-[600] uppercase tracking-[1.90px] text-[#9E8751] lg:ml-56 lg:text-right lg:text-base">
            Explore menu
          </span>
          <h6 className="font-playfair text-6xl font-[400] text-[#3F3F3F] lg:text-8xl">
            BRINCHI
          </h6>
        </div>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
          <Image
            src={"/images/home/menu/image1.png"}
            width={228}
            height={78}
            alt="image"
            className="z-10 h-auto w-full object-cover lg:h-[450px]"
          />
          <Image
            src={"/images/home/menu/image2.png"}
            width={228}
            height={78}
            alt="image"
            className="z-10 h-auto w-full object-cover lg:h-[450px]"
          />
          <Image
            src={"/images/home/menu/image3.png"}
            width={228}
            height={78}
            alt="image"
            className="z-10 h-auto w-full object-cover lg:h-full"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 lg:mt-4 lg:gap-7">
          <p className="max-w-[500px] text-center font-manrope font-[300] leading-[160%] text-[#C1B6A6]">
            Bavette was born from a passion for bringing the finest cuts of beef
            to the table, with a commitment to sustainability and premium
            quality. Every dish is a labor of love, crafted by our experienced
            chefs who handpick each cut to ensure perfection.
          </p>
          <Button
            variant="outline"
            className="group w-fit items-center gap-[1.19rem] rounded-none border-primary bg-transparent px-6 py-7 font-semibold uppercase text-white hover:bg-primary"
          >
            <Link href="/menu" className="flex items-center gap-[1.19rem]">
              View Menu{" "}
              <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
