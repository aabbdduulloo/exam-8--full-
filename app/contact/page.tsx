import { HeartOutlined, EyeOutlined, CalendarOutlined } from "@ant-design/icons";
import Image from "next/image";
import img5 from "../../assets/images/pngegg (34) 3.png";
import Link from "next/link";

function Contact() {
  const arr2 = [];
  for (let i = 0; i < 4; i++) {
    arr2.push(i);
  }
  return (
    <>
      <div className="container mx-auto max-w-[1240px] px-4">
        <h1 className="text-[32px] font-medium my-5">Полезные информации</h1>
        <div className="flex flex-wrap justify-between gap-3 mb-7">
          <div className="w-full sm:w-[48%] h-[400px] bg-white p-[35px] flex flex-col justify-between">
            <div>
              <h1 className="text-[hsl(49,22%,10%)] text-[18px] sm:text-[24] lg:text-[32px]">
                Как правильно выбрать эллиптический тренажер?
              </h1>
              <p className="text-[14px] sm:[16px] opacity-[0.7] mt-[20px]">
                Эллиптические тренажёры популярны среди людей любого возраста и
                с разным уровнем физической подготовкb Эллиптические тренажёры
                популярны среди людей любого возраста и с разным уровнем
                физической подготовки...
              </p>
            </div>
            <div className="flex items-center mt-4">
              <CalendarOutlined className="text-[16px]" />
              <span className="text-[12px] ml-2">27.07.2024</span>
              <EyeOutlined className="text-[16px] ml-4" />
              <span className="text-[12px] ml-2">250</span>
            </div>
          </div>

          <div className="w-full sm:w-[48%] h-[400px] bg-white p-[35px] flex flex-col justify-between">
            <div>
              <h1 className="text-[hsl(49,22%,10%)] text-[18px] sm:text-[24] lg:text-[32px]">
                Как правильно выбрать эллиптический тренажер?
              </h1>
              <p className="text-[14px] sm:[16px] opacity-[0.7] mt-[20px]">
                Эллиптические тренажёры популярны среди людей любого возраста и
                с разным уровнем физической подготовкb Эллиптические тренажёры
                популярны среди людей любого возраста и с разным уровнем
                физической подготовки...
              </p>
            </div>
            <div className="flex items-center mt-4">
              <CalendarOutlined className="text-[16px]" />
              <span className="text-[12px] ml-2">27.07.2024</span>
              <EyeOutlined className="text-[16px] ml-4" />
              <span className="text-[12px] ml-2">250</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 mb-7">
          <div className="w-full sm:w-[48%] h-[400px] bg-white p-[35px] flex flex-col justify-between">
            <div>
              <h1 className="text-[hsl(49,22%,10%)] text-[18px] sm:text-[24] lg:text-[32px]">
                Как правильно выбрать эллиптический тренажер?
              </h1>
              <p className="text-[14px] sm:[16px] opacity-[0.7] mt-[20px]">
                Эллиптические тренажёры популярны среди людей любого возраста и
                с разным уровнем физической подготовкb Эллиптические тренажёры
                популярны среди людей любого возраста и с разным уровнем
                физической подготовки...
              </p>
            </div>
            <div className="flex items-center mt-4">
              <CalendarOutlined className="text-[16px]" />
              <span className="text-[12px] ml-2">27.07.2024</span>
              <EyeOutlined className="text-[16px] ml-4" />
              <span className="text-[12px] ml-2">250</span>
            </div>
          </div>

          <div className="w-full sm:w-[48%] h-[400px] bg-white p-[35px] flex flex-col justify-between">
            <div>
              <h1 className="text-[hsl(49,22%,10%)] text-[18px] sm:text-[24] lg:text-[32px]">
                Как правильно выбрать эллиптический тренажер?
              </h1>
              <p className="text-[14px] sm:[16px] opacity-[0.7] mt-[20px]">
                Эллиптические тренажёры популярны среди людей любого возраста и
                с разным уровнем физической подготовкb Эллиптические тренажёры
                популярны среди людей любого возраста и с разным уровнем
                физической подготовки...
              </p>
            </div>
            <div className="flex items-center mt-4">
              <CalendarOutlined className="text-[16px]" />
              <span className="text-[12px] ml-2">27.07.2024</span>
              <EyeOutlined className="text-[16px] ml-4" />
              <span className="text-[12px] ml-2">250</span>
            </div>
          </div>
        </div>

        <button className="py-[15px] px-[40px] text-[20px] mb-[80px] border-yellow-400 border-2">
          Показать ещё
        </button>

        <div className="container mx-auto max-w-[1240px]">
          <div className="flex justify-between items-center mb-4 flex-wrap">
            <h1 className="text-[24px]">Акция</h1>
            <div className="flex gap-3">
              <button className="bg-white w-[40px] h-[40px] rounded-full">
                {"<"}
              </button>
              <button className="bg-white w-[40px] h-[40px] rounded-full">
                {">"}
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-around relative">
            {arr2.map((e) => (
              <div key={e} className="relative mb-[50px]">
                <div className="w-[250px] h-[350px] bg-white flex flex-col items-center justify-between relative">
                  <div className="absolute right-[20px] top-[20px] cursor-pointer">
                    <HeartOutlined />
                  </div>
                  <div className="w-[150px] h-[194px] grid justify-center items-center z-[999]">
                    <Image src={img5} alt="" />
                  </div>
                  <div className="px-3 flex flex-col items-start">
                    <h1>Бутса Nike Mercurial Superfly 8 FG</h1>
                    <p className="text-red-700 font-bold">500 000 uzs</p>
                    <div className="flex items-center w-full justify-between">
                      <span className="line-through opacity-[0.5] text-[#1F1D14] text-[12px]">
                        750 000
                      </span>
                      <span className="text-[#1F1D14] text-[12px]">discount</span>
                    </div>
                    {/* <div className="flex items-center gap-2 mt-2">
                      <CalendarOutlined className="text-[16px]" />
                      <span className="text-[12px]">27.07.2024</span>
                      <EyeOutlined className="text-[16px] ml-4" />
                      <span className="text-[12px]">250</span>
                    </div> */}
                  </div>
                  <Link href={"/products/single"} className="w-full">
                    <button className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg">
                      Корзина
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
