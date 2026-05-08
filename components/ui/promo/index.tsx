"use client";

// package
import Marquee from "react-fast-marquee";

export default function PromoSection() {
  return (
    <Marquee
      className="bg-black py-2 text-white"
      gradient={false}
      speed={50}
    >
      <p className="mx-10 font-bold uppercase">
        Order Now! Get delivered within 8 hours! | Call us on: +97430442059,
        +97470691456
      </p>
    </Marquee>
  );
}
