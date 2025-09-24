// app/components/QuickViewModal.tsx
"use client";
import React from "react";
import AddToCartButton from "./AddToCartButton";

export default function QuickViewModal({
  product,
  open,
  onClose,
}: {
  product: any | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!open || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      {/* panel */}
      <div className="relative z-10 w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-auto">
        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <img
                src={product.image ?? "/placeholder.png"}
                alt={product.name}
                className="w-full h-64 object-cover rounded"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl font-bold">₹{product.price}</div>
                {product.originalPrice && (
                  <div className="text-sm line-through text-gray-500">₹{product.originalPrice}</div>
                )}
              </div>
              <p className="text-gray-700 mb-4">{product.shortDescription ?? product.description}</p>
              <div className="flex items-center gap-3">
                <AddToCartButton product={product} className="px-4 py-2 bg-green-600 text-white rounded" />
                <button
                  onClick={() => {
                    onClose();
                    window.location.href = `/products/${product.id}`;
                  }}
                  className="px-4 py-2 border rounded"
                >
                  View Product
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 text-right">
            <button onClick={onClose} className="text-sm text-gray-600 hover:text-gray-900">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
