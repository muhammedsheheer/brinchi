import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Haven: React.FC = () => {
  return (
    <section className="h-full w-full px-4 py-12 sm:px-[10px] md:px-[50px] lg:px-[80px] lg:py-24 2xl:px-[140px]">
      <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
        <h2 className="font-playfair text-4xl font-[400] capitalize leading-[120%] text-[#FBEAD2] lg:text-6xl">
          Brinchi Haven
        </h2>
        <p className="w-full max-w-[900px] text-center font-inter text-sm font-[400] lowercase leading-[178%] text-[#FBEAD2] lg:text-base">
          Welcome to Brinchi, where every meal is a celebration of flavor.
          Specializing in premium steaks, artisanal pizzas, and decadent
          desserts, Brinchi delights in crafting culinary experiences that
          excite your taste buds and warm your heart. Step into our world of
          irresistible flavors and unforgettable moments!
        </p>
        <Link href={"/menu"}>
          <Button
            className="rounded-none border-[#CDAE64] bg-transparent px-9 py-7 text-center font-inter text-xs font-[300] uppercase tracking-[3px] text-[#fff] ring-1 ring-[#CDAE64] lg:tracking-[5px]"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#cdae64",
            }}
          >
            View Menu
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Haven;
