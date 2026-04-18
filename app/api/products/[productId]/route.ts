import products from "@/data/product.json";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ productId: string }> },
) {
  const { productId } = await params;
  const productData = products.find((product) => product.id === Number(productId));

  if (!productData)
    return NextResponse.json({ error: "Product Not Found" }, { status: 404 });

  return Response.json(productData);
}
