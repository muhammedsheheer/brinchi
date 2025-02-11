import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { type FC } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetDescription className="flex w-full flex-col items-start justify-start gap-7 pt-14">
            <Link
              href="/"
              className="flex w-full justify-start p-0 font-playfair text-2xl font-normal text-[#CDAE64]"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="flex w-full justify-start p-0 font-playfair text-2xl font-normal text-[#CDAE64]"
            >
              Menu
            </Link>

            <Link
              href="/about-us"
              className="flex w-full justify-start p-0 font-playfair text-2xl font-normal text-[#CDAE64]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="flex w-full justify-start p-0 font-playfair text-2xl font-normal text-[#CDAE64]"
            >
              Contact
            </Link>
            <Link href={"/table-booking"}>
              <Button className="flex flex-row gap-2 rounded-none bg-[#CDAE64] px-5 py-6 font-playfair text-sm font-[600] capitalize tracking-[1.2px] text-[#ffff] ring-1 ring-[#FBEAD2]">
                Table Booking <ArrowRight className="w-4 text-[#fff]" />
              </Button>
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
