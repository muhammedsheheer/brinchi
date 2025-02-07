"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({}) => {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        repeat: -1,
        yoyo: true,
        repeatDelay: 1.5,
      },
    );
  }, []);

  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-black">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "center" }}
            src="/video/bg.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="z-40 flex h-[100vh] w-full items-center justify-center">
          <div className="head-container flex w-fit flex-col items-center justify-center gap-2">
            <h1 className="text-center font-playfair text-6xl font-[400] uppercase leading-[80%] tracking-[4px] text-[#CDAE64] lg:text-8xl lg:tracking-[7px]">
              Brinchi
            </h1>
            <h3 className="text-center font-playfair text-3xl font-[400] uppercase leading-[80%] tracking-[1px] text-[#FBEAD2] lg:text-5xl lg:tracking-[3px]">
              STEAK HOUSE
            </h3>
            <h3
              className="relative font-playfair text-5xl font-semibold italic tracking-wide text-[#CDAE64] lg:text-9xl"
              ref={textRef}
            >
              {"Coming Soon...".split("").map((letter, index) => (
                <span key={index} className="inline-block opacity-0">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
