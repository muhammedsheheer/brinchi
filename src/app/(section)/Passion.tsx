import Image from "next/image";
import React from "react";

const Passion: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#111] lg:h-screen">
      <div className="absolute left-0 top-16 hidden lg:block">
        <Image
          src="/images/home/passion/image1.png"
          width={948}
          height={880}
          alt="private dining"
          className="h-[400px] w-full rounded-lg md:rounded-none"
        />
      </div>
      <div className="absolute bottom-0 left-24 hidden lg:block">
        <Image
          src="/images/home/passion/black.png"
          width={948}
          height={880}
          alt="private dining"
          className="h-[380px] w-full rounded-lg md:rounded-none"
        />
      </div>
      <div className="absolute bottom-8 left-20 hidden lg:block">
        <Image
          src="/images/home/passion/image2.png"
          width={948}
          height={880}
          alt="private dining"
          className="h-[200px] w-full rounded-lg md:rounded-none"
        />
      </div>
      <div className="absolute right-6 top-8 hidden lg:block">
        <Image
          src="/images/home/passion/image3.png"
          width={948}
          height={880}
          alt="private dining"
          className="h-[300px] w-full rounded-lg md:rounded-none"
        />
      </div>
      <div className="absolute bottom-28 right-0 hidden lg:block">
        <Image
          src="/images/home/passion/image4.png"
          width={948}
          height={880}
          alt="private dining"
          className="h-[330px] w-full rounded-lg md:rounded-none"
        />
      </div>
      <div className="absolute left-60 top-32 hidden lg:block">
        <h1 className="font-playfair text-4xl font-[400] capitalize text-[#C7C7C7] lg:text-6xl lg:tracking-[10px]">
          passion for flavours
        </h1>
      </div>
      <div className="absolute left-72 top-60 hidden lg:block">
        <h1 className="font-playfair text-4xl font-[400] capitalize text-[#CDAE64] lg:text-6xl lg:tracking-[10px]">
          Premium dining Experience
        </h1>
      </div>
      <div className="absolute bottom-80 left-44 hidden lg:block">
        <h1 className="font-playfair text-4xl font-[400] capitalize text-[#C7C7C7] lg:text-6xl lg:tracking-[10px]">
          Passionate Culinary Creations
        </h1>
      </div>
      <div className="absolute bottom-52 left-96 hidden lg:block">
        <h1 className="font-playfair text-4xl font-[400] capitalize text-[#CDAE64] lg:text-6xl lg:tracking-[10px]">
          Crafted with Love
        </h1>
      </div>
      <div className="flex flex-col gap-6 px-4 py-12 lg:hidden">
        <div className="flex flex-col gap-1">
          <h1 className="font-playfair text-4xl font-[400] capitalize text-[#C7C7C7] lg:text-6xl lg:tracking-[10px]">
            passion for flavours
          </h1>
          <h1 className="font-playfair text-4xl font-[400] capitalize text-[#CDAE64] lg:text-6xl lg:tracking-[10px]">
            Premium dining Experience
          </h1>
          <h1 className="font-playfair text-4xl font-[400] capitalize text-[#C7C7C7] lg:text-6xl lg:tracking-[10px]">
            Passionate Culinary Creations
          </h1>
          <h1 className="font-playfair text-4xl font-[400] capitalize text-[#CDAE64] lg:text-6xl lg:tracking-[10px]">
            Crafted with Love
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          <Image
            src="/images/home/passion/image1.png"
            width={948}
            height={880}
            alt="private dining"
            className="h-[300px] w-full rounded-lg object-cover md:rounded-none"
          />
          <Image
            src="/images/home/passion/image2.png"
            width={948}
            height={880}
            alt="private dining"
            className="h-[300px] w-full rounded-lg object-cover md:rounded-none"
          />
          <Image
            src="/images/home/passion/image3.png"
            width={948}
            height={880}
            alt="private dining"
            className="h-[300px] w-full rounded-lg object-cover md:rounded-none"
          />
          <Image
            src="/images/home/passion/image4.png"
            width={948}
            height={880}
            alt="private dining"
            className="h-[300px] w-full rounded-lg object-cover md:rounded-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Passion;
