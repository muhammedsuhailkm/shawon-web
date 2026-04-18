"use client";

// package
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// ui
import Logo from "@/ui/assets/logo";
import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  SearchIcon,
  YoutubeIcon,
} from "@/ui/assets/svg";

// lib
import { cn } from "@/lib/utils";

const links = [
  {
    id: "home",
    path: "/",
    name: "Home",
  },
  {
    id: "shop",
    path: "/shop",
    name: "Shop",
    subLinks: [
      {
        id: "all-categories",
        path: "/shop",
        name: "All Categories",
      },
      {
        id: "mobile-phone",
        path: "/shop?category=mobile-phone",
        name: "Mobile Phone",
      },
      {
        id: "accessories",
        path: "/shop?category=accessories",
        name: "Accessories",
      },
      {
        id: "cases",
        path: "/shop?category=cases",
        name: "Cases",
      },
      {
        id: "gadgets-electronics",
        path: "/shop?category=gadgets-electronics",
        name: "Gadgets & Electronics",
      },
      {
        id: "chargers",
        path: "/shop?category=chargers",
        name: "Chargers",
      },
    ],
  },
  {
    id: "contact-us",
    path: "#",
    name: "Contact Us",
  },
];

export default function NavMobile({
  onClick,
  open,
}: {
  onClick: () => void;
  open: boolean;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-10 grid min-h-[100dvh] w-full grid-cols-[11fr_1fr] transition-transform duration-100 ease-in md:grid-cols-[10fr_2fr] lg:hidden",
        open ? "transform-none touch-none" : "-translate-x-full",
      )}
    >
      <div className="flex h-full flex-col justify-between bg-white p-6">
        {/* top section */}
        <div className="flex flex-col gap-4">
          {/* logo */}
          <div className="flex items-center justify-between">
            <Logo />

            <button onClick={onClick}>
              <CloseIcon className="w-6" />
            </button>
          </div>

          {/* search input */}
          <div className="flex h-12 items-center gap-2 rounded-md border border-[#6C7275] px-4">
            <label htmlFor="search" className="cursor-pointer">
              <SearchIcon />
            </label>
            <input
              id="search"
              name="search"
              className="font-inter text-sm font-normal text-[#141718] outline-none placeholder:opacity-70"
              placeholder="Search"
            />
          </div>

          {/* navbar links */}
          <ul className="grid grid-cols-1">
            {links.map((link) => (
              <li
                key={link.id}
                className="border-b border-[#E8ECEF] first:pt-0"
              >
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.id ? null : link.id,
                        )
                      }
                      className="flex w-full items-center justify-between py-4 font-inter text-sm font-medium text-[#141718]"
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openDropdown === link.id && "rotate-180",
                        )}
                      />
                    </button>
                    {openDropdown === link.id && (
                      <ul className="pb-3 pl-4">
                        {link.subLinks.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              href={sub.path}
                              onClick={onClick}
                              className="block py-2 font-inter text-sm text-[#6C7275]"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.path}
                    onClick={onClick}
                    className="block py-4 font-inter text-sm font-medium text-[#141718]"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* bottom section */}
        <div className="flex flex-col gap-5">
          {/* social media */}
          <div className="flex items-center gap-6">
            <InstagramIcon className="w-6" />
            <FacebookIcon className="w-6" />
            <YoutubeIcon className="w-6" />
          </div>
        </div>
      </div>

      <div className="h-full bg-black/30" onClick={onClick}></div>
    </div>
  );
}
