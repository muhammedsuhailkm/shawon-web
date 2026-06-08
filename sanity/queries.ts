import { client, urlFor } from "./client";

// ---- Raw Sanity types ----
export type SanityProduct = {
  _id: string;
  name: string;
  slug: { current: string };
  image: {
    asset: { _ref: string };
    alt: string;
  };
  rating: number;
  category: string;
  price: number;
  description: string;
  isNew: boolean;
  isBestSeller: boolean;
};

// ---- Transformed type matching what ProductCard expects ----
export type TransformedProduct = {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  name: string;
  slug: string;
  rating: number;
  category: string;
  price: number;
  description: string;
  isNew: boolean;
  isBestSeller: boolean;
};

// ---- Transform function ----
function transformProduct(product: SanityProduct): TransformedProduct {
  return {
    id: product._id,
    image: {
      src: product.image
        ? urlFor(product.image).width(600).height(800).url()
        : "/images/placeholder.svg",
      alt: product.image?.alt || product.name,
    },
    name: product.name,
    slug: product.slug?.current || "",
    rating: product.rating,
    category: product.category,
    price: product.price,
    description: product.description,
    isNew: product.isNew ?? false,
    isBestSeller: product.isBestSeller ?? false,
  };
}

// ---- GROQ Queries ----
const PRODUCT_FIELDS = `
  _id,
  name,
  slug,
  image,
  rating,
  category,
  price,
  description,
  isNew,
  isBestSeller
`;

const ALL_PRODUCTS_QUERY = `*[_type == "product"] | order(_createdAt desc) {
  ${PRODUCT_FIELDS}
}`;

const BEST_SELLERS_QUERY = `*[_type == "product" && isBestSeller == true] | order(_createdAt desc) {
  ${PRODUCT_FIELDS}
}`;

const NEW_ARRIVALS_QUERY = `*[_type == "product" && isNew == true] | order(_createdAt desc) {
  ${PRODUCT_FIELDS}
}`;

const PRODUCTS_BY_CATEGORY_QUERY = `*[_type == "product" && category == $category] | order(_createdAt desc) {
  ${PRODUCT_FIELDS}
}`;

const PRODUCT_BY_ID_QUERY = `*[_type == "product" && _id == $id][0] {
  ${PRODUCT_FIELDS}
}`;

const PRODUCT_BY_SLUG_QUERY = `*[_type == "product" && slug.current == $slug][0] {
  ${PRODUCT_FIELDS}
}`;

// ---- Fetch functions ----
export async function getAllProducts(): Promise<TransformedProduct[]> {
  const products = await client.fetch<SanityProduct[]>(ALL_PRODUCTS_QUERY);
  return products.map(transformProduct);
}

export async function getBestSellers(): Promise<TransformedProduct[]> {
  const products = await client.fetch<SanityProduct[]>(BEST_SELLERS_QUERY);
  return products.map(transformProduct);
}

export async function getNewArrivals(): Promise<TransformedProduct[]> {
  const products = await client.fetch<SanityProduct[]>(NEW_ARRIVALS_QUERY);
  return products.map(transformProduct);
}

export async function getProductsByCategory(
  category: string,
): Promise<TransformedProduct[]> {
  const products = await client.fetch<SanityProduct[]>(
    PRODUCTS_BY_CATEGORY_QUERY,
    { category },
  );
  return products.map(transformProduct);
}

export async function getProductById(
  id: string,
): Promise<TransformedProduct | null> {
  const product = await client.fetch<SanityProduct | null>(
    PRODUCT_BY_ID_QUERY,
    { id },
  );
  return product ? transformProduct(product) : null;
}

export async function getProductBySlug(
  slug: string,
): Promise<TransformedProduct | null> {
  const product = await client.fetch<SanityProduct | null>(
    PRODUCT_BY_SLUG_QUERY,
    { slug },
  );
  return product ? transformProduct(product) : null;
}
