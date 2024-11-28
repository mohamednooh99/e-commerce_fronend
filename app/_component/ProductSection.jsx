"use client";

import React, { useEffect, useState } from "react";
import ProductApis from "../_utils/ProductApis";
import ProductList from "./ProductList";
import FeaturedCategory from "./FeaturedCategory";
import SkeletonUi from "./ui/SkeletonUi";
import Image from "next/image";

function ProductSection() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    fetchLatestProducts();
  }, []);

  const fetchLatestProducts = async () => {
    try {
      const response = await ProductApis.getLatestProducts();
      setProductList(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  const productsRemaining = productList.length - visibleCount;

  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      {/* Featured Categories */}
      <div className="flex justify-center text-center mx-auto">
        <FeaturedCategory productList={productList} />
      </div>

      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-3xl my-10 font-nunito tracking-wide">
          Our Latest Products
        </h2>
      </div>

      {/* Loading or Product List */}
      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {Array.from({ length: 6 }, (_, index) => (
            <SkeletonUi key={index} />
          ))}
        </div>
      ) : (
        <>
          <ProductList productList={productList.slice(0, visibleCount)} />

          {/* Load More Button */}
          {productsRemaining > 0 ? (
            <div className="flex justify-center mt-8">
              <button
                onClick={loadMoreProducts}
                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
              >
                Load More
              </button>
            </div>
          ) : (
            <div className="flex justify-center mt-10">
              <p className="text-gray-500">All products loaded</p>
            </div>
          )}
        </>
      )}

      {/* Promotional Section */}
      <section className="relative flex h-[350px] flex-col justify-center items-center mt-5">
        <Image
          className="absolute w-full h-full object-cover"
          fill
          alt="Promotional Banner"
          src="/img_2.webp"
          priority
        />
      </section>
    </div>
  );
}

export default ProductSection;
