"use client";
import { Carousel } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getSingleProduct } from "@/service/product.service";
import Cookie from "js-cookie";

export default function SinglePart() {
  const [product, setProduct] = useState<any>({});
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const productId = Cookie.get("product_id");

    if (productId) {
      const getData = async () => {
        try {
          const res = await getSingleProduct(productId);
          if (res && res.data) {
            setProduct(res.data);
            setImages(res.data.image_url || []);
          }
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      };
      getData();
    }
  }, []);

  const contentStyle: React.CSSProperties = {
    height: "600px",
    color: "#1F1D14",
    textAlign: "center",
    background: "#fff",
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between sm:ml-[40px] items-center p-5">
      <div className="xl:max-w-[800px] sm:max-w-[500px] xl:h-[600px] sm:h-[600px] mb-10 xl:mb-5">
        <Carousel arrows infinite autoplay>
          {images.length > 0 ? (
            images.map((src: string, index: number) => (
              <div key={index} className="relative w-full h-full">
                <div
                  style={contentStyle}
                  className="relative flex items-center justify-center bg-gray-200 rounded-lg shadow-lg overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={product.product_name || "Product Image"}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </div>
            ))
          ) : (
            <div style={contentStyle}>
              <p>No images available</p>
            </div>
          )}
        </Carousel>
      </div>
      <div className="w-full max-w-[400px] bg-white p-7 rounded-lg shadow-lg">
        <h1 className="text-[32px] font-medium mb-4">{product.product_name}</h1>
        <p className="text-[14px] mt-2 mb-4 font-normal">
          {product.description}
        </p>
        <p className="mb-2">
          В комплекте:
          <span className="font-semibold ml-3">{product.count} шт</span>
        </p>
        <p className="mb-2">
          Страна производства:
          <span className="font-semibold ml-3">{product.made_in}</span>
        </p>
        <p className="mb-2">
          Макс и Мин возраст:
          <span className="font-semibold ml-3">
            {product.age_min} - {product.age_max}
          </span>
        </p>
        <p className="mb-2">
          Цвет:
          <span className="font-semibold ml-3">{product.color}</span>
        </p>
        <p className="mb-4">
          Для:
          <span className="font-semibold ml-3">{product.for_gender}</span>
        </p>
        <span className="block mb-5 text-[24px] font-semibold">
          {"Цена: " + product.cost}
        </span>
        <div className="flex gap-3">
          <button className="w-[120px] h-[40px] bg-[#FBD029] text-black font-semibold rounded-md transition-transform transform hover:scale-105">
            Корзина
          </button>
          <button className="w-[120px] h-[40px] border-[#FBD029] border-2 text-[#FBD029] font-semibold rounded-md transition-transform transform hover:scale-105">
            Сравнить
          </button>
        </div>
      </div>
    </div>
  );
}
