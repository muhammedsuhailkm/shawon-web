"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";

import Text from "@/ui/text";
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { cn } from "@/lib/utils";

const categories = [
  { value: "all", text: "All Categories" },
  { value: "mobile-phone", text: "Mobile Phone" },
  { value: "accessories", text: "Accessories" },
  { value: "cases", text: "Cases" },
  { value: "chargers", text: "Chargers" },
  { value: "gadgets-electronics", text: "Gadgets & Electronics" },
];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

  const handleCategoryChange = (value: string) => {
    if (value === "all") {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${value}`);
    }
  };

  return (
    <div className="w-full max-w-[300px] space-y-2">
      <Text size="sm" weight={600} color="gray" transform="uppercase">
        categories
      </Text>

      <Select value={currentCategory} onValueChange={handleCategoryChange}>
        <SelectTrigger
          className={cn(
            "group",
            "h-auto",
            "rounded-lg",
            "border-2 border-[#6C7275]",
            "p-2 pl-4",
            "font-inter font-semibold",
            "text-sm text-[#141718]",
            "focus:ring-0 focus:ring-offset-0",
          )}
        >
          <SelectValue />

          <SelectIcon asChild>
            <ChevronDown
              color="#6C7275"
              className="h-6 w-6 transition-transform duration-200 group-data-[state=open]:rotate-180"
            />
          </SelectIcon>
        </SelectTrigger>

        <SelectContent className="rounded-xl" position="popper" side="bottom" sideOffset={4}>
          {categories.map((category) => (
            <SelectItem
              key={category.value}
              value={category.value}
              className={cn(
                "cursor-pointer",
                "rounded-lg",
                "p-2",
                "font-inter font-normal",
                "text-sm text-[#6C7275]",
                "focus:bg-[#F3F5F7] focus:text-[#141718]",
                "data-[state=checked]:font-semibold data-[state=checked]:text-[#141718]",
              )}
            >
              {category.text}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
