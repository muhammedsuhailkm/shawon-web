import products from "@/data/product.json";

export async function GET() {
  return Response.json(products);
}
