"use client";

// package
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

// ui
import * as ProductCard from "@/ui/card/productCard";

// stores
import { useProductsStore } from "@/stores/zustand";

// css
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CatalogSlider() {
  const products = useProductsStore((state) => state.getNewArrivals());
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [slideRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      spacing: 8,
      perView: 2,
    },
    mode: "snap",
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 5,
          spacing: 16,
        },
        mode: "free-snap",
      },
    },
    renderMode: "performance",
  });
  const maxSlide = instanceRef.current?.track.details.maxIdx ?? 0;
  const canGoPrev = currentSlide > 0;
  const canGoNext = currentSlide < maxSlide;

  return (
    <div className="relative">
      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow md:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow md:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
      <div ref={slideRef} className="keen-slider">
        {products.map((product) => (
          <div key={product.id} className="keen-slider__slide">
            <ProductCard.Root data={product}>
              <ProductCard.Thumbnail>
                <ProductCard.ThumbnailBadge>
                  {product.isNew && <ProductCard.Badge>new</ProductCard.Badge>}
                  <ProductCard.WishlistButton />
                </ProductCard.ThumbnailBadge>

                <Link href="/product">
                  <ProductCard.Image />
                </Link>
              </ProductCard.Thumbnail>

              <Link href="/product">
                <ProductCard.Content>
                  <ProductCard.Ratings />
                  <ProductCard.Name />
                  <ProductCard.Price />
                </ProductCard.Content>
              </Link>
            </ProductCard.Root>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => instanceRef.current?.prev()}
            disabled={!canGoPrev}
            aria-label="Previous new arrival"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#121212] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="font-inter text-sm font-medium text-[#6C7275]">
            {currentSlide + 1} / {maxSlide + 1}
          </span>
          <button
            type="button"
            onClick={() => instanceRef.current?.next()}
            disabled={!canGoNext}
            aria-label="Next new arrival"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#121212] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
