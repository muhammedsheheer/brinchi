import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Booking = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center">
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 bg-[#131313] md:flex-row">
        <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
          <Image
            src="/images/home/booking/dining.png"
            width={948}
            height={880}
            alt="private dining"
            className="h-auto w-full rounded-lg md:rounded-none"
          />
        </div>
        <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
          <h1
            className="text-center font-playfair text-6xl sm:text-7xl md:text-start"
            style={{
              background:
                "linear-gradient(180deg, #A5894B 68.46%, #221D12 99.87%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Private & <br /> Group Dining
          </h1>
          <p className="max-w-[450px] text-center font-manrope font-[300] leading-[160%] text-[#C1B6A6] md:text-start">
            At Brinchi, we specialize in crafting unforgettable dining
            experiences, whether you`re enjoying a cozy meal or hosting a lively
            gathering. Our private and group dining options offer personalized
            service, exceptional flavors, and a warm, inviting atmosphere.
          </p>
          <Button
            variant="outline"
            className="group w-fit items-center gap-[1.19rem] rounded-none border-primary bg-transparent px-6 py-7 font-semibold uppercase text-white hover:bg-primary"
          >
            <Link
              href="/table-booking"
              className="flex items-center gap-[1.19rem]"
            >
              Book Table{" "}
              <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Booking;
