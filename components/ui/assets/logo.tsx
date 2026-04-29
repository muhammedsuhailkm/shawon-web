import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
};

export default function Logo({ className, showTagline = false }: LogoProps) {
  return (
    <div
      className={cn("inline-flex items-center gap-2 text-[#162449]", className)}
      aria-label="Shawon Telecom WLL"
    >
      <Image
        src="/images/newlogo.jpg"
        alt=""
        width={507}
        height={299}
        quality={100}
        sizes="88px"
        aria-hidden="true"
        className="h-12 w-auto flex-none mix-blend-multiply md:h-16"
      />

      <span className="leading-none">
        <span className="block text-[10px] font-semibold tracking-wide md:text-xs">
          شاون تيليكوم تريدنج
        </span>
        <span className="block whitespace-nowrap font-poppins text-sm font-bold tracking-wide text-[#39A8D1] md:text-lg">
          SHAWON TELECOM WLL
        </span>
        {showTagline && (
          <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-[#162449] sm:block">
            Mobile wholesale accessories
          </span>
        )}
      </span>
    </div>
  );
}
