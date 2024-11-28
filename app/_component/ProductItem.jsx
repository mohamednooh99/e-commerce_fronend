import Link from "next/link";
import Image from "next/image";
import React from "react";
import { LuListMinus } from "react-icons/lu";
import SkeletonUi from "./ui/SkeletonUi";

function ProductItem({ product }) {
  // Fallback UI for missing product data
  if (
    !product ||
    !product.banner?.url ||
    !product.category ||
    !product.price ||
    !product.documentId
  ) {
    return <SkeletonUi />;
  }

  const toPath = `/productDetails/${product.documentId}`;

  return (
    <div className="hover:shadow-2xl transition-transform max-w-[300px] 2xl:w-full">
      {/* Product Image */}
      <Image
        src={product.banner.url || "/default-image.png"}
        alt={product.title || "Product Image"}
        width={300}
        height={500}
        className="rounded-t-lg h-[330px] sm:w-[330px] object-cover"
        priority
      />

      {/* Product Info */}
      <div className="p-3 space-y-2 py-4 border rounded-b">
        {/* Category */}
        <h2 className="font-medium text-xs md:text-sm flex items-center gap-1 font-nunito tracking-wide">
          <LuListMinus />
          {product.category || "Unknown Category"}
        </h2>

        {/* Title */}
        <h1 className="font-semibold text-[16px] line-clamp-1 font-nunito tracking-wide">
          {product.title || "Untitled Product"}
        </h1>

        {/* Price and Link */}
        <div className="flex items-center justify-between">
          <p className="font-nunito tracking-wide">
            {product.price || "N/A"}
          </p>
          <Link
            href={toPath}
            className="text-teal-500 text-sm font-semibold border-teal-500 rounded transition-transform hover:-translate-y-1 hover:text-teal-600 hover:border-teal-600 tracking-wide"
          >
            Product Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
