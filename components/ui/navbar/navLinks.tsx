// package
import Link from "next/link";
import { usePathname } from "next/navigation";

// ui
import NavDropdown from "@/ui/navbar/navDropdown";
import { NavLinkProps } from "@/ui/navbar/definition";

// lib
import { cn } from "@/lib/utils";

const links: NavLinkProps[] = [
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
    path: "/contact-us",
    name: "Contact Us",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex lg:justify-center lg:gap-10">
      {links.map((link) => (
        <li
          key={link.id}
          className={cn(
            "font-inter text-sm font-medium text-[#141718] hover:opacity-100",
            pathname !== link.path && "opacity-70",
          )}
        >
          {link.subLinks ? (
            <NavDropdown link={link} />
          ) : (
            <Link href={link.path}>{link.name}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
