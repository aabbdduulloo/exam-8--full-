// "use client"; // Add this line to make the component a Client Component

// import Image from "next/image";
// import { useState } from "react";
// import img from "../../assets/images/star.svg";

// interface Comment {
//   id: number;
//   name: string;
//   text: string;
// }

// export default function About() {
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [name, setName] = useState("");
//   const [text, setText] = useState("");

//   const handleAddComment = () => {
//     if (name && text) {
//       const newComment = {
//         id: comments.length + 1,
//         name,
//         text,
//       };
//       setComments([...comments, newComment]);
//       setName("");
//       setText("");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-around mb-[70px]">
//       <div className="flex items-center justify-around mb-[70px] w-full">
//         <div>
//           <h1 className="xl:text-[24px] sm:text-[14px] font-semibold">
//             Описание
//           </h1>
//           <div className="bg-white xl:w-[500px] sm:w-[300px] xl:h-[500px] sm:h-[300px] xl:py-[70px] sm:py-[20px] xl:px-[70px] sm:px-[20px]">
//             <h1 className="xl:text-[24px] sm:text-[18px] font-semibold">
//               Гантель виниловая, 2 х 3 кг
//             </h1>
//             <p className="xl:text-[18px] sm:text-[12px] sm:mt-[12px] sm:mb-[28px] xl:mt-[28px] xl:mb-[53px] sm:w-[250px] xl:w-[400px]">
//               В составе томатов в большом количестве содержатся сахара,
//               клетчатка, пектины, бета-каротин, витамины.
//             </p>
//             <ul className="flex flex-wrap gap-4">
//               <li className="xl:w-[150px] sm:w-[100px]">
//                 <h3 className="sm:text-[12px] xl:text-[20px]">Вес гантела:</h3>
//                 <p className="sm:text-[10px] xl:text-[18px]">5кг</p>
//               </li>
//               <li className="xl:w-[150px] sm:w-[100px]">
//                 <h3 className="sm:text-[12px] xl:text-[20px]">Цвета:</h3>
//                 <p className="sm:text-[10px] xl:text-[18px]">Синий, Красный</p>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div>
//           <h1 className="xl:text-[24px] font-semibold sm:text-[16px]">
//             Гантель виниловая, 2 х 3 кг
//           </h1>
//           <div className="xl:w-[500px] xl:h-[500px] bg-white xl:py-[40px] sm:py-[20px] xl:px-[70px] sm:px-[20px] sm:w-[300px] sm:h-[300px]">
//             <div className="w-[400px]">
//               <h1 className="xl:text-[20px] sm:text-[14px]">Шахзод Анваров</h1>
//               <h2 className="xl:text-[16px] sm:text-[12px] opacity-[0.7] xl:mb-5 sm:mb-1">
//                 клиент
//               </h2>
//               <p className="xl:text-[18px] sm:text-[12px] sm:mt-[12px] sm:mb-[28px] xl:mt-[28px] xl:mb-[53px] sm:w-[250px] xl:w-[400px]">
//                 В составе томатов в большом количестве содержатся сахара,
//                 клетчатка, пектины, бета-каротин, витамины.
//               </p>
//               <Image src={img} alt="" className="xl:mt-5 sm:mb-1" />
//             </div>
//             <div className="w-[400px] xl:mt-6 sm:mt-2">
//               <h1 className="xl:text-[20px] sm:text-[14px]">Шахзод Анваров</h1>
//               <h2 className="xl:text-[16px] sm:text-[12px] opacity-[0.7] xl:mb-5 sm:mb-1">
//                 клиент
//               </h2>
//               <p className="xl:text-[18px] sm:text-[12px]">
//                 В составе томатов в большом количестве содержатся сахара,
//                 клетчатка, пектины, бета-каротин, витамины.
//               </p>
//               <Image src={img} alt="" className="xl:mt-5 sm:mb-1" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full flex flex-col items-center">
//         <h2 className="xl:text-[24px] sm:text-[18px] font-semibold mb-4">
//           Комментарии
//         </h2>
//         <div className="bg-white w-[80%] p-6 rounded-lg shadow-md">
//           {comments.map(comment => (
//             <div key={comment.id} className="mb-4">
//               <h3 className="font-semibold xl:text-[18px] sm:text-[14px]">
//                 {comment.name}
//               </h3>
//               <p className="xl:text-[16px] sm:text-[12px]">{comment.text}</p>
//             </div>
//           ))}
//         </div>
//         <div className="bg-white w-[80%] p-6 mt-6 rounded-lg shadow-md">
//           <h3 className="xl:text-[20px] sm:text-[16px] font-semibold mb-2">
//             Добавить комментарий
//           </h3>
//           <input
//             type="text"
//             value={name}
//             onChange={e => setName(e.target.value)}
//             placeholder="Ваше имя"
//             className="w-full p-2 mb-4 border rounded"
//           />
//           <textarea
//             value={text}
//             onChange={e => setText(e.target.value)}
//             placeholder="Ваш комментарий"
//             className="w-full p-2 mb-4 border rounded"
//           />
//           <button
//             onClick={handleAddComment}
//             className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Отправить
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

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
  const product_id = "your_product_id_here"; // Mahsulot ID sini shu yerda mos ravishda qo'ying

  const fetchComments = async () => {
    try {
      const response: any = await getComment(1, 10, product_id);
      setComments(response.products);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCommentSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      await addComment({ ...newComment, product_id }); // product_id ni yangi izoh bilan uzating
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
