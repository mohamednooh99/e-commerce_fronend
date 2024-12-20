"use client";

import React, { useEffect, useState } from "react";
import ProductBanner from "../_component/ProductBanner";
import ProductInfo from "../_component/ProductInfo"; 
import { usePathname } from "next/navigation";
import BreadCrumb from "../../_component/BreadCrumb";
import ProductList from "../../_component/ProductList";
import ProductApis from "../../_utils/ProductApis";
import SkeletonUi from "../../_component/ui/SkeletonUi";

function productDetails({ params }) {
  const path = usePathname();
  const [productDetails, setProductDetails] = useState({});
  const [productListCategory, setProductListCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `Elessi Product Details `;
    getProductById_();
  }, [params?.productId]);

  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId).then((res) => {
      setProductDetails(res.data.data);
      getProductListByCategory(res.data.data);
    });
  };

  const getProductListByCategory = (product) => {
    ProductApis.getProductByCategory(product?.category)
      .then((res) => {
        setProductListCategory(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16  sm:px-6 lg:px-8 lg:pt-24">
      <BreadCrumb path={path} /> <br />
      <div className="  grid grid-cols-1 justify-center  sm:grid-cols-2 gap-5 ">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
      <div className="my-24">
        <div className="flex justify-between mb-4">
          <h2 className=" font-semibold text-xl"> Similar Category </h2>
        </div>
        {loading ? (
          // Render SkeletonUi multiple times to simulate loading
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {Array.from({ length: 3 }, (_, index) => (
              <SkeletonUi key={index} />
            ))}
          </div>
        ) : (
          <ProductList productList={productListCategory} />
        )}
      </div>
    </div>
  );
}

export default productDetails;
