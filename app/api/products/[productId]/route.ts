import { getProductById } from "@/sanity/queries";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ productId: string }> },
) {
  const { productId } = await params;
  const productData = await getProductById(productId);

  if (!productData)
    return NextResponse.json({ error: "Product Not Found" }, { status: 404 });

  return Response.json(productData);
}
