"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import img from "../../assets/images/star.svg";
import { getComment, addComment } from "@/service/comment.service";

interface Comment {
  name: string;
  text: string;
}

export default function About() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: "", text: "" });
  const product_id = "your_product_id_here";

  const fetchComments = async () => {
    try {
      const response: any = await getComment(1, 10, product_id);
      setComments(response.comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCommentSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      await addComment({
        message: newComment.text,
        productID: product_id,
        ownerID: newComment.name,
      });
      fetchComments();
      setNewComment({ name: "", text: "" });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="flex flex-col items-center mb-[70px]">
      <div className="flex items-center justify-around">
        <div>
          <h1 className="xl:text-[24px] sm:text-[14px] font-semibold">
            Описание
          </h1>
          <div className="bg-white xl:w-[500px] sm:w-[300px] xl:h-[500px] sm:h-[300px] xl:py-[70px] sm:py-[20px] xl:px-[70px] sm:px-[20px]">
            <h1 className="xl:text-[24px] sm:text-[18px] font-semibold">
              Гантель виниловая, 2 х 3 кг
            </h1>
            <p className="xl:text-[18px] sm:text-[12px] sm:mt-[12px] sm:mb-[28px] xl:mt-[28px] xl:mb-[53px] sm:w-[250px] xl:w-[400px]">
              В составе томатов в большом количестве содержатся сахара,
              клетчатка, пектины, бета-каротин, витамины.
            </p>
            <ul className="flex flex-wrap gap-4">
              <li className="xl:w-[150px] sm:w-[100px]">
                <h3 className="sm:text-[12px] xl:text-[20px]">Вес гантела:</h3>
                <p className="sm:text-[10px] xl:text-[18px]">5кг</p>
              </li>
              <li className="xl:w-[150px] sm:w-[100px]">
                <h3 className="sm:text-[12px] xl:text-[20px]">Цвета:</h3>
                <p className="sm:text-[10px] xl:text-[18px]">Синий, Красный</p>
              </li>
              <li className="xl:w-[150px] sm:w-[100px]">
                <h3 className="sm:text-[12px] xl:text-[20px]">Вес гантела:</h3>
                <p className="sm:text-[10px] xl:text-[18px]">5кг</p>
              </li>
              <li className="xl:w-[150px] sm:w-[100px]">
                <h3 className="sm:text-[12px] xl:text-[20px]">Цвета:</h3>
                <p className="sm:text-[10px] xl:text-[18px]">Синий, Красный</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="xl:text-[24px] font-semibold sm:text-[16px]">
            Гантель виниловая, 2 х 3 кг
          </h1>
          <div className="xl:w-[500px] xl:h-[500px] bg-white xl:py-[40px] sm:py-[20px] xl:px-[70px] sm:px-[20px] sm:w-[300px] sm:h-[300px]">
            {comments.map((comment, index) => (
              <div className="w-[400px] mb-6" key={index}>
                <h1 className="xl:text-[20px] sm:text-[14px]">
                  {comment.name}
                </h1>
                <h2 className="xl:text-[16px] sm:test-[12px] opacity-[0.7] xl:mb-5 sm:mb-1">
                  клиент
                </h2>
                <p className="xl:text-[18px] sm:text-[12px] sm:mt-[12px] sm:mb-[28px] xl:mt-[28px] xl:mb-[53px] sm:w-[250px] xl:w-[400px]">
                  {comment.text}
                </p>
                <Image src={img} alt="" className="xl:mt-5 sm:mb-1" />
              </div>
            ))}
            <form onSubmit={handleCommentSubmit} className="mt-8">
              <h2 className="xl:text-[20px] sm:text-[14px] mb-4">
                Добавить комментарий
              </h2>
              <input
                type="text"
                placeholder="Ваше имя"
                value={newComment.name}
                onChange={e =>
                  setNewComment({ ...newComment, name: e.target.value })
                }
                className="border rounded p-2 w-full mb-4"
                required
              />
              <textarea
                placeholder="Ваш комментарий"
                value={newComment.text}
                onChange={e =>
                  setNewComment({ ...newComment, text: e.target.value })
                }
                className="border rounded p-2 w-full mb-4"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 text-white py-2 px-4 rounded"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
