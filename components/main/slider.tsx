import { Carousel } from "antd";
import img1 from "../../assets/images/pngwing 1.png";
import img2 from "../../assets/images/headclothes.png";
import img3 from "../../assets/images/jacket.png";
import img4 from "../../assets/images/little-boot.png";
import img5 from "../../assets/images/sport.png";
import img6 from "../../assets/images/skying.png";
import img7 from "../../assets/images/Group 48097028.png";
import img8 from "../../assets/images/Group 48097038.png";

import Image from "next/image";

export default function slider() {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "400px",
    color: "#1F1D14",
    textAlign: "center",
    background: "#fff",
  };
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
  return (
    <div>
      {" "}
      <div className="flex justify-center gap-5 flex-wrap">
        <div className="xl:max-w-[800px] xl:h-[500px] sm:max-w-[350px] sm:h-[200px] max-w-full h-auto">
          <Carousel arrows infinite={true} autoplay>
            {arr.map(e => (
              <div key={e}>
                <div
                  style={contentStyle}
                  className="relative flex justify-between items-center p-2 text-[#1F1D14]"
                >
                  <div className="w-[300px] h-[300px] bg-[#d32f2f] z-[1] absolute rounded-full sm:right-[20px] md:right-[40px] lg:right-[60px]"></div>
                  <div className="absolute w-[700px] xl:block sm:hidden h-[300px] bg-[#BDD400] z-[1] rotate-[115deg] bottom-0 right-[-300px]"></div>
                  <div className="flex flex-col items-start text-start xl:max-w-[350px] sm:max-w-[150px] z-[999] ml-5">
                    <h1 className="font-extrabold text-[20px] sm:text-[24px] md:text-[28px]">
                      Бутсы Nike Phantom GT2 Elite FG
                    </h1>
                  </div>
                  <Image
                    src={img1}
                    width={350}
                    height={350}
                    className="bg-contain z-[999] max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[350px]"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="flex flex-col flex-wrap">
          <div className="w-[320px] h-[200px]">
            <Image src={img7} alt="123" />
          </div>
          <div className="w-[320px] h-[200px]">
            {" "}
            <Image src={img8} alt="123" />
          </div>
        </div>
      </div>
      <div className="bg-white w-full mb-[70px]">
        <div className="container mx-auto">
          <h1 className="text-[36px] mb-5 ">Каталог</h1>
          <Carousel infinite={true} autoplay>
            {arr.map(e => (
              <div key={e}>
                <div className="flex justify-between flex-wrap relative bottom-1">
                  <div className="w-[180px] h-[240px] bg-[#D3E5F2] flex flex-col items-center justify-center gap-5 text-[24px]">
                    Тренажеры
                    <Image src={img4} alt="" />
                  </div>
                  <div className="w-[180px] h-[240px] bg-[#E2C6BE] flex flex-col items-center justify-center gap-5 text-[24px]">
                    Мячи
                    <Image src={img5} alt="" className="w-36" />
                  </div>{" "}
                  <div className="w-[180px] h-[240px] bg-[#DADBE0] flex flex-col items-center justify-center gap-5 text-[24px]">
                    Спротивные обуви
                    <Image src={img4} alt="" />
                  </div>{" "}
                  <div className="w-[180px] h-[240px] bg-[#E2EEC0] flex flex-col items-center justify-center gap-5 text-[24px]">
                    Спортивные одежды
                    <Image src={img3} alt="" />
                  </div>{" "}
                  <div className="w-[180px] h-[240px] bg-[#C2BCE8] flex flex-col items-center justify-center gap-5 text-[24px]">
                    Водный спорт
                    <Image src={img2} alt="" />
                  </div>
                  <div className="w-[180px] h-[240px] bg-[#ABA520] flex flex-col items-center justify-center gap-5 text-[24px]">
                    Горный спорт
                    <Image src={img6} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
