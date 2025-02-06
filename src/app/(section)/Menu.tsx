import Image from "next/image";
import React from "react";

const Menu: React.FC = () => {
  return (
    <section className="relative h-full w-full lg:h-screen">
      <div className="absolute left-0 top-24 hidden w-[30%] lg:block">
        <div className="flex flex-col gap-4 lg:gap-6">
          <Image
            src={"/images/home/haven/image1.png"}
            width={228}
            height={78}
            alt="logo"
            className="h-[580px] w-full object-cover"
          />
          <span className="text-center font-playfair text-lg font-[400] capitalize tracking-[3px] text-[#CDAE64] lg:text-xl lg:tracking-[5px]">
            Steak delights
          </span>
        </div>
      </div>
      <div className="absolute right-0 top-24 hidden w-[30%] lg:block">
        <div className="flex flex-col gap-4 lg:gap-6">
          <Image
            src={"/images/home/haven/image3.png"}
            width={228}
            height={78}
            alt="logo"
            className="h-[580px] w-full object-cover"
          />
          <span className="text-center font-playfair text-lg font-[400] capitalize tracking-[3px] text-[#CDAE64] lg:text-xl lg:tracking-[5px]">
            Salads
          </span>
        </div>
      </div>
      <div className="absolute left-1/2 top-[300px] hidden w-[30%] -translate-x-1/2 items-center justify-center lg:flex">
        <div className="flex flex-col gap-4 lg:gap-6">
          <span className="text-center font-playfair text-lg font-[400] capitalize tracking-[3px] text-[#CDAE64] lg:text-xl lg:tracking-[5px]">
            Desserts
          </span>
          <Image
            src={"/images/home/haven/image2.png"}
            width={228}
            height={78}
            alt="logo"
            className="h-[500px] w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-[5%]">
          <Image
            src={"/images/home/haven/heading.png"}
            width={731}
            height={185}
            alt="heading"
            className="h-full w-[54%]"
          />
          <Image
            src={"/images/home/haven/heading1.png"}
            width={731}
            height={185}
            alt="heading"
            className="h-full w-[39%]"
          />
        </div>
        <div className="flex flex-col gap-6 px-4 md:px-[50px] lg:hidden">
          <div className="flex flex-col gap-4 lg:gap-6">
            <Image
              src={"/images/home/haven/image1.png"}
              width={228}
              height={78}
              alt="logo"
              className="h-[350px] w-full object-cover"
            />
            <span className="text-center font-playfair text-lg font-[400] capitalize tracking-[3px] text-[#CDAE64] lg:text-xl lg:tracking-[5px]">
              Steak delights
            </span>
          </div>
          <div className="flex flex-col gap-4 lg:gap-6">
            <Image
              src={"/images/home/haven/image2.png"}
              width={228}
              height={78}
              alt="logo"
              className="h-[350px] w-full object-cover"
            />
            <span className="text-center font-playfair text-lg font-[400] capitalize tracking-[3px] text-[#CDAE64] lg:text-xl lg:tracking-[5px]">
              Desserts
            </span>
          </div>
          <div className="flex flex-col gap-4 lg:gap-6">
            <Image
              src={"/images/home/haven/image3.png"}
              width={228}
              height={78}
              alt="logo"
              className="h-[350px] w-full object-cover"
            />
            <span className="text-center font-playfair text-lg font-[400] capitalize tracking-[3px] text-[#CDAE64] lg:text-xl lg:tracking-[5px]">
              Salads
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
