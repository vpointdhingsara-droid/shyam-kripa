// app/products/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import AddToCartButton from "@/app/components/AddToCartButton";
import { products as allProducts } from "@/app/data/products";

export default function ProductPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = allProducts.find((p: any) => String(p.id) === String(id));
  if (!product) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image ?? "/placeholder.png"} alt={product.name} className="w-full h-[420px] object-cover rounded" />
        </div>

        <div>
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span className="text-gray-700">{product.name}</span>
          </nav>

          <h1 className="text-2xl font-semibold mb-3">{product.name}</h1>

          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl font-bold">₹{product.price}</div>
            {product.originalPrice && <div className="text-sm line-through text-gray-400">₹{product.originalPrice}</div>}
            {product.discount && <div className="text-sm text-green-600">{product.discount}% Off</div>}
          </div>

          <p className="text-gray-700 mb-4">{product.description ?? product.shortDescription}</p>

          <div className="flex items-center gap-3">
            <AddToCartButton product={product} className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700" />
            <Link href="/checkout" className="px-4 py-2 rounded border border-green-600 text-green-600 hover:bg-green-50">
              Buy Now
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h3 className="text-lg font-semibold mb-3">Product Details</h3>
        <div className="prose max-w-none text-gray-800">
          {product.longDescription ?? <p>{product.description}</p>}
        </div>
      </section>
    </div>
  );
}
