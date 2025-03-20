"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#000]">
      <div className="absolute left-32 top-32 hidden lg:block">
        <h1
          className="font-playfair text-6xl font-[400] capitalize tracking-[3px] lg:tracking-[5px]"
          style={{
            background:
              "linear-gradient(180deg, #A5894B 68.46%, #221D12 99.87%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Brinchi <br /> Signature <br /> Steaks
        </h1>
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="relative flex w-full flex-col items-center gap-3">
          <div className="flex flex-col items-center justify-center gap-2 lg:hidden">
            <h1
              className="text-center font-playfair text-4xl font-[400] capitalize tracking-[3px] lg:text-5xl lg:tracking-[5px]"
              style={{
                background:
                  "linear-gradient(180deg, #A5894B 68.46%, #221D12 99.87%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Brinchi Signature Steaks
            </h1>
          </div>
        </div>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
