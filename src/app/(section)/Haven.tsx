import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Haven: React.FC = () => {
  return (
    <section className="relative h-full w-full px-4 py-12 sm:px-[10px] md:px-[50px] lg:px-[80px] lg:py-24 2xl:px-[140px]">
      <div className="absolute left-[10%] top-[5%] z-10 hidden md:block">
        <Image
          src={"/images/home/haven/bg.png"}
          width={228}
          height={78}
          alt="logo"
          className="z-10 h-[450px] w-full object-cover"
        />
      </div>
      <div className="z-50 hidden flex-row items-center justify-center gap-0 lg:flex">
        <div className="z-50 flex flex-row gap-0">
          <h1
            className="hidden w-full font-playfair text-8xl font-[400] uppercase lg:block lg:text-[500px]"
            style={{
              background: "linear-gradient(180deg, #CCAD64 0%, #191919  100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            B{" "}
          </h1>{" "}
          <div className="hidden flex-col items-center justify-end gap-2 lg:mb-14 lg:mr-4 lg:flex">
            <h1
              className="w-full font-playfair text-8xl font-[400] lowercase leading-[110%] lg:text-9xl lg:tracking-[10px]"
              style={{
                background:
                  "linear-gradient(180deg, #CCAD64 0%, #191919  100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              RINCHI
            </h1>
            <p className="max-w-[450px] font-manrope font-[300] leading-[160%] text-[#C1B6A6]">
              Welcome to Brinchi, where every meal is a celebration of flavor.
              Specializing in premium steaks, artisanal pizzas, and decadent
              desserts, Brinchi delights in crafting culinary experiences that
              excite your taste buds and warm your heart. Step into our world of
              irresistible flavors and unforgettable moments!
            </p>
          </div>
        </div>
      </div>

      {/*mobile section*/}
      <div className="flex flex-col gap-2 lg:hidden">
        <h1
          className="w-full text-center font-playfair text-7xl font-[400] capitalize leading-[110%] lg:text-9xl lg:tracking-[10px]"
          style={{
            background: "linear-gradient(180deg, #CCAD64  0%, #191919  100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          BRINCHI
        </h1>
        <p className="max-w-[450px] text-center font-manrope font-[300] leading-[160%] text-[#C1B6A6]">
          Welcome to Brinchi, where every meal is a celebration of flavor.
          Specializing in premium steaks, artisanal pizzas, and decadent
          desserts, Brinchi delights in crafting culinary experiences that
          excite your taste buds and warm your heart. Step into our world of
          irresistible flavors and unforgettable moments!
        </p>
      </div>
    </section>
  );
};

export default Haven;
