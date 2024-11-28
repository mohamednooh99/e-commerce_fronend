import Link from "next/link";
import Image from "next/image";
import React from "react";
import { LuListMinus } from "react-icons/lu";
import SkeletonUi from "./ui/SkeletonUi";

function ProductItem({ product }) {
  // Ensure product and documentId are available before rendering the Link component
  if (
    !product ||
    !product.banner ||
    !product.banner.url ||
    !product.category ||
    !product.price ||
    !product.documentId
  ) {
    return <SkeletonUi />;
  }

  const toPath = `/productDetails/${product.documentId}`;

  return (
    <>
      <div className="hover:shadow-2xl hover:transition-all max-w-[300px] 2xl:w-full">
        <Image
          src={product.banner?.url || "/default-image.png"}
          alt={product.title || "Product Image"}
          width={300}
          height={500}
          className="rounded-t-lg h-[330px] sm:w-[330px]  object-cover"
          priority 
        />
        <div className="p-3 space-y-2 py-4 border rounded-b ">
          <h2 className="font-medium text-xs md:text-[14px] flex gap-1 font-nunito text-medium tracking-widest">
            <LuListMinus /> {product.category || "Unknown Category"}{" "}
          </h2>
          <h1 className="font-semibold font-sans text-lg line-clamp-1 font-nunito text-medium tracking-widest">
            {product.title || "Untitled Product"}{" "}
          </h1>
          <div className="flex items-center justify-between">
            <p className="flex gap-1 font-nunito text-medium tracking-widest">
              {product.price || "N/A"}
            </p>
            <Link
              href={toPath}
              className="text-teal-600 text-[14px] md:text[12px] font-semibold transition-transform hover:-translate-y-1
        motion-reduce:transform-none hover:text-teal-800 text-medium tracking-widest"
            >
              {" "}
              Product Details →{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
