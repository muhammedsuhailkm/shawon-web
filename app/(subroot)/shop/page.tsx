// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import Text from "@/ui/text";
import Heading from "@/ui/head";
import { DropdownIcon } from "@/ui/assets/svg";

// components
import CatalogProduct from "@/app/(subroot)/shop/catalogProduct";
import CategoryFilter from "@/app/(subroot)/shop/categoryFilter";

export default function Page() {
  return (
    <SectionLayout>
      <div className="px-8">
        <div className="relative flex h-[120px] flex-col items-center justify-center gap-4 bg-[#F3F5F7] text-center">
          <div className="flex items-center gap-4">
            <Text
              size="sm"
              color="gray"
              weight={500}
              className="flex items-center gap-1"
            >
              Home{" "}
              <DropdownIcon stroke="#6C7275" className="h-3 w-3 -rotate-90" />
            </Text>
            <Text size="sm" weight={500}>
              Shop
            </Text>
          </div>
          <Heading as="h1" intent="shop-page">
            Shop Page
          </Heading>
        </div>

        <div className="py-4">
          <CategoryFilter />
        </div>

        <CatalogProduct />
      </div>
    </SectionLayout>
  );
}
