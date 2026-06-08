import { getAllProducts } from "@/sanity/queries";

export async function GET() {
  const products = await getAllProducts();
  return Response.json(products);
}
