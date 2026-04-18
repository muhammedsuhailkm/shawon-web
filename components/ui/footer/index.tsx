// package
import Link from "next/link";

// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import Text from "@/ui/text";
import Logo from "@/ui/assets/logo";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/ui/assets/svg";

const Footer = () => {
  return (
    <SectionLayout bg="bg-[#141718]">
      {/* ===== MOBILE FOOTER (visible below lg) ===== */}
      <div className="px-6 py-8 lg:hidden">
        {/* Logo — left aligned */}
        <div className="mb-8">
          <Logo className="rounded bg-white px-3 py-2" showTagline />
        </div>

        {/* EXPLORE */}
        <div className="mb-8">
          <h4 className="mb-4 font-poppins text-xs font-bold uppercase tracking-widest text-[#FEFEFE]">
            Explore
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="font-inter text-sm font-normal text-[#b0b0b0]">
              <Link href="/">Home</Link>
            </li>
            <li className="font-inter text-sm font-normal text-[#b0b0b0]">
              <Link href="/">Shop</Link>
            </li>

            <li className="font-inter text-sm font-normal text-[#b0b0b0]">
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="mb-8">
          <h4 className="mb-4 font-poppins text-xs font-bold uppercase tracking-widest text-[#FEFEFE]">
            Contact
          </h4>
          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
                  stroke="#b0b0b0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <span className="block font-inter text-sm text-[#b0b0b0]">
                  Doha Al Jadeed
                </span>
                <span className="block font-inter text-sm text-[#b0b0b0]">
                  Doha, Qatar
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.05 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34L9.22 8.5a16 16 0 0 0 6.28 6.28l1.44-1.44a7.93 7.93 0 0 0 2.34.68A2 2 0 0 1 22 16.92Z"
                  stroke="#b0b0b0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link
                href="tel:+97472116464"
                className="font-inter text-sm text-[#b0b0b0]"
              >
                +974 30442059
              </Link>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="2"
                  stroke="#b0b0b0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m22 6-10 7L2 6"
                  stroke="#b0b0b0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link
                href="mailto:Shawontelecomwll@gmail.com"
                className="font-inter text-sm text-[#b0b0b0]"
              >
                Shawontelecomwll@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom — copyright & links */}
        <div className="border-t border-[#6C7275] pt-6">
          <p className="mb-2 text-center font-poppins text-xs text-[#b0b0b0]">
            © 2026 Shawon Telecom WLL. All rights reserved
          </p>
          <div className="flex justify-center gap-6">
            <span className="font-poppins text-xs font-semibold text-[#b0b0b0]">
              Privacy Policy
            </span>
            <span className="font-poppins text-xs font-semibold text-[#b0b0b0]">
              Term of Use
            </span>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP FOOTER (visible on lg+) — unchanged ===== */}
      <div className="hidden lg:block">
        <div className="space-y-12 px-8 py-12">
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-row items-start">
              <Logo className="rounded bg-white px-3 py-2" showTagline />

              <div className="ml-6 flex flex-col items-start gap-4 text-left">
                <div className="space-y-1">
                  <Text
                    size="xs"
                    weight={600}
                    family="poppins"
                    color="white/900"
                  >
                    Email
                  </Text>
                  <Link
                    href="mailto:info@shawontelecom.com"
                    className="font-inter text-sm font-normal text-[#FEFEFE]"
                  >
                    Shawontelecomwll@gmail.com
                  </Link>
                </div>

                <div className="space-y-1">
                  <Text
                    size="xs"
                    weight={600}
                    family="poppins"
                    color="white/900"
                  >
                    Address
                  </Text>
                  <Text size="sm" color="white/900">
                    Doha Al Jadeed, Qatar
                  </Text>
                </div>
              </div>
            </div>

            <ul className="flex flex-row gap-10">
              <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]">
                <Link href="/">Home</Link>
              </li>
              <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]">
                <Link href="/">Shop</Link>
              </li>

              <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]">
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-row justify-between border-t border-[#6C7275] py-4">
            <div className="flex flex-row items-center gap-7">
              <Text
                family="poppins"
                size="xs"
                color="white/800"
                className="text-left"
              >
                Copyright © 2026 Shawon Telecom WLL. All rights reserved
              </Text>
              <div className="flex gap-7">
                <Text size="xs" weight={600} family="poppins" color="white/900">
                  Privacy Policy
                </Text>
                <Text size="xs" weight={600} family="poppins" color="white/900">
                  Term of Use
                </Text>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <InstagramIcon
                fill="#FEFEFE"
                stroke="#FEFEFE"
                className="h-6 w-6"
              />
              <FacebookIcon stroke="#FEFEFE" className="h-6 w-6" />
              <YoutubeIcon stroke="#FEFEFE" className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Footer;
