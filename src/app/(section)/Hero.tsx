const Hero = ({}) => {
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
            // poster="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/istanbul-liverpool-banner.png"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
