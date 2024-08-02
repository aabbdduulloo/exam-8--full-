"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getLikedProducts } from "@/service/like.service"; // Import the getLikedProducts function
import { HeartFilled } from "@ant-design/icons";
import Link from "next/link";

interface Product {
  product_id: number;
  product_name: string;
  cost: number;
  discount: number;
  image_url: string[];
}

export default function LikedProducts() {
  const [data, setData] = useState<Product[]>([]);

  const getData = async () => {
    try {
      const response = await getLikedProducts(10, 1);
      if (response.status === 200) {
        setData(response.data.products || []);
      }
    } catch (error) {
      console.error("Error fetching liked products:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto mt-[70px]">
      <div className="flex justify-between items-center mb-4 flex-wrap">
        <h1 className="text-[24px]">Понравившиеся продукты</h1>
      </div>
      <div className="flex justify-around relative flex-wrap gap-4 md:gap-8">
        {data.map((product: Product) => (
          <div key={product.product_id} className="relative">
            <div className="w-[250px] h-[350px] bg-white flex flex-col items-center justify-between relative shadow-md">
              <div className="absolute right-[20px] top-[20px] cursor-pointer">
                <HeartFilled style={{ color: "yellow" }} />
              </div>
              <div className="w-[150px] h-[194px] grid justify-center items-center z-[999]">
                <Image
                  src={
                    (product.image_url && product.image_url[0]) ||
                    "/default-image.png"
                  }
                  alt={product.product_name}
                  width={150}
                  height={194}
                />
              </div>
              <div className="px-3 text-center">
                <h1 className="text-[14px] sm:text-[16px] md:text-[18px]">
                  {product.product_name}
                </h1>
                <p className="text-red-700 font-bold text-[16px] sm:text-[18px] md:text-[20px]">
                  {product.cost} uzs
                </p>
                {product.discount > 0 && (
                  <span className="line-through opacity-50 text-[#1F1D14] text-[12px] sm:text-[14px] md:text-[16px]">
                    {Math.ceil(product.cost / (1 - product.discount / 100))} uzs
                  </span>
                )}
              </div>
              <Link
                // onClick={() => Cookie.set("product_id", product.product_id)}
                href={`/${product.product_id}`}
                className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg text-center text-[14px] sm:text-[16px] md:text-[18px]"
              >
                Корзина
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
