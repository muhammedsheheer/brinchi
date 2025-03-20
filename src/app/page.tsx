"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Special from "./(section)/(special)/Special";
import Reviews from "./(section)/Review";
import ViewMenu from "@/components/floating-buttons/ViewMenu";
import Haven from "./(section)/Haven";
import Menu from "./(section)/Menu";
import Booking from "./(section)/Booking";
import Passion from "./(section)/Passion";
import Story from "./(section)/Story";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000]">
        <Navbar position="absolute" />
        <Hero />
        <Haven />
        <Menu />
        <Special />
        <Booking />
        <Reviews />
        <Story />
        <Footer />
      </div>
      <div className="fixed bottom-2 right-2 z-50 hidden md:flex">
        <ViewMenu />
      </div>
    </main>
  );
}
