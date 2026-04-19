// package
import Link from "next/link";
import Image from "next/image";

// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import Button from "@/ui/button";
import Heading from "@/ui/head";
import Text from "@/ui/text";
import CatalogSlider from "@/ui/slider/catalogSlider";
import * as ProductCard from "@/ui/card/productCard";
import {
  ArrowRightIcon,
  CallIcon,
  DeliveryIcon,
  LockIcon,
  MoneyIcon,
} from "@/ui/assets/svg";

// data
import products from "@/data/product.json";

export default function Home() {
  const bestSellers = products.filter((product) => product.isBestSeller);

  return (
    <>
      {/* Hero section */}
      <SectionLayout
        bg="bg-[#f0e6e6]"
        className="flex flex-col items-center justify-between lg:grid lg:grid-cols-2 lg:pt-8"
      >
        {/* Text content */}
        <div className="flex flex-col items-center gap-4 p-8 sm:max-w-[600px] md:max-w-[600px] md:py-16 lg:order-2 lg:max-w-none lg:items-start lg:p-0">
          <div className="space-y-2 text-center lg:text-left">
            <Heading as="h1" intent="hero-section">
              Smart accessories,{" "}
              <span className="text-[#65b2e1]">smarter living. </span> Shop the
              future today..
            </Heading>
            <Text className="md:text-lg lg:text-xl">
              Quality gear, unbeatable wholesale prices.
            </Text>
          </div>
          <Button fontSize="sm" className="px-14 py-3 md:text-lg">
            Shop Now
          </Button>
        </div>

        {/* Image content */}
        <div className="flex h-auto w-full items-end justify-center overflow-hidden lg:order-1">
          <Image
            src="/images/manpage.webp"
            width={700}
            height={861}
            alt="Shawon Telecom accessories showcase"
            priority
            quality={75}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="w-full max-w-[430px] object-cover object-top lg:max-w-[520px] xl:max-w-[620px]"
          />
        </div>
      </SectionLayout>

      {/* Product section */}
      <SectionLayout>
        <div className="space-y-10 p-8">
          <Heading
            as="h2"
            intent="base-section"
            className="text-center md:text-left"
          >
            New Arrivals
          </Heading>

          {/* catalog product slider */}
          <CatalogSlider />
        </div>
      </SectionLayout>

      {/* Shop collection section */}
      <SectionLayout>
        <div className="space-y-4 px-8 py-10 sm:space-y-8 md:space-y-12">
          <Heading
            as="h2"
            intent="base-section"
            className="text-center md:text-left"
          >
            Shop Collection
          </Heading>

          <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:h-[560px]">
            {/* Main collection */}
            <div className="relative aspect-[1.2/1] w-full bg-[#F3F5F7] p-8 sm:row-span-2 sm:aspect-auto sm:h-full">
              <div className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden">
                <Image
                  src="/images/mobilephone.jpg"
                  width={200}
                  height={125}
                  alt="background collection"
                  quality={75}
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 30vw, 262px"
                  className="aspect-[0.75/1] w-[50%] -translate-y-[10%] object-center md:w-[40%]"
                />
              </div>

              <div className="relative flex h-full flex-col justify-end gap-2">
                <Heading as="h3" intent="collection-card">
                  Mobiles
                </Heading>
                <Link href="/shop?category=mobile-phone" className="w-fit">
                  <span className="flex w-fit items-center gap-1 border-b border-[#121212]">
                    Collection{" "}
                    <ArrowRightIcon stroke="#121212" className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Another collection */}
            <div className="relative aspect-[2/1] w-full bg-[#F3F5F7] p-8 sm:aspect-auto sm:h-full">
              <div className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden">
                <Image
                  src="/images/ccase.webp"
                  width={262}
                  height={349}
                  alt="background collection"
                  quality={75}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 262px"
                  className="aspect-[0.75/1] w-[40%] translate-x-1/2 sm:w-[50%] md:w-[40%]"
                />
              </div>

              <div className="relative flex h-full flex-col justify-end gap-2">
                <Heading as="h3" intent="collection-card">
                  Mobile Cases
                </Heading>
                <Link href="/shop?category=cases" className="w-fit">
                  <span className="flex w-fit items-center gap-1 border-b border-[#121212]">
                    Collection{" "}
                    <ArrowRightIcon stroke="#121212" className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Another collection */}
            <div className="relative aspect-[2/1] w-full bg-[#F3F5F7] p-8 sm:aspect-auto sm:h-full">
              <div className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden">
                <Image
                  src="/images/phoneholder.webp"
                  width={262}
                  height={349}
                  alt="background collection"
                  quality={75}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 262px"
                  className="aspect-[0.75/1] w-[40%] translate-x-1/2 sm:w-[50%] md:w-[40%]"
                />
              </div>

              <div className="relative flex h-full flex-col justify-end gap-2">
                <Heading as="h3" intent="collection-card">
                  Accessories
                </Heading>
                <Link href="/shop?category=accessories" className="w-fit">
                  <span className="flex w-fit items-center gap-1 border-b border-[#121212]">
                    Collection{" "}
                    <ArrowRightIcon stroke="#121212" className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Best seller section */}
      <SectionLayout>
        <div className="space-y-4 px-8 py-10 sm:space-y-8 md:space-y-12 lg:pb-24">
          <Heading
            as="h2"
            intent="base-section"
            className="text-center md:text-left"
          >
            Best Seller
          </Heading>

          <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8 xl:grid-cols-5">
            {bestSellers.map((product) => (
              <ProductCard.Root key={product.id} data={product}>
                <ProductCard.Thumbnail>
                  <ProductCard.ThumbnailBadge>
                    {product.isNew && (
                      <ProductCard.Badge>new</ProductCard.Badge>
                    )}
                    <ProductCard.WishlistButton />
                  </ProductCard.ThumbnailBadge>

                  <ProductCard.Image />
                </ProductCard.Thumbnail>

                <ProductCard.Content>
                  <ProductCard.Ratings />
                  <ProductCard.Name />
                  <ProductCard.Price />
                </ProductCard.Content>
              </ProductCard.Root>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Ad Banner section */}
      <SectionLayout>
        <div className="px-8 py-6 sm:py-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/head.jpg"
                width={600}
                height={400}
                alt="ad-banner-1"
                quality={80}
                sizes="(max-width: 640px) 90vw, 30vw"
                className="h-[200px] w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-[220px] lg:h-[260px]"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/phonecases.jpg"
                width={600}
                height={400}
                alt="ad-banner-2"
                quality={80}
                sizes="(max-width: 640px) 90vw, 30vw"
                className="h-[200px] w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-[220px] lg:h-[260px]"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/watch.jpg"
                width={600}
                height={400}
                alt="ad-banner-3"
                quality={80}
                sizes="(max-width: 640px) 90vw, 30vw"
                className="h-[200px] w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-[220px] lg:h-[260px]"
              />
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Features section */}
      <SectionLayout>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 p-8 md:grid-cols-4 lg:gap-6 lg:py-10">
          <div className="space-y-4 bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <DeliveryIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text
                size="sm"
                weight={600}
                family="poppins"
                color="black/800"
                className="lg:text-xl"
              >
                Free Shipping
              </Text>
              <Text size="sm" color="gray">
                Order above QAR200
              </Text>
            </div>
          </div>
          <div className="space-y-4 bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <MoneyIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text
                size="sm"
                weight={600}
                family="poppins"
                color="black/800"
                className="lg:text-xl"
              >
                Money-back
              </Text>
              <Text size="sm" color="gray">
                30 days guarantee
              </Text>
            </div>
          </div>
          <div className="space-y-4 bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <LockIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text
                size="sm"
                weight={600}
                family="poppins"
                color="black/800"
                className="lg:text-xl"
              >
                Secure Payments
              </Text>
              <Text size="sm" color="gray">
                Secured
              </Text>
            </div>
          </div>
          <div className="space-y-4 bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <CallIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text
                size="sm"
                weight={600}
                family="poppins"
                color="black/800"
                className="lg:text-xl"
              >
                24/7 Support
              </Text>
              <Text size="sm" color="gray">
                Phone and Email support
              </Text>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
