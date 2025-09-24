// app/components/AddToCartButton.tsx
"use client";
import React from "react";
import { addToCart } from "@/app/lib/cart"; // or "@/lib/cart" if you move it

export default function AddToCartButton({
  product,
  qty = 1,
  className,
}: {
  product: { id: string | number; name?: string; price: string | number };
  qty?: number;
  className?: string;
}) {
  const handle = () => {
    console.log("[AddToCartButton] click", product?.id);
    addToCart({ id: product.id, name: product.name, price: product.price }, qty);
  };

  return (
    <button onClick={handle} className={className ?? "px-3 py-2 bg-green-600 text-white rounded"}>
      Add to cart
    </button>
  );
}
