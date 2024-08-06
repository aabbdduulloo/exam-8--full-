"use client";
import Image from "next/image";
import img5 from "../../assets/images/pngegg (34) 3.png";
import img6 from "../../assets/images/pngegg (34) 9.png";
import img7 from "../../assets/images/pngegg (34) 10.png";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import http from "@/api";
import { getProduct } from "@/service/product.service";

interface Product {
  product_id: number;
  product_name: string;
  cost: number;
  discount: number;
  image_url: string[];
  liked: boolean;
}

export default function Cards() {
  const [data, setData] = useState<Product[]>([]);

  const getData = async () => {
    try {
      const response = await getProduct(4, 1);
      if (response.status === 200) {
        const likedProducts = JSON.parse(
          localStorage.getItem("likedProducts") || "[]"
        );
        const productsWithLikeState = response.data.products.map(
          (product: any) => ({
            ...product,
            liked: likedProducts.includes(product.product_id),
          })
        );
        setData(productsWithLikeState);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleLikeClick = async (productId: number) => {
    setData(prevData =>
      prevData.map((product: Product) =>
        product.product_id === productId
          ? { ...product, liked: !product.liked }
          : product
      )
    );

    const likedProducts = JSON.parse(
      localStorage.getItem("likedProducts") || "[]"
    );
    if (likedProducts.includes(productId)) {
      const updatedLikes = likedProducts.filter(
        (id: number) => id !== productId
      );
      localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
    } else {
      likedProducts.push(productId);
      localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
    }

    try {
      const response = await http.post(`/like/${productId}`);
      if (response.status !== 201) {
        console.error(`Failed to like product with id ${productId}`);
      }
    } catch (error) {
      console.error(`Error liking product with id ${productId}:`, error);
    }
  };

  return (
    <div>
      <div className="container mx-auto ">
        <Section
          title="Акция"
          defaultImage={img5}
          data={data}
          handleLikeClick={handleLikeClick}
        />
      </div>
      <div className="container mx-auto mt-[70px]">
        <Section
          title="Новинки"
          defaultImage={img6}
          data={data}
          handleLikeClick={handleLikeClick}
        />
      </div>
      <div className="container mx-auto mt-[70px]">
        <Section
          title="Продукты"
          defaultImage={img7}
          data={data}
          handleLikeClick={handleLikeClick}
        />
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  defaultImage: any;
  data: Product[];
  handleLikeClick: (productId: number) => void;
}

function Section({ title, defaultImage, data, handleLikeClick }: SectionProps) {
  return (
    <div>
      <div className="flex justify-center items-center mb-4 flex-wrap">
        <h1 className="text-[24px]">{title}</h1>
      </div>
      <div className="flex justify-around relative flex-wrap gap-4 md:gap-8">
        {data.map((product: Product) => (
          <div key={product.product_id} className="relative card-container">
            <div className="card w-[250px] h-[350px] bg-white flex flex-col items-center justify-between relative shadow-md border border-gray-300 rounded-lg hover:shadow-xl hover:border-yellow-500 transition-shadow duration-200 ease-in-out">
              <div
                className="absolute right-[20px] top-[20px] cursor-pointer"
                onClick={() => handleLikeClick(product.product_id)}
              >
                {product.liked ? (
                  <HeartFilled style={{ color: "red" }} />
                ) : (
                  <HeartOutlined />
                )}
              </div>
              <div className="w-[150px] h-[194px] grid justify-center items-center z-[999]">
                <Image
                  src={
                    (product.image_url && product.image_url[0]) || defaultImage
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
                {title === "Акция" && product.discount > 0 && (
                  <span className="line-through opacity-50 text-[#1F1D14] text-[12px] sm:text-[14px] md:text-[16px]">
                    {Math.ceil(product.cost / (1 - product.discount / 100))} uzs
                  </span>
                )}
              </div>
              <Link
                onClick={() => {
                  Cookie.set("product_id", product.product_id.toString());
                  Cookie.set("product_image", product.image_url[0]);
                }}
                href={`/${product.product_id.toString()}`}
                className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg text-center text-[14px] sm:text-[16px] md:text-[18px] hover:bg-yellow-500 transition-colors duration-300 ease-in-out"
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
