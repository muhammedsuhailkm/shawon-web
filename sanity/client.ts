import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: "40rf158a",
  dataset: "products",
  apiVersion: "2026-05-15",
  useCdn: false,
});

const builder = createImageUrlBuilder({
  projectId: "40rf158a",
  dataset: "products",
});

export function urlFor(source: any) {
  return builder.image(source);
}
